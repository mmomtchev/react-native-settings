import React from 'react';

import snackLogo from './snack.svg';

const Snack = React.memo(function _Snack(props: {title: string; file: string}) {
    const name = '@mmomtchev/react-native-settings';
    const dependencies =
        'react-dom,@react-navigation/native@6.0,@react-native-async-storage/async-storage,' +
        '@types/react,@react-navigation/native-stack,react-native-safe-area-context,react-native-screens,' +
        `@mmomtchev/react-native-settings@${VERSION}`;
    const description = `@mmomtchev/react-native-settings ${props.title} Example`;

    return (
        <a
            className='m-1 btn btn-light'
            target='_blank'
            rel='noopener noreferrer'
            href={
                `https://snack.expo.dev/?name=${name}&description=${description}` +
                `&platform=web&preview=true&dependencies=${dependencies}` +
                `&sourceUrl=${encodeURIComponent(
                    `https://unpkg.com/@mmomtchev/react-native-settings@${VERSION}/examples/items/${props.file}.tsx`
                )}&verbose`
            }
        >
            Open in <img src={snackLogo} />
        </a>
    );
});

export default Snack;
