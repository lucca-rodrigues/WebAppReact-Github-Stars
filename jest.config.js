module.exports = {
  clearMocks: true,
  coverageDirectory: '.coverage',
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/components$1',
    '^styles(.*)$': '<rootDir>/styles$1',
  },
  setupFilesAfterEnv: ['./src/setupTests.js'],
};
