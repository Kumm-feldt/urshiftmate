require('dotenv').config();

/*
export function requireAuth(req, res, next){
    const header = req.get("authorization") || "";
    const [schema, token] = header.split(" ");
    if(schema !== "Bearer" || !token) return res.status(401).json({
      error: "Missing Token"
    })

    try{

      // verify & attach user rto req. include short maxAge to prevent very old tokens
      const payload = jwt.verify(token, process.env.JWT_SECRET, {clockTolerance: 5})
      // googleId in the token when issuing it
      req.user = { id: payload.sub };
      return next();

    }catch(err){
      return res.status(401).json({ error: "Invalid or expired token" });
    }

}
*/
exports.isAuthenticated = (req, res, next) => {
    console.log("isAuthenticates: ---------- ", req.session.isAuthenticated)

    if (req.session.isAuthenticated) { // Check session instead of cookies
      return next();
    }
    res.redirect("/login"); // Redirect if not authenticated
  };
  