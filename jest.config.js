module.exports = {
  roots: ['<rootDir>'], // root folder
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'babel-jest',
  },
  moduleDirectories: ['node_modules', '<rootDir>/src/'],
  // TODO: Setup mappers based on react-scripts

  // moduleNameMapper: {
  //   'modules/*': ["'<rootDir>/src/modules/*"],
  //   'components/*': ["'<rootDir>/src/components/*"],
  //   'types/*': ["'<rootDir>/src/types/*"],
  //   'utils/*': ["'<rootDir>/src/utils/*"],
  //   'hooks/*': ["'<rootDir>/src/hooks/*"],
  //   'services/*': ["'<rootDir>/src/services/*"],
  // },
  verbose: true,
};
