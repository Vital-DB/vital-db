const mongoose = require('mongoose');
const express = require("express");
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// routes
const users = require("./routes/api/users");


app.get("/", (req, res) => res.send("Hello World"));
app.use("/api/users", users);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));