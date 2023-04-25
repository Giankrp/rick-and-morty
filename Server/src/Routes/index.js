const { getCharById } = require("../controllers/getCharById");
const { postFav, deletFav } = require("../controllers/handleFavorites");
const { login } = require("../controllers/login");
const router = require("express").Router();

router.get("/character/:id", (req, res) => {
    getCharById(req, res)
});

router.get("/login", (req,res)=>{
    login(req,res)
})


router.post("/fav", (req, res) => {
    postFav(req, res)
})

router.delete("/fav/:id", (req, res) => {
    deletFav(req, res)
})


module.exports= router