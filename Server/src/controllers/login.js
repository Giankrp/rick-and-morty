const users = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;

  const userFound = users.find(
    (user) => user.email === email && user.password === password
  );
  return userFound
    ? res.status(200).json({ acces: true })
    : res.status(418).json({ acces: false });
};

module.exports = {
  login,
};
