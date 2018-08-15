module.exports = function(req, res, next) {
  if (req.url === "/login" && req.method === "POST") {
    const { username, password } = req.body;
    console.log(
      username,
      password,
      username === "myuser@gmail.com" && password === "mypassword"
    );
    if (username === "myuser@gmail.com" && password === "mypassword") {
      req.path = req.url = "/registereduser";
      req.method = "GET";
      console.log("AFTER:", req.body);
      req.query = req.body;
    } else {
      res.sendStatus(401);
    }
  }
  next();
};
