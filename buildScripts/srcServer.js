import config from '../webpack.config.dev';
import express from 'express';
import open from 'open';
import path from 'path';
import webpack from 'webpack';

/* eslint-disable no-console */

const port = 3000;
let app = express();
let compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
    res.sendfile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function (req, res) {
    res.json([{
            "id": 1,
            "firstName": "Max",
            "lastName": "Yarl",
            "mail": "a@b.com"
        },
        {
            "id": 2,
            "firstName": "Kim",
            "lastName": "Imen",
            "mail": "b@c.com"
        },
        {
            "id": 3,
            "firstName": "Tom",
            "lastName": "Wayne",
            "mail": "c@d.com"
        }
    ])
});

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
