const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here, se precisar
    },
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php',
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
  },
});
