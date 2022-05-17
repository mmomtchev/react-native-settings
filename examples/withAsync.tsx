import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { default as ReactNativeSettings, SettingsElement } from 'react-native-settings-screen';

AsyncStorage.clear();

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: Dimensions.get('window').height,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: '1.5%'
    }
});

async function confGet(key: string, def: string): Promise<string> {
    // I am slow
    await new Promise(resolve => setTimeout(resolve, 500));
    return AsyncStorage.getItem(key).then((v) => {
        if (v === null) throw new Error('value not found');
        return v;
    }).catch(() => {
        return def;
    });
}

function confSet(key: string, value: string): Promise<void> | boolean {
    // I am slow
    return new Promise(resolve => setTimeout(resolve, 500)).then(() =>
        AsyncStorage.setItem(key, value).catch((e) => {
            console.error(e);
        }));
}

const intelligence: Record<string, string> = { L: 'Low', M: 'Medium', H: 'High' };
const pairs: Record<string, string> = { '2': 'Two', '4': 'Four', '6': 'Six', '8': 'Eight' };

const settings: SettingsElement[] = [
    {
        label: 'Alien Race', type: 'section', elements: [
            {
                label: 'Name', type: 'string', display: (s) => s && s.length ? s : 'empty',
                get: confGet.bind(null, '@name', ''), set: confSet.bind(null, '@name')
            },
            {
                label: 'Secret', type: 'string', display: (s) => s && s.length ? '***' : 'empty',
                get: confGet.bind(null, '@password', ''), set: confSet.bind(null, '@password')
            }
        ]
    },
    // Independent enums
    {
        label: 'Intelligence', type: 'enum', values: Object.keys(intelligence), display: (v: string) => intelligence[v],
        get: confGet.bind(null, '@int', 'M'), set: confSet.bind(null, '@int')
    },
    {
        label: 'Legs', type: 'enum', values: Object.keys(pairs), display: (v: string) => pairs[v],
        get: confGet.bind(null, '@legs', '2'), set: confSet.bind(null, '@legs')
    },
    {
        label: 'Arms', type: 'enum', values: Object.keys(pairs), display: (v: string) => pairs[v],
        get: confGet.bind(null, '@arms', '2'), set: confSet.bind(null, '@arms')
    },
    {
        label: 'Features', type: 'section', elements: [
            { label: 'Wings', type: 'boolean', get: async () => await confGet('@wings', 'false') === 'true', set: (v) => confSet('@wings', v.toString()) },
            { label: 'Horns', type: 'boolean', get: async () => await confGet('@horns', 'true') === 'true', set: (v) => confSet('@horns', v.toString()) },
            { label: 'Fangs', type: 'boolean', get: async () => await confGet('@fangs', 'false') === 'true', set: (v) => confSet('@fangs', v.toString()) },
            { label: 'Claws', type: 'boolean', get: async () => await confGet('@claws', 'false') === 'true', set: (v) => confSet('@claws', v.toString()) },
            { label: 'Gills', type: 'boolean', get: async () => await confGet('@gills', 'false') === 'true', set: (v) => confSet('@gills', v.toString()) },
        ]
    }
];

export default function Settings() {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <ReactNativeSettings settings={settings} />
            </View>
        </NavigationContainer>
    );
}
