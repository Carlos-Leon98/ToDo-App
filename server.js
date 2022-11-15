const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const { connectDB } = require('./config/db');
const { router } = require('./routes/todo');

dotenv.config({ path: './.env'});
connectDB();

const PORT = process.env.PORT;

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.use('/api/task', router);

app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, "public", "index.html"), (error, data) => {
        res.writeHead(200, ({ "Content-Type": "text/html" }));
        res.write(data);
        res.end()
    })
});

app.listen(PORT, console.log(`Server is running in port: ${PORT}`));