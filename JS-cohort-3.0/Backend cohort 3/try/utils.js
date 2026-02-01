// A nested object containing configuration data
const appConfig = {
    name: "MyNodeApp",
    version: "2.1.0",
    settings: { // Nested object
        theme: "dark",
        post: 5000
    }
};

// A function that perfomrs a task
const displayMessage = (user) => {
    return `Welcome, ${user}! You are running cersion ${appConfig.version}`;
};

// Exporting both as a single object
module.exports = {
    config: appConfig,
    greet: displayMessage
};