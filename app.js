const express = require('express');

const app = express();

const path = require('path');

const port = 3030;



app.set('view engine', 'ejs');

app.set('views',path.join('views'))

app.use(express.static('public'));

app.get('/', indexRouter);


app.listen(port, () => console.log(`Servidor funcionando en el puerto ${port}!`));