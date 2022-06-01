const config = {
    preset: 'react-native',
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/test'],
    transform: {
        '^.+.[tj]sx?$': 'babel-jest'
    },
    transformIgnorePatterns: ['/node_modules/(?!(react-native|@react-native|@react-navigation))'],
    moduleNameMapper: {
        '^@mmomtchev/react-native-settings$': '<rootDir>/src',
        '^asap/+.*$': '<rootDir>/test/asap.js'
    },
    globals: {
        'ts-jest': {
            tsconfig: {
                outDir: './.ts-jest'
            }
        }
    },
    setupFiles: ['jest-canvas-mock'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', '<rootDir>/test/mock.ts'],
    testRegex: '/test/.*\\.test\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverage: true,
    collectCoverageFrom: ['./src/**'],
    coverageReporters: ['json', 'lcov', 'text', 'clover']
};

export default config;
