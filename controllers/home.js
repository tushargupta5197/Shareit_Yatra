
/* GET home page. */
exports.getHome = function(req, res) {
	if(req.user) {
		res.render('home', {user : req.user});
	} else {
		res.render('home', {});
	}
	
};

