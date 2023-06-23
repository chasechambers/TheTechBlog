const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const PORT = process.env.PORT || 3001;
const routes = require('./controllers');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });

const sess = {
    secret: 'Super secret secret',
    cookie: {
      maxAge: 300000,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };
  
  app.use(session(sess));

// Use Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Uses routes
app.use(routes);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.listen(PORT, () => {
    console.log('Server is starting at port ', PORT)
});


sequelize.sync()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));