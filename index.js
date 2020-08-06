const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello world, with NodeJS dhhd')
})

app.listen(port, () => {
    console.log(`testing at http://localhost:${port}`)
})