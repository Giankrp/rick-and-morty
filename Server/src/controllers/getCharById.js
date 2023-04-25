const URL = "https://rickandmortyapi.com/api/character";
const axios = require("axios");

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(`${URL}/${id}`);
    const { name, species, origin, image, gender, status } = data;

    if (!name) throw Error(`No hay personaje con ese ID ${id}`);

    const character = {
      id,
      name,
      species,
      origin,
      image,
      gender,
      status,
    };
    return res.status(200).json(character);

    // return res.status(404).send("Not found");
  } catch (error) {
    return error.nessage.includes("ID")
      ? res.status(404).send(error.message)
      : res.status(500).send(error.response.data.error);
  }
};

module.exports = { getCharById };
