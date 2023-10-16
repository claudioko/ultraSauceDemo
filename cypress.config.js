const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    e2e: {
      baseUrl: "https://www.saucedemo.com",
      video: false,
      chromeWebSecurity: false,
    },
    env: {
      standardUser: {
        userName: "standard_user",
        password: "secret_sauce",
      },
      lockedOutUser: {
        userName: "locked_out_user",
        password: "secret_sauce",
      },
      problemUser: {
        userName: "problem_user",
        password: "secret_sauce",
      },
      performanceGlitchUser: {
        userName: "performance_glitch_user",
        password: "secret_sauce",
      },
    }
  },
});