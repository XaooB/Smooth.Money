exports.home = (req, res) => {
  res.render('home', {
    title: 'Strona Główna'
  });
};

exports.login = (req, res) => {
  res.render('logowanie');
};
