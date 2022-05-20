import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Switch, TextInput} from 'react-native';
import {act, fireEvent, render, waitFor} from '@testing-library/react-native';

import Settings from 'react-native-settings-screen';

import {settingsAsync, reset, waitForSpinner} from './data';

describe('async', () => {
    beforeEach(reset);

    it('render', async () => {
        const r = render(
            <NavigationContainer>
                <Settings settings={settingsAsync} />
            </NavigationContainer>
        );
        await waitFor(async () => expect(r.getByText('Medium')).toBeDefined());

        expect(r.getByText('Intelligence')).toBeDefined();
        expect(r.toJSON()).toMatchSnapshot();
        r.unmount();
    });

    it('set a string element', async () => {
        const newSettings = [...settingsAsync];
        newSettings[0] = {...newSettings[0]};
        newSettings[0].get = jest.fn(settingsAsync[0].get);
        newSettings[0].set = jest.fn(settingsAsync[0].set);

        const r = render(
            <NavigationContainer>
                <Settings settings={newSettings} />
            </NavigationContainer>
        );
        await waitForSpinner(r);

        await act(async () => fireEvent.press(r.getByText('Name')));
        expect(r.UNSAFE_queryAllByType(TextInput)).toHaveLength(1);
        expect(r.toJSON()).toMatchSnapshot();

        await act(async () => fireEvent.changeText(r.UNSAFE_queryAllByType(TextInput)[0], 'Vogon'));
        await act(async () => fireEvent(r.UNSAFE_queryAllByType(TextInput)[0], 'submitEditing'));
        await act(async () => fireEvent(r.UNSAFE_queryAllByType(TextInput)[0], 'blur'));
        await waitForSpinner(r);

        expect(r.getByText('Vogon')).toBeDefined();
        expect(r.UNSAFE_queryAllByType(TextInput)).toHaveLength(0);
        expect(r.toJSON()).toMatchSnapshot();

        expect(newSettings[0].get).toHaveBeenCalledTimes(1);
        expect(newSettings[0].set).toHaveBeenCalledTimes(1);
        expect(newSettings[0].set).toBeCalledWith('Vogon');
        r.unmount();
    });

    it('set an enum element', async () => {
        const newSettings = [...settingsAsync];
        newSettings[1] = {...newSettings[1]};
        newSettings[1].get = jest.fn(settingsAsync[1].get);
        newSettings[1].set = jest.fn(settingsAsync[1].set);

        const r = render(
            <NavigationContainer>
                <Settings settings={newSettings} />
            </NavigationContainer>
        );
        await waitForSpinner(r);

        await act(async () => fireEvent.press(r.getByText('Medium')));
        await waitFor(() => expect(r.getByText('High')));
        expect(r.toJSON()).toMatchSnapshot();

        await act(async () => fireEvent.press(r.getByText('High')));
        await waitForSpinner(r);

        expect(r.getByText('High')).toBeDefined();
        expect(r.toJSON()).toMatchSnapshot();

        expect(newSettings[1].get).toHaveBeenCalledTimes(1);
        expect(newSettings[1].set).toHaveBeenCalledTimes(1);
        expect(newSettings[1].set).toBeCalledWith('H');
        r.unmount();
    });

    it('set a boolean element', async () => {
        const newSettings = [...settingsAsync];
        newSettings[2] = {...newSettings[2]};
        newSettings[2].get = jest.fn(settingsAsync[2].get);
        newSettings[2].set = jest.fn(settingsAsync[2].set);

        const r = render(
            <NavigationContainer>
                <Settings settings={newSettings} />
            </NavigationContainer>
        );
        await waitForSpinner(r);

        expect(r.UNSAFE_queryAllByType(Switch)[0].props.value).toBe(false);

        await act(async () => fireEvent.press(r.getByText('Wings')));
        await waitForSpinner(r);

        expect(r.UNSAFE_queryAllByType(Switch)[0].props.value).toBe(true);
        expect(r.toJSON()).toMatchSnapshot();

        expect(newSettings[2].get).toHaveBeenCalledTimes(1);
        expect(newSettings[2].set).toHaveBeenCalledTimes(1);
        expect(newSettings[2].set).toBeCalledWith(true);
        r.unmount();
    });
});
