const { getClients, createClient, updateClient, deleteClient } = require('../models/Client');

exports.getClients = async (req, res) => {
    try {
        const clients = await getClients();
        res.json(clients);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.createClient = async (req, res) => {
    const { name, email, phone } = req.body;
    try {
        const clientId = await createClient(name, email, phone);
        res.status(201).json({ id: clientId, name, email, phone });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateClient = async (req, res) => {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    try {
        await updateClient(id, name, email, phone);
        res.json({ message: 'Client updated' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteClient = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteClient(id);
        res.json({ message: 'Client deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
