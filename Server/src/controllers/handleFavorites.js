let myFavorites = [];

const postFav = (req, res) => {
  const character = req.body;

  myFavorites.push(character);

  return res.status(200).json(myFavorites);
};

const deletFav = (req, res) => {
  const { id } = req.params;

  myFavorites = myFavorites.filter((favorite) => favorite.id !== +id);

  return res.status(200).json(myFavorites);
};

module.exports = { postFav, deletFav };
