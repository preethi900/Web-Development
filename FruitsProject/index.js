const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/FruitsDB",{ useNewUrlParser: true , useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
  name : {
    type : String,
    required : [true , "Fruit name required"]
  },
  rating : {
    type : Number,
    min : 1,
    max: 10
  },
  review : String

});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit(
  {
    name : "Jamun",
    rating : 10,
    review : "Rich in iodine!!!"
  }
);

//fruit.save();

// const kiwi = new Fruit(
//   {
//     name : "Kiwi",
//     rating : 10,
//     Review : "Nice Color!!!"
//   }
// );
//
// const mango = new Fruit(
//   {
//     name : "Mango",
//     rating : 10,
//     Review : "Cannot compare to any fruit!!!"
//   }
// );
//
// const banana = new Fruit(
//   {
//     name : "Banana",
//     rating : 8,
//     Review : "Easy Fruit!!!"
//   }
// );

// Fruit.insertMany([kiwi,mango,banana],function(err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Successfully added fruits to fruitsDB")
//   }
// });

Fruit.find(function(err,fruits) {
  if(err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    fruits.forEach(function (element) {
      console.log(element.name);
    });
  }
});


// Fruit.deleteOne({name: "Peach"},function(err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Deleted the entry successfully!!!!")
//   }
// });


const personSchema = new mongoose.Schema({
  name : String,
  age : Number,
  favoritefruit : fruitSchema

});

const Person = mongoose.model("Person",personSchema);

const person = new Person(
  {
    name : "Amy",
    age : 16,
    favoritefruit : fruit
  }
);


Person.updateOne( {name : "Preethi"}, {favoritefruit : fruit}, function(err){
  if(err) {
    console.log(err);
  } else {
    console.log("Successfully updated");
  }
});

//person.save();
