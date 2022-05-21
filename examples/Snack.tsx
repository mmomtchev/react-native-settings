import React from 'react';

import snackLogo from './snack.svg';

const Snack = React.memo(function _Snack(props: {title: string; text: Promise<string>}) {
    const [code, setCode] = React.useState('loading()');
    React.useEffect(() => {
        props.text.then((r) => setCode(r));
    }, [props.text]);

    const name = '@mmomtchev/react-native-settings';
    const dependencies =
        'react-dom,@react-navigation/native@6.0,@react-native-async-storage/async-storage,' +
        '@types/react,@react-navigation/native-stack,react-native-safe-area-context,react-native-screens,' +
        '@ababel/runtime,' +
        `@mmomtchev/react-native-settings@${VERSION}`;
    const description = `@mmomtchev/react-native-settings ${props.title} Example`;

    const files = {
        'App.tsx': {
            type: 'CODE',
            contents: code
        }
    } as Record<string, Record<string, string>>;

    return (
        <a
            className='m-1 btn btn-light'
            target='_blank'
            rel='noopener noreferrer'
            href={
                `https://snack.expo.dev/?name=${name}&description=${description}` +
                `&platform=web&preview=true&dependencies=${dependencies}` +
                `&files=${encodeURIComponent(JSON.stringify(files))}&verbose`
            }
        >
            Open in <img src={snackLogo} />
        </a>
    );
});

export default Snack;
