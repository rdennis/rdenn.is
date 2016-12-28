'use strict';

const express = require('express');

const app = express();
const env = app.locals.env = process.env.NODE_ENV || 'production';

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get(/.*/, (req, res) => {
    res.render('index');
});

if (module === require.main) {
    const server = app.listen(process.env.PORT || 8080, () => {
        const port = server.address().port;
        console.log(`App listening on port ${port}`);
    });
}

module.exports = app;
