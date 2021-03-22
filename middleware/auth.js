//verify the user wa9teli ga3de fi west el site m3ntha iverifi el session mta3o
const config = require("config");
const jwt = require("jsonwebtoken");
//purpose is to get token sent from the front end framwrok react

function auth(req, res, next) {
  const token = req.header("x-auth-token");

  //check for token
  if (!token)
    //401 means user unathorised
    return res.status(401).json({ msg: "No token,authorization denied" });
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    //add user from payload
    req.person = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "token is not valid" });
  }
  //verify token
}
module.exports = auth;
