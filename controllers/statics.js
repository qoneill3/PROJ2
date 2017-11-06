//GET THAT SLASH


function index(req, res) {  
  res.render('index.ejs');
}

function home(req, res) {
	res.render('home.ejs');
}

module.exports = {
  index: index,
  home: home
};