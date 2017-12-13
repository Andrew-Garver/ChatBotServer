const express        = require('express');
const bodyParser     = require('body-parser');
const cors           = require('cors');
const compression    = require('compression');
const helmet         = require('helmet');
const app            = express();

const port = 8000;

app.use(compression());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

require('./app/routes')(app, {});

app.listen(port, () => {
    console.log('We are live on ' + port);
});