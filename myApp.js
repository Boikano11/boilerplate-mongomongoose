require('dotenv').config();
const mongoose = require('mongoose');

// Establish MongoDB connection
mongoose.connect(process.env.MONGO_URI);
  

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
  
  const Person1 = new Person({
    name: "Kgosi Pooe",
    age: 31,
    favoriteFoods: ["Bread", "Butter"]
  });

  Person1.save((err, data)=>{
    if(err) return done(err);
    return done(null, data);
  });// Pass the result to the callback
  
};

createAndSavePerson((err, data) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("Saved person:", data);
  }
});

// Placeholder functions (not implemented)
const arrayOfPeople = [{
  name: 'Khama Mofokeng',
  age: 32,
  favoriteFoods: ['Banana', 'Apple']
},{
  name: 'Karabo Radebe',
  age: 30,
  favoriteFoods: ['Skhambane', 'Pizza']
},{
  name: 'Tsholofetso Pooe',
  age: 31,
  favoriteFoods: ['Stake', 'Burger']
}];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data)=>{
    if(err) return done(err);
    done(null, data);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, data) => {
    if (err) return done(err); // Handle errors
    return done(null, data);   // Pass the array of matching documents to the callback
  });
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
