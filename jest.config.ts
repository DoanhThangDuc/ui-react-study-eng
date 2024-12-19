import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig: Config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Automatically executed before tests
  moduleNameMapper: {
    // Mock CSS and similar static files
    '^.+\\.(css|scss|sass)$': 'identity-obj-proxy',
    // Mock image imports
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.ts',
    // Handle module aliases (from tsconfig.json)
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/index.ts', // Exclude barrel files
  ],
  coverageDirectory: 'coverage',
};

export default createJestConfig(customJestConfig);
