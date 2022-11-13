const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const { connectDB } = require('./config/db');
const { router } = require('./routes/todo');

dotenv.config({ path: './.env'});
connectDB();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

if (process.env.MODE === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/task', router);

app.get('/', (req, res) => {
    res.send('API is running Good')
});

app.listen(PORT, console.log(`Server is running in port: ${PORT}`));