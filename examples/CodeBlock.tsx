import React from 'react';
import Snack from './Snack';
import 'prism-themes/themes/prism-vsc-dark-plus.css';

// This is expensive to render
const CodeBlock = React.memo(function _CodeBlock(props: {
    title: string;
    code: Promise<string>;
    file: string;
}) {
    const [code, setCode] = React.useState('loading()');
    React.useEffect(() => {
        props.code.then((r) => setCode(r));
    }, [props.code]);
    return (
        <div className='position-relative'>
            <div className='position-absolute' style={{right: '1rem'}}>
                <Snack title={props.title} file={props.file} />
            </div>
            <div className='codeblock'>
                <pre className='p-2' style={{backgroundColor: 'rgb(43, 43, 43)', fontSize: '16px'}}>
                    <code className='language-tsx' dangerouslySetInnerHTML={{__html: code}} />
                </pre>
            </div>
        </div>
    );
});

export default CodeBlock;
