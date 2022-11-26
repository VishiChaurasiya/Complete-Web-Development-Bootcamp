// // Installation process :-


// // mongosh(mongo shell in latest version 6.0) == mongo(after renaming its folder by me and 'mongo' name used in version 5.0)
// // mongosh/mongo is the command-line shell that connects to a specific instance of mongod.
// // mongod is the "Mongo Daemon" it's basically the host process for the database.

// // mongod + mongo + mongodb compass in a single file download for version 5.0 and have to download 'mongosh/mongo' separately when downloading latest version 6.0
// // Create Folder -> c://data//db
// // Set environment variable

// // mongod -> Server
// // mongo/mongosh -> mongo shell
// // mongodb campass -> GUI




// // Inserting data in mongo db :-


// // A collection is a grouping of MongoDB documents. 
// // Documents within a collection can have different fields. 
// // A collection is the equivalent of a table in a relational database system. 
// // A collection exists within a single database. 

// // IMP Commands :-
// use database_name
// show dbs // Shows all dbs which have atleast one collection in it
// show collections
// db.collectionName.insertOne({name: "vishi", id: "1"}) // Used to create a collection
// db.items.find() // To get all the inserted documents of collection 'items'

// // vishiKart is a DataBase
// // 'items' is a Collection(Table)
// // ({name: "Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98}) is a Document(Object/Row/Data/Tuple etc)
// // mongo db doesn't schema enforce every document/object
// // mongo db doesn't enforce every document/object to have same schema(Relation/Table or column Structure/No. of Columns)


// // Commands/Queries Executed :-

// // Database to be used, if not exists will be created
// use vishiKart

// // insertOne() is a function to insert a document to a collection
// // ({name: "Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98}) is a Document(Object/Row/Data/Tuple etc)
// db.items.insertOne({name: "Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98})

// // insertMany() is a function to insert multiple documents at a time to a collection and this function takes an array of documents
// db.items.insertMany([{name: "Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98}, {name: "Moto 30s", price: 20000, rating: 3.5, qty: 200, sold: 598}, {name: "Realme 80s", price: 129000, rating: 2.5, qty: 450, sold: 98}])

// db.items.insertMany([{name: "Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98}, {name: "Moto 30s", price: 20000, rating: 3.5, qty: 200, sold: 598}, {name: "Realme 80s", price: 129000, rating: 2.5, qty: 450, sold: 98}, {name: "Realme 80s", price: 129000, rating: 2.5, qty: 450, sold: 98, isBig: true}])