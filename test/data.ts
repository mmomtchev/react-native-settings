import {View} from 'react-native';
import {RenderAPI, waitFor} from '@testing-library/react-native';

import {
    SettingsElementBoolean,
    SettingsElementEnum,
    SettingsElementString
} from 'react-native-settings-screen';

let configData = {};

const confGet = (key: string, def: string): string => configData[key] || def;

const confSet = (key: string, value: string): void => {
    configData[key] = value;
};

const intelligence: Record<string, string> = {L: 'Low', M: 'Medium', H: 'High'};

export const settingsSync: [SettingsElementString, SettingsElementEnum, SettingsElementBoolean] = [
    {
        label: 'Name',
        type: 'string',
        display: (s) => (s && s.length ? s : 'empty'),
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
        get: () => confGet('@wings', 'false') === 'true',
        set: (v) => confSet('@wings', v.toString())
    }
];

function wait(ms?: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms || 25));
}

export const settingsAsync: [SettingsElementString, SettingsElementEnum, SettingsElementBoolean] = [
    {
        label: 'Name',
        type: 'string',
        display: (s) => (s && s.length ? s : 'empty'),
        get: () => wait().then(() => confGet('@name', '')),
        set: (v) => wait().then(() => confSet('@name', v))
    },
    {
        label: 'Intelligence',
        type: 'enum',
        values: Object.keys(intelligence),
        display: (v: string) => intelligence[v],
        get: () => wait().then(() => confGet('@int', 'M')),
        set: (v) => wait().then(() => confSet('@int', v))
    },
    {
        label: 'Wings',
        type: 'boolean',
        get: () =>
            wait()
                .then(() => confGet('@wings', 'false'))
                .then((r) => r === 'true'),
        set: (v) => wait().then(() => confSet('@wings', v.toString()))
    }
];

export function reset() {
    configData = {};
}

export function waitForSpinner(r: RenderAPI): Promise<void> {
    return waitFor(async () => {
        await expect(r.UNSAFE_queryAllByType(View)[1].props.pointerEvents).toBe('auto');
        await expect(r.UNSAFE_queryAllByType(View)[1].props.style.opacity).toBe(1);
    }).then(() => undefined);
}
