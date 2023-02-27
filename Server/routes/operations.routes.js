const { Router } = require("express");
const auth = require("../middleware/auth.middleware")
const Operation = require("../models/Operation");

const router = Router();

router.get("/", auth, async (req, res) => {
  try {
    const operations = await Operation.find({ userId: req.user.userId });

    res.json(operations);
  } catch(e) {
    res.status(500).json({ message: "что-то пошло не так" });
    console.log(e);
  }
});

router.post("/add",auth, async (req, res) => {
  try {
    const { type, amount, date, category } = req.body;

    const newOperation = new Operation({
      type,
      amount,
      date,
      category,
      userId: req.user.userId
    });
    
    await newOperation.save();

    res.status(201).json({ newOperation });
  } catch(e) {
    res.status(500).json({ message: "что-то пошло не так" });
    console.log(e);
  }
});

module.exports = router;
