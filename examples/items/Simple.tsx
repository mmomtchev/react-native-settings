import React from 'react';
import ReactDOM from 'react-dom';
import {Dimensions, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {default as ReactNativeSettings, SettingsElement} from '@mmomtchev/react-native-settings';

// We will store the config here
const configData: Record<string, string> = {};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: Dimensions.get('window').height,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: '1.5%'
    }
});

// Retrieve a conf item or return the default
const confGet = (key: string, def: string): string => configData[key] || def;

// Store a conf item
const confSet = (key: string, value: string): void => {
    configData[key] = value;
};

const intelligence: Record<string, string> = {L: 'Low', M: 'Medium', H: 'High'};

// This is the configuration schema
const settings: SettingsElement[] = [
    {
        label: 'Name',
        type: 'string',
        display: (s) => (s && s.length ? s : 'empty'),
        get: confGet.bind(null, '@name', ''),
        set: confSet.bind(null, '@name')
    },
    // Choose from a list, uses the standard phone navigation screens
    {
        label: 'Intelligence',
        title: 'Select Intelligence',
        type: 'enum',
        values: Object.keys(intelligence),
        display: (v: string) => intelligence[v],
        get: confGet.bind(null, '@int', 'M'),
        set: confSet.bind(null, '@int')
    },
    // Boolean switch
    {
        label: 'Wings',
        type: 'boolean',
        get: async () => (await confGet('@wings', 'false')) === 'true',
        set: (v) => confSet('@wings', v.toString())
    }
];

export default function Settings() {
    // Simply pass the schema here
    // It integrates in your existing `NavigationContainer` or `Screen`
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <ReactNativeSettings settings={settings} />
            </View>
        </NavigationContainer>
    );
}

ReactDOM.render(<Settings />, window.document.getElementById('root'));
