import Workout from "../models/Workout";
export const getAllWorkouts = () => {
  Workout.find({}, (err, Workout) => {
    if (err) {
      res.send(err);
    }
    res.json(Workout);
  });
};

export const getWorkoutById = (ref) => {
  Workout.findOne({ Workoutref: ref }, (err, workout) => {
    if (err) {
      res.send(err);
    }
    res.json(workout);
  });
};

export const addNewWorkout = (workout) => {
  const { name, days, Description } = workout;

  const newWorkout = new Workout(workout);
  newWorkout.save((err, Workout) => {
    if (err) {
      res.send(err);
    }
    res.json(Workout);
  });
};

export const deleteWorkout= (workoutId) => {
    Workout.remove({ _id: workoutId }, (err, person) => {
      if (err) {
        res.send(err);
      }
      res.json({ msg: "successufly deleted player" });
    });
  };