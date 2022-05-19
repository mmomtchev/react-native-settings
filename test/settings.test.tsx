import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Switch, TextInput} from 'react-native';
import {act, fireEvent, render, waitFor} from '@testing-library/react-native';

import Settings, * as REL from 'react-native-settings-screen';

import {settings, reset} from './data';

describe('react-native-settings-screen', () => {
    beforeEach(reset);

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
        await act(async () =>
            r.rerender(
                <NavigationContainer>
                    <Settings settings={newSettings} />
                </NavigationContainer>
            )
        );
        expect(r.getByText('Dexterity'));
        expect(r.toJSON()).toMatchSnapshot();
        r.unmount();
    });

    it('set a string element', async () => {
        const newSettings = [...settings];
        newSettings[0] = {...newSettings[0]};
        newSettings[0].get = jest.fn(settings[0].get);
        newSettings[0].set = jest.fn(settings[0].set);

        const r = render(
            <NavigationContainer>
                <Settings settings={newSettings} />
            </NavigationContainer>
        );
        await waitFor(() => expect(r.getByText('Intelligence')));

        await act(async () => fireEvent.press(r.getByText('Name')));
        expect(r.UNSAFE_queryAllByType(TextInput)).toHaveLength(1);
        expect(r.toJSON()).toMatchSnapshot();

        await act(async () => fireEvent.changeText(r.UNSAFE_queryAllByType(TextInput)[0], 'Vogon'));
        await act(async () => fireEvent(r.UNSAFE_queryAllByType(TextInput)[0], 'submitEditing'));
        await act(async () => fireEvent(r.UNSAFE_queryAllByType(TextInput)[0], 'blur'));
        expect(r.UNSAFE_queryAllByType(TextInput)).toHaveLength(0);
        expect(r.toJSON()).toMatchSnapshot();

        expect(newSettings[0].get).toHaveBeenCalledTimes(1);
        expect(newSettings[0].set).toHaveBeenCalledTimes(1);
        expect(newSettings[0].set).toBeCalledWith('Vogon');
        r.unmount();
    });

    it('set an enum element', async () => {
        const newSettings = [...settings];
        newSettings[1] = {...newSettings[1]};
        newSettings[1].get = jest.fn(settings[1].get);
        newSettings[1].set = jest.fn(settings[1].set);

        const r = render(
            <NavigationContainer>
                <Settings settings={newSettings} />
            </NavigationContainer>
        );
        await waitFor(() => expect(r.getByText('Medium')));

        await act(async () => fireEvent.press(r.getByText('Medium')));
        expect(r.getByText('High'));
        expect(r.toJSON()).toMatchSnapshot();

        await act(async () => fireEvent.press(r.getByText('High')));
        expect(r.getByText('Intelligence'));
        expect(r.toJSON()).toMatchSnapshot();

        expect(newSettings[1].get).toHaveBeenCalledTimes(1);
        expect(newSettings[1].set).toHaveBeenCalledTimes(1);
        expect(newSettings[1].set).toBeCalledWith('H');
        r.unmount();
    });

    it('set a boolean element', async () => {
        const newSettings = [...settings];
        newSettings[2] = {...newSettings[2]};
        newSettings[2].get = jest.fn(settings[2].get);
        newSettings[2].set = jest.fn(settings[2].set);

        const r = render(
            <NavigationContainer>
                <Settings settings={newSettings} />
            </NavigationContainer>
        );
        await waitFor(() => expect(r.getByText('Wings')));
        expect(r.UNSAFE_queryAllByType(Switch)[0].props.value).toBe(false);

        await act(async () => fireEvent.press(r.getByText('Wings')));
        expect(r.UNSAFE_queryAllByType(Switch)[0].props.value).toBe(true);
        expect(r.toJSON()).toMatchSnapshot();

        expect(newSettings[2].get).toHaveBeenCalledTimes(1);
        expect(newSettings[2].set).toHaveBeenCalledTimes(1);
        expect(newSettings[2].set).toBeCalledWith(true);
        r.unmount();
    });
});
