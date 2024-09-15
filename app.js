// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, CI/CD Pipeline! let me edit something');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
