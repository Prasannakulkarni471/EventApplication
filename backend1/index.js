const connectToMongo = require('./db');//using exported function to connect to database
const express = require('express');
var cors = require('cors')

connectToMongo();
const app = express()
const port = process.env['PORT']
  

app.use(cors())
//middleware to use req.body
app.use(express.json());

//Available routes
app.use('/api/auth',require('./routes/auth'));

// app.get('/', (req, res) => {
//   res.send('Hello Ishan!')   
// })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})