const mongoose = require('mongoose');


const connectToDB =() => {
    
    mongoose.connect('mongodb+srv://CoffeProject:Gjr8SqSfpl8xYpCO@cluster0-ld3mh.mongodb.net/CoffeeProduct',{useUnifiedTopology:true,useNewUrlParser:true});
    const db = mongoose.connection;
    db.once('open', () => {
        console.log('Connected to the database');
    })
    db.on('error',(err)=> console.log('Error' + err));
}
module.exports=connectToDB;