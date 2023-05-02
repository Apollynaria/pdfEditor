module.exports = (app) => {
    const file = require('../controller/file.controller');
    
    app.post('/api/saveFile', file.fileSave);
};