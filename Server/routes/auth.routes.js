const { Router } = require("express");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/User");
const bodyParser = require('body-parser');

const router = Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    // const newUser = new User({ email, password });
    // await newUser.save();

    if (!(user && user.password === password)) {
      return res.status(400).json({ message: "неверный логин или пароль" });
    }

    const token = jwt.sign(
      { userId: user.id },
      config.get("jwtKey"), 
      { expiresIn: "1h" }
    );

    res.json({ token, userId: user.id });
    
  } catch(e) {
    res.status(500).json({ message: "что-то пошло не так" });
    console.log(e);
  }
});

module.exports = router;
