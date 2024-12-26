require('dotenv').config();
const mongoose = require('mongoose');

// Establish MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

const { Schema } = mongoose;

// Define the schema and model
const personSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [3, 'Name must be at least 3 characters long']
  },
  age: {
    type: Number,
    min: [0, 'Age must be a positive number'],
    max: [120, 'Age cannot exceed 120 years']
  },
  favoriteFoods: {
    type: [String]
  }
});

const Person = mongoose.model("Person", personSchema);

// Function to create and save a person
const createAndSavePerson = (done) => {
  const person1 = new Person({
    name: "Tsholofetso Pooe",
    age: 31,
    favoriteFoods: ["Bread", "Butter"]
  });

  person1.save()
    .then(savedPerson => done(null, savedPerson))
    .catch(err => done(err));
};

// Test the createAndSavePerson function
createAndSavePerson((err, savedPerson) => {
  if (err) {
    console.error('Error saving person:', err);
  } else {
    console.log('Saved person:', savedPerson);
  }
});

// Placeholder functions (not implemented)
const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  done(null /*, data*/);
};

const queryChain = (done) => {
  done(null /*, data*/);
};

// Exports
exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.createManyPeople = createManyPeople;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
