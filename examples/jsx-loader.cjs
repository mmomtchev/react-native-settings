const prettier = require('prettier/standalone');
const parserTypescript = require('prettier/parser-typescript');
const Prism = require('prismjs');

const loadLanguages = require('prismjs/components/');
loadLanguages(['tsx', 'jsx', 'typescript']);

module.exports = function tsx_loader(content, map, meta) {
    const formatted = prettier.format(content, {
        parser: 'typescript',
        plugins: [parserTypescript]
    });
    const html = Prism.highlight(formatted, Prism.languages.tsx, 'tsx');
    this.callback(null, html, map, meta);
    return;
}
