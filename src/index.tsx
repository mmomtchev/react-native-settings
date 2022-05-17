import React from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator, Keyboard } from 'react-native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

export type ReactNativeSettingsGetter<T> = () => T | Promise<T>;
export type ReactNativeSettingsSetter<T> = (v: T) => boolean | void | Promise<void>;

export interface SettingsElementString {
    label: string;
    type: 'string';
    get: ReactNativeSettingsGetter<string>;
    set: ReactNativeSettingsSetter<string>;
    display?: (v: string) => string;
};

export interface SettingsElementNumber {
    label: string;
    type: 'number';
    get: ReactNativeSettingsGetter<number>;
    set: ReactNativeSettingsSetter<number>;
    display?: (v: number) => string;
};

export interface SettingsElementEnum {
    label: string;
    type: 'enum';
    values: string[];
    get: ReactNativeSettingsGetter<string>;
    set: ReactNativeSettingsSetter<string>;
    display?: (v: string) => string;
};

export interface SettingsElementBoolean {
    label: string;
    type: 'boolean';
    get: ReactNativeSettingsGetter<boolean>;
    set: ReactNativeSettingsSetter<boolean>;
};

export type SettingsElementSection = {
    label: string;
    type: 'section';
    elements: SettingsElement[];
};

export type SettingsElement = SettingsElementString | SettingsElementNumber | SettingsElementEnum | SettingsElementBoolean | SettingsElementSection;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 5
    },
    list: {
        padding: 5,
    },
    header: {
        backgroundColor: '#dce3f4',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart: 10,
        paddingEnd: 10
    },
    item: {
        fontFamily: 'sans-serif',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
        borderColor: '#c8c7cc',
        borderBottomWidth: 2,
        paddingStart: 10,
        paddingEnd: 10
    },
    label: {
    },
    value: {
        color: '#c8c7cc'
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100
    }
});

interface SettingContextType {
    spinStart: () => void,
    spinStop: () => void;
};
const SettingsContext = React.createContext<SettingContextType>({ spinStart: () => undefined, spinStop: () => undefined });

function then<T>(value: T | Promise<T>, fn: (value: T) => void): void {
    if (value instanceof Promise)
        value.then(fn);
    else
        fn(value);
}

function reducer(state: unknown[], action: {
    idx: number;
    item: SettingsElement;
    value: unknown;
    readOnly?: boolean;
    context: SettingContextType;
}): unknown[] {
    console.log('dispatch', action);
    if (action.item.type === 'section') throw new Error('Sections cannot be reduced');
    const newState = [...state];
    newState[action.idx] = action.value;

    if (action.readOnly)
        return newState;

    const setResult = action.item.set(action.value as never);
    if (setResult === false) return state;
    if (setResult instanceof Promise) {
        setImmediate(() => action.context.spinStart());
        setResult.then(() => action.context.spinStop());
    }

    return newState;
}

type StackParamList = {
    ReactNativeSettingsMain: undefined;
    ReactNativeSettingsEnum: { element: SettingsElementEnum, onChange: (v: string) => void };
};
const SettingsStack = createNativeStackNavigator<StackParamList>();

function SettingsList(props: {
    settings: SettingsElement[];
    name?: string;
    nav: NativeStackScreenProps<StackParamList, 'ReactNativeSettingsMain'>
}) {
    const context = React.useContext(SettingsContext);

    const [values, dispatch] = React.useReducer(reducer, []);
    React.useEffect(() => {
        props.settings.map((el, i) => {
            if (el.type === 'section') return;
            context.spinStart();
            then(el.get(), (v) => {
                dispatch({ idx: i, item: el, value: v, readOnly: true, context });
                context.spinStop();
            });
        });
    }, [props.settings, dispatch]);

    const [editing, setEditing] = React.useState<number>(Infinity);
    const [inputText, setInputText] = React.useState<string>('');
    const textInput = React.useRef<TextInput>(null);

    return (
        <View style={styles.list}>
            {
                props.settings.map((element, i) => {
                    switch (element.type) {
                        case 'section':
                            return (
                                <View key={i}>
                                    <View style={styles.header}>
                                        <Text style={styles.label}>
                                            {element.label}
                                        </Text>
                                    </View>
                                    <SettingsList nav={props.nav} settings={element.elements} />
                                </View>
                            );
                        case 'boolean':
                            const onPress = () => dispatch({ idx: i, item: element, value: !values[i], context });
                            return (
                                <TouchableOpacity
                                    key={i} style={styles.item}
                                    onPress={onPress}
                                >
                                    <Text style={styles.label}>{element.label}</Text>
                                    <Switch onChange={onPress} value={values[i] as boolean} />
                                </TouchableOpacity>
                            );
                        case 'string':
                        case 'number':
                            {
                                const display = element.display || ((i: number | string) => i.toString());
                                const kb = Keyboard.addListener('keyboardDidHide', () => {
                                    if (textInput.current)
                                        textInput.current.blur();
                                    kb.remove();
                                });
                                if (editing == i) {
                                    return (
                                        <View key={i} style={styles.item}>
                                            <TextInput
                                                autoFocus
                                                ref={textInput}
                                                style={styles.item}
                                                value={inputText}
                                                keyboardType={element.type === 'number' ? 'numeric' : undefined}
                                                onChangeText={(t) => setInputText(t)}
                                                onSubmitEditing={() => dispatch({ idx: i, item: element, value: inputText, context })}
                                                onBlur={() => {
                                                    setEditing(Infinity);
                                                    kb.remove();
                                                }}
                                            />
                                        </View >
                                    );
                                }
                                return (
                                    <TouchableOpacity
                                        key={i} style={styles.item}
                                        onPress={() => {
                                            setEditing(i);
                                            setInputText('');
                                        }}
                                    >
                                        <Text style={styles.label}>{element.label}</Text>
                                        <Text style={styles.value}>{display(values[i] as never)}</Text>
                                    </TouchableOpacity >
                                );
                            }
                        case 'enum':
                            {
                                const display = element.display || ((i) => i);
                                const onChange = (v: string) => dispatch({ idx: i, item: element, value: v, context });
                                return (
                                    <TouchableOpacity
                                        key={i} style={styles.item}
                                        onPress={() =>
                                            props.nav.navigation.navigate('ReactNativeSettingsEnum', {element, onChange})}
                                    >
                                        <Text style={styles.label}>{element.label}</Text>
                                        <Text style={styles.value}>{display(values[i] as string)}</Text>
                                    </TouchableOpacity >
                                );
                            }
                    }
                })
            }
        </View>
    );
}

function EnumValues(props: { element: SettingsElementEnum, onChange: (val: string) => void; }) {
    const display = props.element.display || ((i) => i);
    return (
        <View>
            {
                props.element.values.map((val, i) => (
                    <TouchableOpacity
                        key={i} style={styles.item}
                        onPress={() => props.onChange(val)}
                    >
                        <Text>{display(val)}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    );
}

export default function ReactNativeSettings(props: {
    settings: SettingsElement[];
}) {
    const [spinning, setSpinning] = React.useState<number>(0);

    const context = React.useMemo(() => ({
        spinStart: () => setSpinning((current) => current + 1),
        spinStop: () => setSpinning((current) => current - 1)
    }), [setSpinning]);

    return (
        <View style={styles.screen}>
            <View pointerEvents={spinning > 0 ? 'none' : 'auto'} style={{ flex: 1, opacity: spinning > 0 ? 0.25 : 1 }}>
                <SettingsContext.Provider value={context}>
                    {
                        spinning ? <ActivityIndicator style={styles.loading} size="large" /> : null
                    }
                    <SettingsStack.Navigator>
                        <SettingsStack.Screen name={'ReactNativeSettingsMain'} options={{ headerShown: false }}>
                            {(nav) =>
                                <SettingsList nav={nav} settings={props.settings} />
                            }
                        </SettingsStack.Screen>
                        <SettingsStack.Screen
                            name={'ReactNativeSettingsEnum'}
                            options={({route}) => ({ title: route.params.element.label })}
                        >
                            {(nav) =>
                                <EnumValues
                                    element={nav.route.params.element}
                                    onChange={(v: string) => {
                                        nav.route.params.onChange(v);
                                        nav.navigation.navigate('ReactNativeSettingsMain');
                                    }}
                                />
                            }
                        </SettingsStack.Screen>
                    </SettingsStack.Navigator>
                </SettingsContext.Provider>
            </View>
        </View>
    );
}
