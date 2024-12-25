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
    required: true,
    type: String
  },
  age: Number,
  favouriteFoods: [String]
});

const Person = mongoose.model("Person", personSchema);

// The function that will save the person
const createAndSavePerson = (done) => {
  const person1 = new Person({
    name: "Tsholofetso Pooe",
    age: 31,
    favouriteFoods: ["Bread", "Butter"]
  });

  person1.save()
    .then((savedPerson) => {
      done(null, savedPerson);  // If successful, pass the saved person to done
    })
    .catch((err) => {
      done(err);  // If there's an error, pass it to done
    });
};

createAndSavePerson((err, savedPerson) => {
  if (err) {
    console.error('Error saving person:', err);  // Handle any errors
  } else {
    console.log('Saved person:', savedPerson);  // Handle successful saving
  }
});


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
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
