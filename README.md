# react-native-settings-screen

**React Native Universal Settings Screen With Async Support & Spinner**

To my greatest surprise, `react-native`, unlike the native frameworks of iOS and Android, does not offer a standard ready-to-use `Settings` screen template.

It seems that the `react-native` developers have decided to leave those components to the community.


# Usage

![screenshot](https://raw.githubusercontent.com/mmomtchev/react-native-settings-screen/main/screenshot.png)

```tsx
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { default as ReactNativeSettings, SettingsElement } from 'react-native-settings-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: Dimensions.get('window').height,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: '1.5%'
    }
});

// You have to define a configuration getter
// (you are allowed to use async)
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

// And a configuration setter
// (you are allowed to use async or to return false to deny the operation but not both at the same time)
function confSet(key: string, value: string): Promise<void> | boolean {
    // denying must be synchronous
    if (value.startsWith('bad')) return false;
    // I am slow
    return new Promise(resolve => setTimeout(resolve, 500)).then(() =>
        AsyncStorage.setItem(key, value).catch((e) => {
            console.error(e);
        }));
}

const intelligence: Record<string, string> = { L: 'Low', M: 'Medium', H: 'High' };
const pairs: Record<string, string> = { '2': 'Two', '4': 'Four', '6': 'Six', '8': 'Eight' };

// This is the configuration schema
const settings: SettingsElement[] = [
    {
        // Two items grouped under a common header
        label: 'Alien Race', type: 'section', elements: [
            {
                label: 'Name', type: 'string', display: (s) => s && s.length ? s : 'empty',
                get: confGet.bind(null, '@name', ''), set: confSet.bind(null, '@name')
            },
            {
                // You can use `display` to define how information is rendered
                label: 'Secret', type: 'string', display: (s) => s && s.length ? '***' : 'empty',
                get: confGet.bind(null, '@password', ''), set: confSet.bind(null, '@password')
            }
        ]
    },
    {
        // Choose-from-a-list item, uses the standard phone navigation screens
        label: 'Legs', type: 'enum', values: Object.keys(intelligence), display: (v: string) => pairs[v],
        get: confGet.bind(null, '@legs', '2'), set: confSet.bind(null, '@legs')
    },
    {
        // Choose-from-a-list item, uses the standard phone navigation screens
        label: 'Arms', type: 'enum', values: Object.keys(intelligence), display: (v: string) => pairs[v],
        get: confGet.bind(null, '@arms', '2'), set: confSet.bind(null, '@arms')
    },
    {
        // Boolean switches grouped under a common header
        label: 'Features', type: 'section', elements: [
            { label: 'Wings', type: 'boolean',
                get: async () => await confGet('@wings', 'false') === 'true',
                set: (v) => confSet('@wings', v.toString()) },
            { label: 'Horns', type: 'boolean',
                get: async () => await confGet('@horns', 'true') === 'true',
                set: (v) => confSet('@horns', v.toString()) },
            { label: 'Fangs', type: 'boolean',
                get: async () => await confGet('@fangs', 'false') === 'true',
                    set: (v) => confSet('@fangs', v.toString()) },
            { label: 'Claws', type: 'boolean',
                get: async () => await confGet('@claws', 'false') === 'true',
                set: (v) => confSet('@claws', v.toString()) },
            { label: 'Gills', type: 'boolean',
                get: async () => await confGet('@gills', 'false') === 'true',
                set: (v) => confSet('@gills', v.toString()) },
        ]
    }
];

export default function Settings() {
    // Simply pass the schema here
    // Can be integrated in your existing `Navigator`
    return (
        <View style={styles.container}>
            <ReactNativeSettings settings={settings} />
        </View>
    );
}
```