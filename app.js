// mongo connections and server technologies
const mongoose = require('mongoose');
const express = require("express");
const app = express();
const passport = require('passport');
const path = require('path');

// parses json
const bodyParser = require('body-parser');

// our DB password keys to connect
const db = require('./config/keys').mongoURI;
// ROUTE IMPORTS
const users = require("./routes/api/users");
const pictures = require("./routes/api/pictures");
const cholesterol = require("./routes/api/cholesterol");
const bloodPressure = require("./routes/api/bloodPressure");
const weight = require("./routes/api/weight");
const vitaminD = require("./routes/api/vitaminD");
const restingHeartRate = require("./routes/api/restingHeartRate");
const temperature = require("./routes/api/temperature");
const allergy = require("./routes/api/allergies");
const medicalCondition = require("./routes/api/medicalCondition");

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

// CONNECT TO MONGOOSE -> MONGO DB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

// MUST HAPPEN FIRST, TO ENABLE JSON BODY PARSING
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROUTES
app.get("/", (req, res) => res.send("Hello World"));
app.use("/api/users", users);
app.use("/api/pictures", pictures);
app.use("/api/cholesterols", cholesterol);
app.use("/api/bloodPressures", bloodPressure);
app.use("/api/weights", weight);
app.use("/api/vitaminDs", vitaminD);
app.use("/api/restingHeartRates", restingHeartRate);
app.use("/api/temperatures", temperature);
app.use("/api/allergies", allergy);
app.use("/api/medicalConditions", medicalCondition);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));