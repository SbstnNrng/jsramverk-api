[![Build Status](https://travis-ci.org/Skwoat/jsramverk-api.svg?branch=master)](https://travis-ci.org/github/Skwoat/jsramverk-api)
[![Build Status](https://scrutinizer-ci.com/g/Skwoat/jsramverk-api/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/Skwoat/jsramverk-api/?branch=master)

To install run these commands:

[npm init]
[npm install express cors morgan --save]
[npm install -g nodemon]
[npm install sqlite3 --save]
[npm install --global --production windows-build-tools] <---- windows only
[npm install jsonwebtoken --save]
[npm install bcryptjs --save]

To run the api:

in package.json add ["start": "nodemon app.js"] to "scripts"
to set JWT-secret run [export JWT_SECRET='STRINGOF64CHARACTERSHERE']
initiate db with the following commands
    cd db
    sqlite3 [sqlite filename]
    .read [sql filename]
    .exit
then run [npm start]