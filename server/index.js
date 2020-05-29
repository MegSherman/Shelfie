require ('dotenv').config ();
const express = require ('express'),
massive = require ('massive'),
app = express (),
{SERVER_PORT, CONNECTION_STRING} = process.env;
const ctrl = require ('./controller')

app.use (express.json ())

massive ({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then (db => {
    app.set ('db', db)
    console.log ('db connected')
}).catch (error => console.log ('db error'))

// Controller Endpoints
app.get ('/api/inventory', ctrl.getInventory)
app.post ('/api/product', ctrl.createProduct)

app.listen (SERVER_PORT, () => console.log (`Rocking your skills check on port ${SERVER_PORT}`))