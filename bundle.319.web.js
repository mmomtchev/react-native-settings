(self.webpackChunk_mmomtchev_react_native_settings=self.webpackChunk_mmomtchev_react_native_settings||[]).push([[319],{7228:n=>{n.exports=function(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=n[t];return o},n.exports.__esModule=!0,n.exports.default=n.exports},2858:n=>{n.exports=function(n){if(Array.isArray(n))return n},n.exports.__esModule=!0,n.exports.default=n.exports},3884:n=>{n.exports=function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var o,a,l=[],c=!0,r=!1;try{for(t=t.call(n);!(c=(o=t.next()).done)&&(l.push(o.value),!e||l.length!==e);c=!0);}catch(n){r=!0,a=n}finally{try{c||null==t.return||t.return()}finally{if(r)throw a}}return l}},n.exports.__esModule=!0,n.exports.default=n.exports},521:n=>{n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.__esModule=!0,n.exports.default=n.exports},3038:(n,e,t)=>{var o=t(2858),a=t(3884),l=t(379),c=t(521);n.exports=function(n,e){return o(n)||a(n,e)||l(n,e)||c()},n.exports.__esModule=!0,n.exports.default=n.exports},379:(n,e,t)=>{var o=t(7228);n.exports=function(n,e){if(n){if("string"==typeof n)return o(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(n,e):void 0}},n.exports.__esModule=!0,n.exports.default=n.exports},2319:(n,e,t)=>{var o=t(5318);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(t(3038)),l=o(t(7294)),c=o(t(3104));t(2129);var r="/home/mmom/src/react-native-settings/examples/CodeBlock.tsx",u=l.default.memo((function(n){var e=l.default.useState("loading()"),t=(0,a.default)(e,2),o=t[0],u=t[1];return l.default.useEffect((function(){n.code.then((function(n){return u(n)}))}),[n.code]),l.default.createElement("div",{className:"position-relative",__self:this,__source:{fileName:r,lineNumber:16,columnNumber:9}},l.default.createElement("div",{className:"position-absolute",style:{right:"1rem"},__self:this,__source:{fileName:r,lineNumber:17,columnNumber:13}},l.default.createElement(c.default,{title:n.title,text:n.text,__self:this,__source:{fileName:r,lineNumber:18,columnNumber:17}})),l.default.createElement("div",{className:"codeblock",__self:this,__source:{fileName:r,lineNumber:20,columnNumber:13}},l.default.createElement("pre",{className:"p-2",style:{backgroundColor:"rgb(43, 43, 43)",fontSize:"16px"},__self:this,__source:{fileName:r,lineNumber:21,columnNumber:17}},l.default.createElement("code",{className:"language-tsx",dangerouslySetInnerHTML:{__html:o},__self:this,__source:{fileName:r,lineNumber:22,columnNumber:21}}))))}));e.default=u},3104:(n,e,t)=>{var o=t(5318);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(t(3038)),l=o(t(7294)),c=o(t(4846)),r="/home/mmom/src/react-native-settings/examples/Snack.tsx",u=l.default.memo((function(n){var e=l.default.useState("loading()"),t=(0,a.default)(e,2),o=t[0],u=t[1];l.default.useEffect((function(){n.text.then((function(n){return u(n)}))}),[n.text]);var s="@mmomtchev/react-native-settings "+n.title+" Example",i={"App.tsx":{type:"CODE",contents:o}};return l.default.createElement("a",{className:"m-1 btn btn-light",target:"_blank",rel:"noopener noreferrer",href:"https://snack.expo.dev/?name=@mmomtchev/react-native-settings&description="+s+"&platform=web&preview=true&dependencies=react-dom,@react-navigation/native@6.0,@react-native-async-storage/async-storage,@types/react,@react-navigation/native-stack,react-native-safe-area-context,react-native-screens,@ababel/runtime,@mmomtchev/react-native-settings@1.0.5&files="+encodeURIComponent(JSON.stringify(i))+"&verbose",__self:this,__source:{fileName:r,lineNumber:27,columnNumber:9}},"Open in ",l.default.createElement("img",{src:c.default,__self:this,__source:{fileName:r,lineNumber:37,columnNumber:21}}))}));e.default=u},956:(n,e,t)=>{"use strict";t.d(e,{Z:()=>r});var o=t(8081),a=t.n(o),l=t(3645),c=t.n(l)()(a());c.push([n.id,'pre[class*="language-"],\ncode[class*="language-"] {\n\tcolor: #d4d4d4;\n\tfont-size: 13px;\n\ttext-shadow: none;\n\tfont-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace;\n\tdirection: ltr;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tline-height: 1.5;\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\t-webkit-hyphens: none;\n\t-moz-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n}\n\npre[class*="language-"]::selection,\ncode[class*="language-"]::selection,\npre[class*="language-"] *::selection,\ncode[class*="language-"] *::selection {\n\ttext-shadow: none;\n\tbackground: #264F78;\n}\n\n@media print {\n\tpre[class*="language-"],\n\tcode[class*="language-"] {\n\t\ttext-shadow: none;\n\t}\n}\n\npre[class*="language-"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n\tbackground: #1e1e1e;\n}\n\n:not(pre) > code[class*="language-"] {\n\tpadding: .1em .3em;\n\tborder-radius: .3em;\n\tcolor: #db4c69;\n\tbackground: #1e1e1e;\n}\n/*********************************************************\n* Tokens\n*/\n.namespace {\n\topacity: .7;\n}\n\n.token.doctype .token.doctype-tag {\n\tcolor: #569CD6;\n}\n\n.token.doctype .token.name {\n\tcolor: #9cdcfe;\n}\n\n.token.comment,\n.token.prolog {\n\tcolor: #6a9955;\n}\n\n.token.punctuation,\n.language-html .language-css .token.punctuation,\n.language-html .language-javascript .token.punctuation {\n\tcolor: #d4d4d4;\n}\n\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.inserted,\n.token.unit {\n\tcolor: #b5cea8;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.deleted {\n\tcolor: #ce9178;\n}\n\n.language-css .token.string.url {\n\ttext-decoration: underline;\n}\n\n.token.operator,\n.token.entity {\n\tcolor: #d4d4d4;\n}\n\n.token.operator.arrow {\n\tcolor: #569CD6;\n}\n\n.token.atrule {\n\tcolor: #ce9178;\n}\n\n.token.atrule .token.rule {\n\tcolor: #c586c0;\n}\n\n.token.atrule .token.url {\n\tcolor: #9cdcfe;\n}\n\n.token.atrule .token.url .token.function {\n\tcolor: #dcdcaa;\n}\n\n.token.atrule .token.url .token.punctuation {\n\tcolor: #d4d4d4;\n}\n\n.token.keyword {\n\tcolor: #569CD6;\n}\n\n.token.keyword.module,\n.token.keyword.control-flow {\n\tcolor: #c586c0;\n}\n\n.token.function,\n.token.function .token.maybe-class-name {\n\tcolor: #dcdcaa;\n}\n\n.token.regex {\n\tcolor: #d16969;\n}\n\n.token.important {\n\tcolor: #569cd6;\n}\n\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.constant {\n\tcolor: #9cdcfe;\n}\n\n.token.class-name,\n.token.maybe-class-name {\n\tcolor: #4ec9b0;\n}\n\n.token.console {\n\tcolor: #9cdcfe;\n}\n\n.token.parameter {\n\tcolor: #9cdcfe;\n}\n\n.token.interpolation {\n\tcolor: #9cdcfe;\n}\n\n.token.punctuation.interpolation-punctuation {\n\tcolor: #569cd6;\n}\n\n.token.boolean {\n\tcolor: #569cd6;\n}\n\n.token.property,\n.token.variable,\n.token.imports .token.maybe-class-name,\n.token.exports .token.maybe-class-name {\n\tcolor: #9cdcfe;\n}\n\n.token.selector {\n\tcolor: #d7ba7d;\n}\n\n.token.escape {\n\tcolor: #d7ba7d;\n}\n\n.token.tag {\n\tcolor: #569cd6;\n}\n\n.token.tag .token.punctuation {\n\tcolor: #808080;\n}\n\n.token.cdata {\n\tcolor: #808080;\n}\n\n.token.attr-name {\n\tcolor: #9cdcfe;\n}\n\n.token.attr-value,\n.token.attr-value .token.punctuation {\n\tcolor: #ce9178;\n}\n\n.token.attr-value .token.punctuation.attr-equals {\n\tcolor: #d4d4d4;\n}\n\n.token.entity {\n\tcolor: #569cd6;\n}\n\n.token.namespace {\n\tcolor: #4ec9b0;\n}\n/*********************************************************\n* Language Specific\n*/\n\npre[class*="language-javascript"],\ncode[class*="language-javascript"],\npre[class*="language-jsx"],\ncode[class*="language-jsx"],\npre[class*="language-typescript"],\ncode[class*="language-typescript"],\npre[class*="language-tsx"],\ncode[class*="language-tsx"] {\n\tcolor: #9cdcfe;\n}\n\npre[class*="language-css"],\ncode[class*="language-css"] {\n\tcolor: #ce9178;\n}\n\npre[class*="language-html"],\ncode[class*="language-html"] {\n\tcolor: #d4d4d4;\n}\n\n.language-regex .token.anchor {\n\tcolor: #dcdcaa;\n}\n\n.language-html .token.punctuation {\n\tcolor: #808080;\n}\n/*********************************************************\n* Line highlighting\n*/\npre[class*="language-"] > code[class*="language-"] {\n\tposition: relative;\n\tz-index: 1;\n}\n\n.line-highlight.line-highlight {\n\tbackground: #f7ebc6;\n\tbox-shadow: inset 5px 0 0 #f7d87c;\n\tz-index: 0;\n}\n',""]);const r=c},2129:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>I});var o=t(3379),a=t.n(o),l=t(7795),c=t.n(l),r=t(569),u=t.n(r),s=t(3565),i=t.n(s),M=t(9216),g=t.n(M),j=t(4589),N=t.n(j),d=t(956),m={};m.styleTagTransform=N(),m.setAttributes=i(),m.insert=u().bind(null,"head"),m.domAPI=c(),m.insertStyleElement=g(),a()(d.Z,m);const I=d.Z&&d.Z.locals?d.Z.locals:void 0},4846:n=>{n.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjcuNDY4IDEwLjM5MWE0LjE0NCA0LjE0NCAwIDEwMC04LjI4OSA0LjE0NCA0LjE0NCAwIDAwMCA4LjI5eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjcuNDY4IDIuMzZhMy44ODYgMy44ODYgMCAxMDAgNy43NzMgMy44ODYgMy44ODYgMCAwMDAtNy43NzJ6bS00LjQwMiAzLjg4N2E0LjQwMyA0LjQwMyAwIDExOC44MDUgMCA0LjQwMyA0LjQwMyAwIDAxLTguODA1IDB6IiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTMxLjAzNCA0LjEzMmE2LjA4OCA2LjA4OCAwIDAxLTYuMDAyIDUuMDc1Yy0uMTY0IDAtLjMyNCAwLS40ODQtLjAyMWE0LjE0NCA0LjE0NCAwIDAwNi40ODYtNS4wNTR6IiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTS4yNTggMjMuODcxTC4zIDguMTNsMTMuNTUgNy44N3YxNS43NDNMLjI1OCAyMy44NzJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0uMTcxIDcuOTA1YS4yNTguMjU4IDAgMDEuMjU4IDBsMTMuNTUxIDcuODdjLjA4LjA0Ny4xMjkuMTMyLjEyOS4yMjR2MTUuNzQzYS4yNTguMjU4IDAgMDEtLjM4OC4yMjNMLjEyOSAyNC4wOTVBLjI1OC4yNTggMCAwMTAgMjMuODdMLjA0MSA4LjEyOGMwLS4wOTIuMDUtLjE3Ny4xMy0uMjIzem0uMzg2LjY3MmwtLjA0IDE1LjE0NiAxMy4wNzUgNy41N1YxNi4xNDlMLjU1NyA4LjU3N3oiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNLjMgOC4xMjlMMTMuODcuMjU5bDYuNzc0IDMuOTM1TDEzLjg1IDguMTNsNi43OTUgMy45MzYtNi43OTUgMy45MzRMLjMgOC4xM3oiIGZpbGw9IiNmZmYiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjc0Mi4wMzVhLjI1OC4yNTggMCAwMS4yNTkgMGw2Ljc3MyAzLjkzNmEuMjU4LjI1OCAwIDAxMCAuNDQ3bC02LjQwOCAzLjcxIDYuNDA4IDMuNzEzYS4yNTguMjU4IDAgMDEwIC40NDdsLTYuNzk0IDMuOTM1YS4yNTguMjU4IDAgMDEtLjI2IDBMLjE3IDguMzUxYS4yNTguMjU4IDAgMDEwLS40NDdMMTMuNzQyLjAzNXpNLjgxMyA4LjEyOUwxMy44NTEgMTUuN2w2LjI3OC0zLjYzNi02LjQwOC0zLjcxM2EuMjU4LjI1OCAwIDAxMC0uNDQ3bDYuNDA5LTMuNzExTDEzLjg3LjU1Ny44MTUgOC4xMjl6IiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTIwLjY0NSAxMi4wNjV2Ny44N0wyNy40NCAxNmwuMDQxIDcuODcyLTEzLjYzMiA3Ljg3VjE2bDYuNzk1LTMuOTM0eiIgZmlsbD0iIzAwMCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAuNzc0IDExLjg0MWMuMDguMDQ2LjEyOS4xMzIuMTI5LjIyNHY3LjQyMmw2LjQwOC0zLjcxMWEuMjU4LjI1OCAwIDAxLjM4OC4yMjJsLjA0MSA3Ljg3MmEuMjU4LjI1OCAwIDAxLS4xMjkuMjI1bC0xMy42MzIgNy44N2EuMjU4LjI1OCAwIDAxLS4zODctLjIyM1YxNS45OTljMC0uMDkyLjA1LS4xNzcuMTI5LS4yMjNsNi43OTQtMy45MzVhLjI1OC4yNTggMCAwMS4yNTkgMHptLTYuNjY1IDQuMzA3djE1LjE0NmwxMy4xMTQtNy41NzEtLjAzOC03LjI3Ny02LjQxIDMuNzEzYS4yNTguMjU4IDAgMDEtLjM4OS0uMjI0di03LjQyMmwtNi4yNzcgMy42MzV6IiBmaWxsPSIjMDAwIi8+PHBhdGggZD0iTTIwLjY0NSA0LjE5NHY3Ljg3TDEzLjg1IDguMTNsNi43OTUtMy45MzV6IiBmaWxsPSIjMDAwIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMC43NzQgMy45N2MuMDguMDQ3LjEyOS4xMzIuMTI5LjIyNHY3Ljg3YS4yNTguMjU4IDAgMDEtLjM4OC4yMjRsLTYuNzk0LTMuOTM2YS4yNTguMjU4IDAgMDEwLS40NDdsNi43OTQtMy45MzRhLjI1OC4yNTggMCAwMS4yNTkgMHpNMTQuMzY2IDguMTNsNi4wMiAzLjQ4OFY0LjY0MmwtNi4wMiAzLjQ4N3oiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMjAuNjQ1IDEyLjA2NWw2Ljc5NiAzLjkzNC02Ljc5NiAzLjkzNnYtNy44N3oiIGZpbGw9IiNmZmYiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIwLjUxNiAxMS44NDFhLjI1OC4yNTggMCAwMS4yNTggMGw2Ljc5NiAzLjkzNWEuMjU4LjI1OCAwIDAxMCAuNDQ3bC02Ljc5NiAzLjkzNmEuMjU4LjI1OCAwIDAxLS4zODgtLjIyNHYtNy44N2MwLS4wOTIuMDUtLjE3OC4xMy0uMjI0em0uMzg3LjY3MnY2Ljk3NEwyNi45MjUgMTZsLTYuMDIyLTMuNDg2ek0uMDM1IDE2LjA5YS4yNTguMjU4IDAgMDEuMzUzLS4wOTRsMTMuNTkgNy44N2EuMjU4LjI1OCAwIDAxLS4yNTkuNDQ4TC4xMyAxNi40NDRhLjI1OC4yNTggMCAwMS0uMDk0LS4zNTR6IiBmaWxsPSIjMDAwIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMC44NTggNC4wNjVhLjI1OC4yNTggMCAwMS0uMDk0LjM1M0w3LjMyMyAxMi4yMTR2MTUuNmEuMjU4LjI1OCAwIDAxLS41MTcgMHYtMTUuNzVjMC0uMDkxLjA1LS4xNzYuMTMtLjIyM2wxMy41NjktNy44N2EuMjU4LjI1OCAwIDAxLjM1My4wOTR6IiBmaWxsPSIjMDAwIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02Ljg0NSA0LjA3NGEuMjU4LjI1OCAwIDAxLjM1My0uMDk1bDEzLjU3NiA3Ljg2MmEuMjU4LjI1OCAwIDExLS4yNTkuNDQ3TDYuOTQgNC40MjZhLjI1OC4yNTggMCAwMS0uMDk0LS4zNTJ6IiBmaWxsPSIjMDAwIi8+PC9zdmc+"}}]);