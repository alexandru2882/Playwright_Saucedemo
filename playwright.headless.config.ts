import baseConfig from './playwright.config';
import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  ...baseConfig,
  use: {
    ...baseConfig.use,
    headless: true,
    launchOptions: {
      ...(baseConfig.use as any)?.launchOptions,
      slowMo: 0,
    },
  },
};

export default config;