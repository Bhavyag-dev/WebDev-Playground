// Import the custom module
const utils = require('./utils');

// Accessing the nested object
console.log("App Name: ", utils.config.name);
console.log("Current Theme: ", utils.config.settings.theme);

// Using the exported function
const message = utils.greet("Bhavya");
console.log(message);