// middleware function to check for logged-in users
var sessionChecker = (req, res, next) => {
    
    if (req.session.user && req.cookies.user_sid) {
        console.log('rendering welcome')
        res.render('welcome');
    } else {
        next();
    }    
  };

module.exports = sessionChecker;