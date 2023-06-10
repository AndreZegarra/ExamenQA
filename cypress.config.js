const { defineConfig } = require('cypress');

module.exports = defineConfig({
  env: {
    baseUrl: 'https://www.automationexercise.com/',
    QaAutomationUser: 'andrezegarra2481@gmail.com',
    QaAutomationPassword: '123456',
  },
  viewportWidth: 1366,
  viewportHeight: 768,
  chromeWebSecurity: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      // eslint-disable-next-line global-require
      return require('./cypress/plugins/index')(on, config);
    },
  },
});
