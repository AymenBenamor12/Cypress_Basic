const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //"viewportwidth": 550,
    //"viewportHaight": 660,
    //baseUrl : "https://www.google.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
