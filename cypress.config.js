const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   
    reporter: 'mochawesome',
   // implement node event listeners here
 
},
env:{
  URL:'https://hris.peoplehum.com/portal/login?urlencoded=https:%2F%2Fhris.peoplehum.com'
}



});