const path = require('path'),
express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');

// Express Route
const productRoute = require('./routes/product.route')

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URI || require('./config/config').uri, {
  useNewUrlParser: true
}).then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/products', productRoute)


// PORT
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})


app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.get('*', (request, response) => {
	response.sendFile(path.resolve(__dirname, '../client/build/index.html'));
});
