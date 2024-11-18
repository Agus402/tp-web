const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));


app.get('/', (req, res) => {
    res.send('Server con express.');
});


app.listen(port, () => {
    console.log(`Servidor funcionando en: http://localhost:${port}`);
});
