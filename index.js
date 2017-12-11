const express = require('express'),
  hbs = require('express-handlebars'),
  router = express.Router(),
  app = express(),
  PORT = process.env.PORT || 3000;

const appRoutes = require('./routes/appRoutes');

app.engine('handlebars', hbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use('/assets', express.static('public'));

router.get('/', appRoutes.home);

//ERROR HANDLING
app.use((req, res) => {
  res.render('404', {
    title: 'Błąd 404 - strona o pdanym adresie nie istnieje!'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
