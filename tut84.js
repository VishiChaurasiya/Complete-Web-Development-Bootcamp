// // Updating data/documents in mongo db

// show dbs
// use vishiKart
// show collections

// db.items.find()

// // 'updateOne()' will update the first matching document entry and it takes first argument as a filter object and second argument is an object containing new data to be set
// db.items.updateOne({name: "Moto 30s"}, {$set: {price: 2}})

// // 'updateMany()' will update all the matching document entries
// db.items.updateMany({name: "Moto 30s"}, {$set: {price: 3, rating: 1}})