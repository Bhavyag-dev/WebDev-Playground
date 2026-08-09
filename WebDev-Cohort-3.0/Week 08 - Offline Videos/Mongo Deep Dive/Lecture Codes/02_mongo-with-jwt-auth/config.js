const path = require("node:path");

// Load local secrets without committing them to source control.
process.loadEnvFile(path.join(__dirname, ".env"));

const requireEnv = (name) => {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }
    return value;
};

// Secret key for JWT
const JWT_SECRET = requireEnv("JWT_SECRET");

// Server port number 
const PORT = 3000; 

// MongoDB connection URI 
const MONGO_URI = requireEnv("MONGO_URI");

// Export configuration constants for use in other files
module.exports = {
    JWT_SECRET, // Export the JWT secret key
    PORT, // Export the server port
    MONGO_URI, // Export the MongoDB connection URI
};
