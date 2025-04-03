exports.isAuthenticated = (req, res, next) => {
    if (req.session.isAuthenticated) { // Check session instead of cookies
      return next();
    }
    res.redirect("/login"); // Redirect if not authenticated
  };
  