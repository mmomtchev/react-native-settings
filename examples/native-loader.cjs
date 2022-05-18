module.exports = function native_loader(content, map, meta) {
    if (this.context.match(/examples\/items$/)) {
        const r = content.match(/export\s+default\s+function\s+(\w+)/);
        content += `
import ReactDOM from 'react-dom';
ReactDOM.render(<${r[1]} />, document.getElementById('root'));
`
    }
    this.callback(null, content, map, meta);
    return;
};
