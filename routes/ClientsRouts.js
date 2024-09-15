const express = require('express');
const router = express.Router();
const { getClients, createClient, updateClient, deleteClient } = require('../controllers/ClientController');
const auth = require('../middleware/auth');

// Get all clients
router.get('/', auth, getClients);

// Create client
router.post('/', auth, createClient);

// Update client
router.put('/:id', auth, updateClient);

// Delete client
router.delete('/:id', auth, deleteClient);

module.exports = router;
