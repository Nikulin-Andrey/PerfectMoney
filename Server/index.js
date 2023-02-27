const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/operations", require("./routes/operations.routes"));

const PORT = config.get("port") || 3001;

// app.get('/', (req, res) => {
//   console.log('hello')
//   res.send('Hello World!')
// })

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"));

    
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
  } catch (e) {
    console.log('Server error', e.message);
    process.exit(1);
  }

}

start();
