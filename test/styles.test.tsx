import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {render} from '@testing-library/react-native';

import Settings, {SettingsElement, SettingsStyle} from '@mmomtchev/react-native-settings';
import {waitForSpinner} from './data';

describe('styles', () => {
    const settings: SettingsElement[] = [
        {
            label: 'Name',
            type: 'string',
            display: (s) => (s && s.length ? s : 'empty'),
            get: () => '',
            set: (v) => undefined
        },
        {
            label: 'Intelligence',
            type: 'enum',
            values: ['A'],
            display: () => 'Alpha',
            get: () => 'A',
            set: (v) => undefined
        },
        {
            label: 'Header',
            type: 'section',
            elements: [
                {
                    label: 'Wings',
                    type: 'boolean',
                    get: () => true,
                    set: (v) => undefined
                }
            ]
        }
    ];

    const styles: SettingsStyle = StyleSheet.create({
        screen: {
            flex: 1,
            padding: 4
        },
        list: {
            padding: 6
        },
        header: {
            backgroundColor: '#dce3f4',
            height: 42,
            flexDirection: 'row',
            alignItems: 'center',
            paddingStart: 12,
            paddingEnd: 12
        },
        item: {
            fontFamily: 'sans-serif',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 41,
            borderColor: '#c8c7cc',
            borderBottomWidth: 2,
            paddingStart: 10,
            paddingEnd: 10
        },
        input: {
            fontFamily: 'serif'
        },
        label: {
            color: 'blue'
        },
        value: {
            color: 'red'
        },
        spinner: {
            position: 'absolute',
            left: 25,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
        }
    });

    it('render', async () => {
        const r = render(
            <NavigationContainer>
                <Settings styles={styles} settings={settings} />
            </NavigationContainer>
        );
        await waitForSpinner(r);
        expect(r.toJSON()).toMatchSnapshot();
        r.unmount();
    });
});

describe('components', () => {
    const settings: SettingsElement[] = [
        {
            label: 'Name',
            type: 'string',
            display: (s) => (s && s.length ? s : 'empty'),
            get: () => '',
            set: (v) => undefined,
            jsxLabel: <Text>_N_A_M_E</Text>
        },
        {
            label: 'Intelligence',
            type: 'enum',
            values: ['A'],
            display: () => 'Alpha',
            get: () => 'A',
            set: (v) => undefined,
            jsxLabel: <Text>1nt3ll1g3nc3</Text>
        },
        {
            label: 'Header',
            type: 'section',
            jsxLabel: <Text>FEATURES</Text>,
            elements: [
                {
                    label: 'Wings',
                    type: 'boolean',
                    get: () => true,
                    set: (v) => undefined,
                    jsxLabel: <Text>wiiings</Text>
                }
            ]
        }
    ];

    it('render', async () => {
        const r = render(
            <NavigationContainer>
                <Settings settings={settings} />
            </NavigationContainer>
        );
        await waitForSpinner(r);
        expect(r.toJSON()).toMatchSnapshot();
        r.unmount();
    });
});
