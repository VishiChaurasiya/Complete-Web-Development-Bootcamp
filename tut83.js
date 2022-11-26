// // Deleting data/items from the mongo db

// show dbs
// use vishiKart
// show collections

// // Function used for searching data/items/documents
// db.items.find({price: 22000})

// // Function used for deleting data/items/documents
// // Deleting items from the Mongo Database
// // 'deleteOne()' will delete the matching document entry and will delete the first entry in case of multi document match
// db.items.deleteOne({price: 22000})

// // 'deleteMany()' will delete all the matching document entries in the collection
// db.items.deleteMany({price: 129000})