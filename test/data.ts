import {SettingsElement} from 'react-native-settings-screen';

const configData = {};

const confGet = (key: string, def: string): string => configData[key] || def;

const confSet = (key: string, value: string): void => {
    configData[key] = value;
};

const intelligence: Record<string, string> = {L: 'Low', M: 'Medium', H: 'High'};

export const settings: SettingsElement[] = [
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
        get: async () => (await confGet('@wings', 'false')) === 'true',
        set: (v) => confSet('@wings', v.toString())
    }
];
