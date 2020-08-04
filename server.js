const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true });

db.Workout.create({ name: "Workout 1" })
  .then(dbUser => {
    console.log(dbUser);
  })
  .catch(({ message }) => {
    console.log(message);
  });

app.get("/workout", (req, res) => {
  db.Workout.find({})
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/user", (req, res) => {
  db.User.find({})
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

app.post("/submitcardio", ({ body }, res) => {
  db.Cardio.create(body)
    .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

app.post("/submitstrength", ({ body }, res) => {
    db.Strength.create(body)
      .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});