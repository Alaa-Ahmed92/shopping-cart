const express = require('express');
const Order = require('../models/orderModel');
const router = express.Router();

router.get('/api/orders', async (req, res) => {
    const orders = await Order.find();
    res.send(orders);
});

router.post('/api/orders', async (req, res) => {
    const newOrder = new Order(req.body);
    const saveOrder = await newOrder.save();
    res.send(saveOrder);
});

router.delete('/api/orders/:id', async (req, res) => {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    res.send(deletedOrder);
});

module.exports = router;