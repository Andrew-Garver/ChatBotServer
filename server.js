const express        = require('express');
const bodyParser     = require('body-parser');
const cors           = require('cors');
const compression    = require('compression');
const helmet         = require('helmet');
const cool           = require('cool-ascii-faces');

const app            = express();

app.set('port', (process.env.PORT || 5000));

app.get('/cool', function(request, response) {
    response.send(cool());
});

app.use(compression());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

require('./app/routes')(app, {});

app.listen(app.get('port'), function() {
    console.log('We are live on ' + app.get('port'));
});