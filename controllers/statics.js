//GET THAT SLASH


function index(req, res) {  
  res.render('/Users/quinnoneill/WDI/PROJ2/views/index.ejs');
}

function home(req, res) {
	res.render('/Users/quinnoneill/WDI/PROJ2/views/home.ejs');
}

module.exports = {
  index: index,
  home: home
};