/* eslint-disable @typescript-eslint/ban-ts-comment */
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {HashRouter as Router, Route, Link, Routes} from 'react-router-dom';

import './app.css';
import phoneScreen from './phonescreen.svg';
import pkgConfig from '../package.json';

const examples = {
    simple: {title: 'Simple', file: 'Simple'},
    advanced: {title: 'Async', file: 'withAsync'}
};

// The examples use a code-loading technique that I have described in
// https://mmomtchev.medium.com/making-examples-displaying-code-along-its-output-with-webpack-a28dcf5439c6

const ReadmeBlock = React.lazy(() => import(/* webpackPrefetch: true */ './ReadmeBlock'));
const CodeBlock = React.lazy(() => import(/* webpackPrefetch: true */ './CodeBlock'));

for (const ex of Object.keys(examples)) {
    examples[ex].code = import(
        /* webpackPrefetch: true */ `!!html-loader?{"minimize":false}!./jsx-loader.cjs!./items/${examples[ex].file}.tsx`
    ).then((code) => code.default);
}

const LeftMenuItem = (props): JSX.Element => (
    <Link to={props.id}>
        <button className='btn btn-light w-100'>{props.title}</button>
    </Link>
);

const App = (): JSX.Element => {
    return (
        <Router>
            <h1 className='m-2'>
                <strong>react-native-settings-screen {pkgConfig.version as string} Examples</strong>
            </h1>
            <div className='d-flex flex-row p-3'>
                <div className='d-flex flex-column left-menu me-2'>
                    <LeftMenuItem id={''} title={'Home'} />
                    {Object.keys(examples).map((e) => (
                        <LeftMenuItem key={e} id={e} title={examples[e].title} />
                    ))}
                </div>
                <div className='w-100'>
                    <Routes>
                        <Route
                            path='/'
                            element={
                                <div className='ml-2'>
                                    <React.Suspense fallback={<div>Loading...</div>}>
                                        <ReadmeBlock />
                                    </React.Suspense>
                                </div>
                            }
                        />
                        {Object.keys(examples).map((e) => (
                            <Route
                                key={e}
                                path={`/${e}`}
                                element={
                                    <div className='d-flex fex-row'>
                                        <div className=''>
                                            <React.Suspense fallback={<div>Parsing code...</div>}>
                                                <CodeBlock
                                                    title={examples[e].title}
                                                    code={examples[e].code}
                                                />
                                            </React.Suspense>
                                        </div>
                                        <div className='position-relative ms-4 mt-4'>
                                            <img
                                                className='position-absolute'
                                                style={{
                                                    left: -5,
                                                    top: -38,
                                                    width: 400,
                                                    height: 940,
                                                    pointerEvents: 'none'
                                                }}
                                                src={phoneScreen}
                                            />
                                            <iframe
                                                className='phone-screen'
                                                src={`${examples[e].file}.html`}
                                            />
                                        </div>
                                    </div>
                                }
                            />
                        ))}
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
