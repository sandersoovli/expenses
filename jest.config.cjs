module.exports = {
  testEnvironment: 'jsdom',
  // ... other settings
  moduleNameMapper: {
    '\\.(svg|css)$': '<rootDir>/fileMock.js',
  },
};