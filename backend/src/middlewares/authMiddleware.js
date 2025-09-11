require('dotenv').config();


exports.isAuthenticated = (req, res, next) => {
    console.log("isAuthenticates: ---------- ", req.userInfo.isAuthenticated)

    if (req.userInfo.isAuthenticated) { // Check session instead of cookies
      return next();
    }
    res.redirect("/login"); // Redirect if not authenticated
  };
  