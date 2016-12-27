'use strict';

const express = require('express');

const app = express();
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.status(200).render('index');
});

app.get(/.*/, (req, res) => {
    res.status(404).render('404', { title: '404' });
});

if (module === require.main) {
    const server = app.listen(process.env.PORT || 8080, () => {
        const port = server.address().port;
        console.log(`App listening on port ${port}`);
    });
}

module.exports = app;
