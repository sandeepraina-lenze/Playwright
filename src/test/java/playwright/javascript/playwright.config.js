// @ts-check
const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    video: 'retain-on-failure',
  },

  projects: [
        {
            name: 'Pixel 4 chrome',
            use: {
              browserName: 'chromium',
              ...devices['Pixel 4'],
            },
        },

        {
            name: 'Pixel 4 firefox',
            use: {
            browserName: 'firefox',
            ...devices['Pixel 4'],
            },
        },

        {
            name: 'iPhone 11 webkit',
            use: {
              browserName: 'webkit',
              ...devices['iPhone 11'],
            },
        },

        {
            name: 'iPhone 11 chrome',
            use: {
              browserName: 'chromium',
              ...devices['iPhone 11'],
            },
        },
    ],
};

module.exports = config;