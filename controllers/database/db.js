
// import mongodb client from mongodb
const { MongoClient } = require("mongodb");

// DB Values
const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/`;
const client = new MongoClient(dbUrl); 

console.log("DATABASE URL :- " + dbUrl);

// connect to database
async function connection(){
    db = client.db("teatime");
    return db;
}

module.exports = connection;