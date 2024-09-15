const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('config');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const pool = mysql.createPool(config.get('mysql'));
const promisePool = pool.promise();

app.use('/api/auth', require('./routes/auth'));
app.use('/api/clients', require('./routes/clients'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
