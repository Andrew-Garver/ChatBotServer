const express        = require('express');
const bodyParser     = require('body-parser');
const cors           = require('cors');
const compression    = require('compression');
const helmet         = require('helmet');
var cool = require('cool-ascii-faces');

const app            = express();

app.set('port', (process.env.PORT || 5000));

// app.use(express.static(__dirname + '/public'));

// views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

// app.get('/', function(request, response) {
//     response.render('pages/index')
// });

app.get('/cool', function(request, response) {
    response.send(cool());
});

// app.listen(app.get('port'), function() {
//     console.log('Node app is running on port', app.get('port'));
// });

// const port = 8000;

app.use(compression());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

require('./app/routes')(app, {});

app.listen(app.get('port'), function() {
    console.log('We are live on ' + app.get('port'));
});