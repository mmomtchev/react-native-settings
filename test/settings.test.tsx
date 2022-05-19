import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {cleanup, fireEvent, render, waitFor} from '@testing-library/react-native';

import Settings, * as REL from 'react-native-settings-screen';

import {settings} from './data';

describe('react-native-settings-screen', () => {
    it('basic use', async () => {
        const r = render(
            <NavigationContainer>
                <Settings settings={settings} />
            </NavigationContainer>
        );
        await waitFor(() => expect(r.getByText('Intelligence')));
        expect(r.toJSON()).toMatchSnapshot();

        const newSettings = [...settings];
        newSettings[1] = {...newSettings[1]};
        newSettings[1].label = 'Dexterity';
        r.rerender(
            <NavigationContainer>
                <Settings settings={newSettings} />
            </NavigationContainer>
        );
        await waitFor(() => expect(r.getByText('Dexterity')));
        expect(r.toJSON()).toMatchSnapshot();
        r.unmount();
    });
});
