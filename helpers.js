const fs = require('fs');
const path = require('path');

const defaultPath = path.join(__dirname, 'styles');

function flatten(acc, item) {
    if (item) {
        return acc.concat(Array.isArray(item) ? flatten(item) : item);
    }

    return acc;
}

module.exports = {
    canonicalLink: function (link) {
        let baseUrl = process.env.BASE_URL;
        let portString = process.env.PORT == '80' || process.env.PORT == '443' ? '' : `:${process.env.PORT}`;

        return `${baseUrl}${portString}${link}`;
    },
    styles: function (...stylesheets) {
        stylesheets = stylesheets
            .slice(0, -1)
            .reduce(flatten, []);

        let styles = '';

        if (stylesheets.length > 0) {
            stylesheets.forEach((stylesheet) => {
                let stylesheetPath = path.join(defaultPath, stylesheet);

                if (fs.existsSync(stylesheetPath)) {
                    styles += fs.readFileSync(stylesheetPath, { encoding: 'utf8' });
                }
            });
        }

        return styles;
    }
};