import React from 'react';
import 'prism-themes/themes/prism-vsc-dark-plus.css';

// This is expensive to render
const CodeBlock = React.memo(function _CodeBlock(props: {title: string; code: Promise<string>}) {
    const [code, setCode] = React.useState('loading()');
    React.useEffect(() => {
        props.code.then((r) => setCode(r));
    }, [props.code]);
    return (
        <div className='codeblock'>
            <pre className='p-2' style={{backgroundColor: 'rgb(43, 43, 43)', fontSize: '16px'}}>
                <code className='language-tsx' dangerouslySetInnerHTML={{__html: code}} />
            </pre>
        </div>
    );
});

export default CodeBlock;
