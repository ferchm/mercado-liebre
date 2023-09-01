const express = require ('express');
const app = express();
const path = require ('path');

app.use(express.static('public'));

const PORT = 3000;

app.listen(PORT,() => console.log(`Server app: PORT:${PORT}`) );

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})