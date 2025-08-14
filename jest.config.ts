import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '\\.(css|less|sass|scss|styl|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': ['jest-transform-stub', {}],
    '\\.(ts|html)$': ['@aurelia/ts-jest', {}],
  },
  testEnvironment: 'jsdom',
};

export default config;
