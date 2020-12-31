module.exports = {
  displayName: 'backend-nest-space',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html','json'],
  coverageDirectory: '../../coverage/apps/backend-nest-space',
};
