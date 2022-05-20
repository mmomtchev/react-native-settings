import React from 'react';
import {Dimensions, StyleSheet, View, Image, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import wings from '../wings.svg';
import {default as ReactNativeSettings, SettingsElement} from 'react-native-settings-screen';

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
        display: (s) => (s && s.length ? s : 'not set'),
        get: confGet.bind(null, '@name', ''),
        set: confSet.bind(null, '@name')
    },
    {
        label: 'Intelligence',
        type: 'enum',
        values: Object.keys(intelligence),
        display: (v: string) => intelligence[v],
        get: confGet.bind(null, '@int', 'M'),
        set: confSet.bind(null, '@int')
    },
    {
        label: 'Wings',
        type: 'boolean',
        get: async () => (await confGet('@wings', 'false')) === 'true',
        set: (v) => confSet('@wings', v.toString()),
        // You can pass your own JSX element to be used as label
        jsxLabel: (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <Image style={{width: 60, height: 20, marginRight: 10}} source={{uri: wings}} />
                <Text>Wings</Text>
            </View>
        )
    }
];

export default function Settings() {
    // The default styles can be overriden
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <ReactNativeSettings
                    styles={{value: {color: 'blue', fontFamily: 'serif'}}}
                    settings={settings}
                />
            </View>
        </NavigationContainer>
    );
}
