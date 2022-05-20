import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Keyboard, Switch, TextInput} from 'react-native';
import {act, fireEvent, render} from '@testing-library/react-native';

import Settings from 'react-native-settings-screen';

import {settingsSync, reset, waitForSpinner} from './data';

const kbMock = jest.fn(Keyboard.addListener);
Keyboard.addListener = kbMock;

describe('sync', () => {
    beforeEach(reset);

    it('render', async () => {
        const r = render(
            <NavigationContainer>
                <Settings settings={settingsSync} />
            </NavigationContainer>
        );
        await waitForSpinner(r);
        expect(r.getByText('Intelligence')).toBeDefined();
        expect(r.toJSON()).toMatchSnapshot();

        const newSettings = [...settingsSync];
        newSettings[1] = {...newSettings[1]};
        newSettings[1].label = 'Dexterity';
        r.rerender(
            <NavigationContainer>
                <Settings settings={newSettings} />
            </NavigationContainer>
        );
        await waitForSpinner(r);
        expect(r.getByText('Dexterity'));
        expect(r.toJSON()).toMatchSnapshot();
        r.unmount();
    });

    it('set a string element', async () => {
        const newSettings = [...settingsSync];
        newSettings[0] = {...newSettings[0]};
        newSettings[0].get = jest.fn(settingsSync[0].get);
        newSettings[0].set = jest.fn(settingsSync[0].set);

        const r = render(
            <NavigationContainer>
                <Settings settings={newSettings} />
            </NavigationContainer>
        );
        await waitForSpinner(r);
        expect(r.getByText('Intelligence')).toBeDefined();

        fireEvent.press(r.getByText('Name'));
        expect(r.UNSAFE_queryAllByType(TextInput)).toHaveLength(1);
        expect(r.toJSON()).toMatchSnapshot();

        fireEvent.changeText(r.UNSAFE_queryAllByType(TextInput)[0], 'Vogon');
        fireEvent(r.UNSAFE_queryAllByType(TextInput)[0], 'submitEditing');
        fireEvent(r.UNSAFE_queryAllByType(TextInput)[0], 'blur');
        expect(r.UNSAFE_queryAllByType(TextInput)).toHaveLength(0);
        expect(r.getByText('Vogon')).toBeDefined();
        expect(r.toJSON()).toMatchSnapshot();

        expect(newSettings[0].get).toHaveBeenCalledTimes(1);
        expect(newSettings[0].set).toHaveBeenCalledTimes(1);
        expect(newSettings[0].set).toBeCalledWith('Vogon');
        r.unmount();
    });

    it('close the keyboard while setting a screen element', async () => {
        const newSettings = [...settingsSync];
        newSettings[0] = {...newSettings[0]};
        newSettings[0].get = jest.fn(settingsSync[0].get);
        newSettings[0].set = jest.fn(settingsSync[0].set);

        const r = render(
            <NavigationContainer>
                <Settings settings={newSettings} />
            </NavigationContainer>
        );
        await waitForSpinner(r);
        expect(r.getByText('Intelligence')).toBeDefined();

        fireEvent.press(r.getByText('Name'));
        expect(r.UNSAFE_queryAllByType(TextInput)).toHaveLength(1);
        expect(r.toJSON()).toMatchSnapshot();

        fireEvent(r.UNSAFE_queryAllByType(TextInput)[0], 'focus');
        fireEvent.changeText(r.UNSAFE_queryAllByType(TextInput)[0], 'Vogon');
        expect(Keyboard.addListener).toHaveBeenCalled();

        const handler = kbMock.mock.lastCall[1] as unknown as () => void;
        act(() => {
            handler();
            fireEvent(r.UNSAFE_queryAllByType(TextInput)[0], 'blur');
        });

        expect(r.UNSAFE_queryAllByType(TextInput)).toHaveLength(0);
        expect(r.toJSON()).toMatchSnapshot();

        expect(newSettings[0].get).toHaveBeenCalledTimes(1);
        expect(newSettings[0].set).toHaveBeenCalledTimes(0);
        r.unmount();
    });

    it('deny setting a string element', async () => {
        const newSettings = [...settingsSync];
        newSettings[0] = {...newSettings[0]};
        newSettings[0].get = jest.fn(settingsSync[0].get);
        newSettings[0].set = jest.fn(() => false);

        const r = render(
            <NavigationContainer>
                <Settings settings={newSettings} />
            </NavigationContainer>
        );
        await waitForSpinner(r);
        expect(r.getByText('Intelligence')).toBeDefined();

        fireEvent.press(r.getByText('Name'));
        expect(r.UNSAFE_queryAllByType(TextInput)).toHaveLength(1);
        expect(r.toJSON()).toMatchSnapshot();

        fireEvent.changeText(r.UNSAFE_queryAllByType(TextInput)[0], 'Vogon');
        fireEvent(r.UNSAFE_queryAllByType(TextInput)[0], 'submitEditing');
        fireEvent(r.UNSAFE_queryAllByType(TextInput)[0], 'blur');
        expect(r.UNSAFE_queryAllByType(TextInput)).toHaveLength(0);
        expect(r.getByText('empty')).toBeDefined();
        expect(r.toJSON()).toMatchSnapshot();

        expect(newSettings[0].get).toHaveBeenCalledTimes(1);
        expect(newSettings[0].set).toHaveBeenCalledTimes(1);
        expect(newSettings[0].set).toBeCalledWith('Vogon');
        r.unmount();
    });

    it('set an enum element', async () => {
        const newSettings = [...settingsSync];
        newSettings[1] = {...newSettings[1]};
        newSettings[1].get = jest.fn(settingsSync[1].get);
        newSettings[1].set = jest.fn(settingsSync[1].set);

        const r = render(
            <NavigationContainer>
                <Settings settings={newSettings} />
            </NavigationContainer>
        );
        await waitForSpinner(r);
        expect(r.getByText('Medium')).toBeDefined();

        fireEvent.press(r.getByText('Medium'));
        expect(r.getByText('High'));
        expect(r.toJSON()).toMatchSnapshot();

        fireEvent.press(r.getByText('High'));
        expect(r.getByText('Intelligence'));
        expect(r.getByText('High')).toBeDefined();
        expect(r.toJSON()).toMatchSnapshot();

        expect(newSettings[1].get).toHaveBeenCalledTimes(1);
        expect(newSettings[1].set).toHaveBeenCalledTimes(1);
        expect(newSettings[1].set).toBeCalledWith('H');
        r.unmount();
    });

    it('set a boolean element', async () => {
        const newSettings = [...settingsSync];
        newSettings[2] = {...newSettings[2]};
        newSettings[2].get = jest.fn(settingsSync[2].get);
        newSettings[2].set = jest.fn(settingsSync[2].set);

        const r = render(
            <NavigationContainer>
                <Settings settings={newSettings} />
            </NavigationContainer>
        );
        await waitForSpinner(r);
        expect(r.getByText('Wings')).toBeDefined();
        expect(r.UNSAFE_queryAllByType(Switch)[0].props.value).toBe(false);

        fireEvent.press(r.getByText('Wings'));
        expect(r.UNSAFE_queryAllByType(Switch)[0].props.value).toBe(true);
        expect(r.toJSON()).toMatchSnapshot();

        expect(newSettings[2].get).toHaveBeenCalledTimes(1);
        expect(newSettings[2].set).toHaveBeenCalledTimes(1);
        expect(newSettings[2].set).toBeCalledWith(true);
        r.unmount();
    });
});
