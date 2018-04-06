'use strict';

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/sandbox");

var db = mongoose.connection;

db.on("error", function(err){
    console.error("Connection Error:", err); 
});

db.once("open", function(){
    console.log("The connection was successful");

    var Schema = mongoose.Schema;
    var AnimalSchema = new Schema({
        type:  {type: String, default: "Goldfish"},
        color: {type: String, default: "golden"},
        size : {type: String, default: "small"},
        average_mass: {type: Number, default: 0.0004},
        name: {type: String, default: "Angela"}
    });

    var Animal = mongoose.model("Animal", AnimalSchema);

    var Elephant = new Animal({
        type: "Elephant",
        color: "gray",
        size: "big",
        average_mass: 6000,
        name: "Lawrence"
    });
   
    var Whale = new Animal({
        type: "whale",
        size: "very big",
        average_mass: 189058,
        name: "Fang"
    });

    var animal = new Animal({});

    Animal.remove({}, function(err){
        if(err) console.error(err);
            Elephant.save(function(err){
        if(err) console.error("Failed to save", err);
            animal.save(function(err){
        if (err) console.error("Failed to save", err);
        Whale.save(function(err){
        if(err) console.error("Failed to save", err);
            Animal.find({size:"very big"}, function(err, animals){
                animals.forEach(function(animal){
                    console.log(animal.name + " the " + animal.color + " " + animal.type);
                });
                db.close(function (){
                     console.log("DB connection closed");
    });
            });
    });
     });
    });
    });


});