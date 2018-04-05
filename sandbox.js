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
        type: String,
        color: String,
        size : String,
        average_mass: Number,
        name: String
    });

    var Animal = mongoose.model("Animal", AnimalSchema);

    var Elephant = new Animal({
        type: "Elephant",
        color: "gray",
        size: "big",
        average_mass: 6000,
        name: "Lawrence"
    });

    Elephant.save(function(err){
        if(err) console.error("Failed to save", err);
        else console.log("Saved");

        db.close(function (){
            console.log("DB connection closed");
        });
    });

});