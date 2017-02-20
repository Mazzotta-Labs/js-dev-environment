import express from 'express';
import open from 'open';
import path from 'path';

const port = 3000;
let app = express();

app.get('/', function (req, res) {
    res.sendfile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
