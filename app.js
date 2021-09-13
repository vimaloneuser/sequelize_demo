const express = require('express');
const app = express();


const port = 8080;
require('./models/index');

app.get('/', (req, res) => {
    res.send('home page');
})


app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})