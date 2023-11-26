const express = require('express');
const cors = require('cors');
const Order = require('../models/Order');
const { Error } = require('mongoose');
const PORT=5000;
require("./db");
const app = express();
app.use(cors());
app.use(express.json())


app.get('/', (req, res) => {
    res.send('hello world')
  })

  
app.post("/api/order", async (req, res) => {
    try {
        const data = req.body;
        const createdOrder = new Order(data);
        await createdOrder.save();
        res.send('Order Placed')
    } catch (error) {
        res.send(error)
    }
});

app.listen(PORT,function(){
    console.log("Local Host:"+PORT);
});

app.get("/api/order", async (req, res) => {
    try {
        const orderList = await Order.find();
        res.send(orderList);
    } catch (error) {
        res.send(error)
    }
});

app.put("/api/order/:id", async (req, res) => {
    try {
        const data = req.body;
        await Order.updateOne({ _id: req.params.id }, { $set: data });
        res.send("Order Updated");
    } catch (error) {
        res.send(error)
    }
});

app.delete("/api/order/:id", async (req, res) => {
    try {
        await Order.deleteOne({ _id: req.params.id });
        console.log("Order Deleted");
        res.status(200).send("Order Deleted");
    } catch (error) {
        console.error("Error deleting order:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get("/api/order/:id", async function (req,res){
    try{
      const data = await Order.findById({ _id:req.params.id})
      res.send(data)
    }
    catch(error){
      res.send(error);
    }
  })

module.exports = app;