const path = require('path');

// Absolute path to project directory
const projectDir = path.join(__dirname, '..');

// Convert project-relative path to absolute path
function projectPath(...localPaths) {
    return path.join(projectDir, ...localPaths)
}

// Defaul logLevel
let logLevel = 'info';

// Environment Variable
if (process.env.LOG_LEVEL) {
    logLevel = process.env.LOG_LEVEL.toLowerCase();
}


// Configuration information
module.exports = {
    projectDir,

    projectPath,

    logLevel,

    httpPort: 8000,

    staticDir: projectPath('static'),
    sessionSecret: 'bunnyslippers',
    dbInfo: {
        host: 'localhost', 
        db: 'test-urshiftmate'
    
    }

   
};