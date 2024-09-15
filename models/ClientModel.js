const mysql = require('mysql2');
const config = require('config');

// Create a connection to the database
const pool = mysql.createPool(config.get('mysql'));
const promisePool = pool.promise();

// Get all clients
const getClients = async () => {
    const [rows] = await promisePool.query('SELECT * FROM clients');
    return rows;
};

// Create client
const createClient = async (name, email, phone) => {
    const [rows] = await promisePool.query('INSERT INTO clients (name, email, phone) VALUES (?, ?, ?)', [name, email, phone]);
    return rows.insertId;
};

// Update client
const updateClient = async (id, name, email, phone) => {
    await promisePool.query('UPDATE clients SET name = ?, email = ?, phone = ? WHERE id = ?', [name, email, phone, id]);
};

// Delete client
const deleteClient = async (id) => {
    await promisePool.query('DELETE FROM clients WHERE id = ?', [id]);
};

module.exports = { getClients, createClient, updateClient, deleteClient };
