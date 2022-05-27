// These come from webpack

declare module '*.svg' {
    const content: string;
    export default content;
}

declare module '*.json' {
    const content: Record<string, unknown>;
    export default content;
}

declare const VERSION: string;
declare const __BUILD_GITHASH__: string;
declare const __BUILD_DATE__: string;
