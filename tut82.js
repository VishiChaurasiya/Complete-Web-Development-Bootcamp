// // Searching for data in mongo db :-

// use vishiKart

// // This query will return all the objects with rating equal to 3.5 
// // {rating: 3.5} is a filter object, passed as an argument to 'find()' function to search for a particular object 
// db.items.find({rating: 3.5})

// // 'gte' stands for greater than or equal to 3.5 
// db.items.find({rating: {$gte: 3.5}}) 
// // 'gt' stands for greater than
// db.items.find({rating: {$gt: 3.5}})

// // And operator by using ',' 
// db.items.find({rating: {$gt: 3.5}, price: {$gt: 4000}})
// // 'lt' stands for less than
// db.items.find({rating: {$lt: 3.5}, price: {$gt: 114000}})

// // Or operator by using '$or' and an array of filter objects which is basically operands for Or operator
// // Here, 'find()' function takes object as always
// db.items.find({$or: [{rating: {$lt: 3.5}}, {price: {$gt: 114000}}]})

// // To get only specified columns/keys of documents, set the values of the keys/columns to 1 and pass it as an object argument known as 'projection'
// // {rating: 1, qty: 1} is an object/projection argument
// db.items.find({rating: {$gt: 3.5}}, {rating: 1})
// db.items.find({rating: {$gt: 3.5}}, {rating: 1, qty: 1})