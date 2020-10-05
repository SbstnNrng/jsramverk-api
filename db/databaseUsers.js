var sqlite3 = require('sqlite3').verbose();

module.exports = (function () {
    if (process.env.NODE_ENV === 'test') {
        return new sqlite3.Database('./db/testText.sqlite');
    }

    return new sqlite3.Database('./db/text.sqlite');
}());
