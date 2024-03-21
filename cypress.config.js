const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   
    reporter: 'mochawesome',
   // implement node event listeners here
 
},
env:{
  URL:'url'
}



});
