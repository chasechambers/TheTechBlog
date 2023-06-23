const express = require('express');
const app = express();
const expbs = require('express-handlebars');


app.use(express.static('public'));


app.engine('handlebars', expbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.listen(3001, () => {
    console.log('Server is starting at port ', 3001)
});


app.get('/', (req, res) => {
    res.render('index');
})