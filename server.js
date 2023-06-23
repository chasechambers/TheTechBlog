const express = require('express');
const app = express();
const expbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 3001;


app.use(express.static('public'));


app.engine('handlebars', expbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.listen(PORT, () => {
    console.log('Server is starting at port ', PORT)
});


app.get('/', (req, res) => {
    res.render('index');
})