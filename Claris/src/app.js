const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const port = 3000

// Import routes
const IndexRouter = require("../src/routes/index.routes")
const FoodRouter = require("../src/routes/food.routes")
    // const HallRouter = require("../src/routes/hall.routes")
    // const BookingRouter = require("../src/routes/booking.routes")

// view engine setup
app.set('view engine', 'pug');
app.set('views', 'src/views');

// Enable Static file
app.use(express.static('src/public'))

// Enable Method Override
app.use(methodOverride('_method'));

// Enable Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }));

// Enable Routes
app.use('/', IndexRouter)
app.use('/foods', FoodRouter)
    // app.use('/hall', HallRouter)
    // app.use('/booking', BookingRouter)

app.listen(port, () => {
    console.log(`Server listening http://localhost:${port}`)
})

// Khai báo dotenv
require('dotenv').config({ path: './process.env' });

// Khai báo mongoose
var mongoose = require('mongoose');

// Connect database
mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Database'));