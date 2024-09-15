const mysql = require('mysql2');
const config = require('config');

// Create a connection to the database
const pool = mysql.createPool(config.get('mysql'));
const promisePool = pool.promise();

// Register user
const registerUser = async (username, password) => {
    const [rows] = await promisePool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
    return rows.insertId;
};

// Get user by username
const getUserByUsername = async (username) => {
    const [rows] = await promisePool.query('SELECT * FROM users WHERE username = ?', [username]);
    return rows[0];
};

module.exports = { registerUser, getUserByUsername };
