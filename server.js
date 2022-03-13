const express = require('express')
const db = require('./db')
const app = express()
const port = 8080
const bodyParser = require("body-parser")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
// GET
app.get('/', async (req, res) => {
    try {

    } catch (err) {
        throw err;
    }
});
 
// POST
app.post('/', async (req, res) => {
    let task = req.body;
    try {

    } catch (err) {
        throw err;
    }
});
 
app.put('/', async (req, res) => {
    let task = req.body;
    try {

    } catch (err) {
        throw err;
    } 
});
 
app.delete('/', async (req, res) => {
    let id = req.query.id;
    try {

    } catch (err) {
        throw err;
    } 
});
 
app.listen(port, () => console.log(`Listening on port ${port}`));