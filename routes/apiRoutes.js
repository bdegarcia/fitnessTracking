const router = require("express").Router()
const db = require("../models");


router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(data => res.json(data))
    .catch(err => {throw err});
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then(data => res.json(data))
    .catch(err => {throw err});
});

router.post("/api/workouts", (req, res) => {
  db.Workout.create({})
    .then(data => res.json(data))
    .catch(err => {throw err})
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  db.Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then(data => res.json(data))
    .catch(err => {throw err});
});

module.exports = router;