const mongoose = require('mongoose');
DATABASE_URL = "mongodb://localhost:27017/todolist";

const MongoDbConnection = async () => {
    await mongoose.connect(DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() => {
        console.log("Yayyy! You have established a Connection with MongoDB!");
        
    })
    .catch(error => console.error(error.message));
}
module.exports = {connection: MongoDbConnection};