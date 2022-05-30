(self.webpackChunk_mmomtchev_react_native_settings=self.webpackChunk_mmomtchev_react_native_settings||[]).push([[826],{8826:(e,t,a)=>{var i=a(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(7294)),r=i(a(2917)),s=n.default.memo((function(){return n.default.createElement("div",{dangerouslySetInnerHTML:{__html:r.default},__self:this,__source:{fileName:"/home/mmom/src/react-native-settings/examples/ReadmeBlock.tsx",lineNumber:8,columnNumber:12}})}));t.default=s},2917:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});const i='<h1 id="react-native-settings">react-native-settings</h1> <p><a href="https://github.com/mmomtchev/react-native-settings/blob/main/LICENSE"><img src="https://img.shields.io/github/license/mmomtchev/react-native-settings" alt="License: ISC"></a> <a href="https://www.npmjs.com/package/@mmomtchev/react-native-settings"><img src="https://img.shields.io/npm/v/@mmomtchev/react-native-settings" alt="npm version"></a> <a href="https://github.com/mmomtchev/react-native-settings/actions/workflows/test-dev.yml"><img src="https://github.com/mmomtchev/react-native-settings/actions/workflows/test-dev.yml/badge.svg" alt="test-dev"></a> <a href="https://codecov.io/gh/mmomtchev/react-native-settings"><img src="https://codecov.io/gh/mmomtchev/react-native-settings/branch/main/graph/badge.svg?token=EQ2TWCZAS4" alt="codecov"></a></p> <p><strong>React Native Universal Settings Screen With Async Support &amp; Spinner</strong></p> <p>To my greatest surprise, <code>react-native</code>, unlike the native frameworks of iOS and Android, does not offer a standard ready-to-use <code>Settings</code> screen template.</p> <p>This package fills this void providing the basic framework needed to implement a settings screen, bringing down its cost from 1 day to 15 minutes for a simple application.</p> <p>It works with any configuration getter or setter and it will automatically display a spinner if you use an asynchronous function.</p> <p>It can be freely styled to match the looks of the application.</p> <p>It has no runtime dependencies besides <code>@react-navigation</code>.</p> <h1 id="usage">Usage</h1> <pre><code class="language-shell">npm i --save @mmomtchev/react-native-settings\n</code></pre> <p><a href="https://mmomtchev.github.io/react-native-settings/">Check the examples</a></p> <h2 id="quick-start">Quick Start</h2> <p>A simple Settings screens is easy to make:</p> <pre><code class="language-tsx">import React from &#39;react&#39;;\nimport {StyleSheet, View} from &#39;react-native&#39;;\nimport {NavigationContainer} from &#39;@react-navigation/native&#39;;\n\nimport {default as ReactNativeSettings, SettingsElement} from &#39;@mmomtchev/react-native-settings&#39;;\n\n// We will store the config here\nconst configData: Record&lt;string, string&gt; = {};\n\nconst styles = StyleSheet.create({\n    container: {\n        flex: 1,\n        backgroundColor: &#39;#fff&#39;,\n        justifyContent: &#39;center&#39;,\n        padding: &#39;1.5%&#39;\n    }\n});\n\n// Retrieve a conf item or return the default\nconst confGet = (key: string, def: string): string =&gt; configData[key] || def;\n\n// Store a conf item\nconst confSet = (key: string, value: string): void =&gt; {\n    configData[key] = value;\n};\n\n// Choose from a list item\nconst intelligence: Record&lt;string, string&gt; = {L: &#39;Low&#39;, M: &#39;Medium&#39;, H: &#39;High&#39;};\n\n// This is the configuration schema\nconst settings: SettingsElement[] = [\n    {\n        label: &#39;Name&#39;,\n        type: &#39;string&#39;,\n        // You can override the way the value is displayed\n        display: (s) =&gt; (s &amp;&amp; s.length ? s : &#39;empty&#39;),\n        get: confGet.bind(null, &#39;@name&#39;, &#39;&#39;),\n        set: confSet.bind(null, &#39;@name&#39;)\n    },\n    // Choose from a list, uses the standard phone navigation screens\n    {\n        label: &#39;Intelligence&#39;,\n        title: &#39;Select Intelligence&#39;,\n        type: &#39;enum&#39;,\n        values: Object.keys(intelligence),\n        display: (v: string) =&gt; intelligence[v],\n        get: confGet.bind(null, &#39;@int&#39;, &#39;M&#39;),\n        set: confSet.bind(null, &#39;@int&#39;)\n    },\n    // Boolean switch group\n    {\n        label: &#39;Wings&#39;,\n        type: &#39;boolean&#39;,\n        get: async () =&gt; (await confGet(&#39;@wings&#39;, &#39;false&#39;)) === &#39;true&#39;,\n        set: (v) =&gt; confSet(&#39;@wings&#39;, v.toString())\n    }\n];\n\nexport default function Settings() {\n    // Simply pass the schema here\n    // It integrates in your existing `NavigationContainer` or `Screen`\n    return (\n        &lt;NavigationContainer&gt;\n            &lt;View style={styles.container}&gt;\n                &lt;ReactNativeSettings settings={settings} /&gt;\n            &lt;/View&gt;\n        &lt;/NavigationContainer&gt;\n    );\n}\n</code></pre> <p><img src="https://raw.githubusercontent.com/mmomtchev/react-native-settings/main/screenshot.png" alt="screenshot"></p> <h1 id="api">API</h1> <h3 id="table-of-contents">Table of Contents</h3> <ul> <li><a href="#reactnativesettingsgetter">ReactNativeSettingsGetter</a></li> <li><a href="#reactnativesettingssetter">ReactNativeSettingsSetter</a></li> <li><a href="#settingselementstring">SettingsElementString</a><ul> <li><a href="#label">label</a></li> <li><a href="#get">get</a></li> <li><a href="#set">set</a></li> <li><a href="#display">display</a></li> </ul> </li> <li><a href="#label-1">label</a></li> <li><a href="#get-1">get</a></li> <li><a href="#set-1">set</a></li> <li><a href="#display-1">display</a></li> <li><a href="#label-2">label</a></li> <li><a href="#get-2">get</a></li> <li><a href="#set-2">set</a></li> <li><a href="#display-2">display</a></li> <li><a href="#title">title</a></li> <li><a href="#label-3">label</a></li> <li><a href="#get-3">get</a></li> <li><a href="#set-3">set</a></li> <li><a href="#label-4">label</a></li> <li><a href="#elements">elements</a></li> <li><a href="#settingsstyle">SettingsStyle</a></li> <li><a href="#defaultstyles">defaultStyles</a></li> <li><a href="#reactnativesettings">ReactNativeSettings</a><ul> <li><a href="#parameters">Parameters</a></li> </ul> </li> <li><a href="#settings">settings</a></li> <li><a href="#styles">styles</a></li> <li><a href="#spinnergracetime">spinnerGraceTime</a></li> </ul> <h2 id="reactnativesettingsgetter">ReactNativeSettingsGetter</h2> <p>A configuration getter, may be synchronous or asynchronous.</p> <p>Asynchronous getters will trigger a spinning activity indicator.</p> <p>Type: function (): (T | <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a>&lt;T&gt;)</p> <h2 id="reactnativesettingssetter">ReactNativeSettingsSetter</h2> <p>A configuration setter, may be synchronous or asynchronous.</p> <p>May synchronously return false to deny the operation.</p> <p>Type: function (v: T): (<a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</a> | void | <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a>&lt;void&gt;)</p> <h2 id="settingselementstring">SettingsElementString</h2> <p>A string element.</p> <p><code>display</code> can be used to control the value shown - ie a password can be reduced to &#39;***&#39;.</p> <h3 id="label">label</h3> <p>Label, either a string or a JSX element</p> <p>Type: (<a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String">string</a> | JSX.Element)</p> <h3 id="get">get</h3> <p>Configuration getter, will be called to retrieve the current value.</p> <p>If it returns a Promise, a spinning activity indicator will be shown until the Promise resolve. Should not reject.</p> <p>Type: <a href="#reactnativesettingsgetter">ReactNativeSettingsGetter</a>&lt;<a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>&gt;</p> <h3 id="set">set</h3> <p>Configuration setter, will be called when the user sets a new value.</p> <p>If it returns a Promise, a spinning activity indicator will be shown until the Promise resolve. Should not reject.</p> <p>If it synchronously returns false, the operation will be considered rejected.</p> <p>Type: <a href="#reactnativesettingssetter">ReactNativeSettingsSetter</a>&lt;<a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>&gt;</p> <h3 id="display">display</h3> <p>Render function.</p> <p>Can be used for example to always show a password as &#39;***&#39; or to display a fixed value such as &#39;Not set&#39; for empty strings</p> <p>Type: function (v: <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>): <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String">string</a></p> <h2 id="label-1">label</h2> <p>Label, either a string or a JSX element</p> <p>Type: (<a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String">string</a> | JSX.Element)</p> <h2 id="get-1">get</h2> <p>Configuration getter, will be called to retrieve the current value.</p> <p>If it returns a Promise, a spinning activity indicator will be shown until the Promise resolve. Should not reject.</p> <p>Type: <a href="#reactnativesettingsgetter">ReactNativeSettingsGetter</a>&lt;<a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>&gt;</p> <h2 id="set-1">set</h2> <p>Configuration setter, will be called when the user sets a new value.</p> <p>If it returns a Promise, a spinning activity indicator will be shown until the Promise resolve. Should not reject.</p> <p>If it synchronously returns false, the operation will be considered rejected.</p> <p>Type: <a href="#reactnativesettingssetter">ReactNativeSettingsSetter</a>&lt;<a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>&gt;</p> <h2 id="display-1">display</h2> <p>Render function.</p> <p>Can be used for example to always show a password as &#39;***&#39; or to display a fixed value such as &#39;Not set&#39; for empty strings</p> <p>Type: function (v: <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>): <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String">string</a></p> <h2 id="label-2">label</h2> <p>Label, either a string or a JSX element</p> <p>Type: (<a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String">string</a> | JSX.Element)</p> <h2 id="get-2">get</h2> <p>Configuration getter, will be called to retrieve the current value.</p> <p>If it returns a Promise, a spinning activity indicator will be shown until the Promise resolve. Should not reject.</p> <p>Type: <a href="#reactnativesettingsgetter">ReactNativeSettingsGetter</a>&lt;<a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>&gt;</p> <h2 id="set-2">set</h2> <p>Configuration setter, will be called when the user sets a new value.</p> <p>If it returns a Promise, a spinning activity indicator will be shown until the Promise resolve. Should not reject.</p> <p>If it synchronously returns false, the operation will be considered rejected.</p> <p>Type: <a href="#reactnativesettingssetter">ReactNativeSettingsSetter</a>&lt;<a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>&gt;</p> <h2 id="display-2">display</h2> <p>Render function.</p> <p>Can be used for example to always show a password as &#39;***&#39; or to display a fixed value such as &#39;Not set&#39; for empty strings</p> <p>Type: function (v: <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String">string</a>): <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String">string</a></p> <h2 id="title">title</h2> <p>Optional title for the selection screen. If it is not provided the selection screen won&#39;t have a header.</p> <p>Type: <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String">string</a></p> <h2 id="label-3">label</h2> <p>Label, either a string or a JSX element</p> <p>Type: (<a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String">string</a> | JSX.Element)</p> <h2 id="get-3">get</h2> <p>Configuration getter, will be called to retrieve the current value.</p> <p>If it returns a Promise, a spinning activity indicator will be shown until the Promise resolve. Should not reject.</p> <p>Type: <a href="#reactnativesettingsgetter">ReactNativeSettingsGetter</a>&lt;<a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</a>&gt;</p> <h2 id="set-3">set</h2> <p>Configuration setter, will be called when the user sets a new value.</p> <p>If it returns a Promise, a spinning activity indicator will be shown until the Promise resolve. Should not reject.</p> <p>If it synchronously returns false, the operation will be considered rejected.</p> <p>Type: <a href="#reactnativesettingssetter">ReactNativeSettingsSetter</a>&lt;<a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean">boolean</a>&gt;</p> <h2 id="label-4">label</h2> <p>Label, either a string or a JSX element</p> <p>Type: (<a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String">string</a> | JSX.Element)</p> <h2 id="elements">elements</h2> <p>Subelements</p> <p>Type: <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</a>&lt;SettingsElement&gt;</p> <h2 id="settingsstyle">SettingsStyle</h2> <p>Allows optional overriding of the styles of the elements</p> <p>The default styles are in <code>defaultStyles</code></p> <h2 id="defaultstyles">defaultStyles</h2> <p>Default styles</p> <p>Type: <a href="#settingsstyle">SettingsStyle</a></p> <h2 id="reactnativesettings">ReactNativeSettings</h2> <p>Configurable Settings Screen for React Native.</p> <p>Must be included inside of a <NavigationContainer> or a &lt;*navigation*.Screen&gt; component.</NavigationContainer></p> <h3 id="parameters">Parameters</h3> <ul> <li><code>props</code> <strong>{settings: <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</a>&lt;SettingsElement&gt;, styles: <a href="#settingsstyle">SettingsStyle</a>?, spinnerGraceTime: <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a>?}</strong></li> </ul> <p>Returns <strong>JSX.Element</strong> </p> <h2 id="settings">settings</h2> <p>List of settings</p> <p>Type: <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array">Array</a>&lt;SettingsElement&gt;</p> <h2 id="styles">styles</h2> <p>Optional styles overriding the default styles</p> <p>Type: <a href="#settingsstyle">SettingsStyle</a></p> <h2 id="spinnergracetime">spinnerGraceTime</h2> <p>Optional delay in ms before showing the activity indicator. Prevents screen flickering when the updates are very fast.</p> <p>Type: <a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number">number</a></p> <h1 id="license">License</h1> <p>ISC License</p> <p>Copyright (c) 2022, Momtchil Momtchev <a href="mailto:&#109;&#x6f;&#x6d;&#116;&#99;&#x68;&#x69;&#x6c;&#64;&#x6d;&#x6f;&#109;&#116;&#99;&#x68;&#101;&#118;&#46;&#99;&#x6f;&#x6d;">&#109;&#x6f;&#x6d;&#116;&#99;&#x68;&#x69;&#x6c;&#64;&#x6d;&#x6f;&#109;&#116;&#99;&#x68;&#101;&#118;&#46;&#99;&#x6f;&#x6d;</a></p> <p>Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.</p> <p>THE SOFTWARE IS PROVIDED &quot;AS IS&quot; AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.</p> <p><strong>Includes Wings by Pedro Santos from NounProject.com</strong></p> '}}]);