// var express = require('express');
// var router = express.Router();
// var MongoClient = require('mongodb').MongoClient;
// var ObjectId = require('mongodb').ObjectId
// var url = "mongodb+srv://nikolayski:Dadada1122@cluster0.g0qsv.mongodb.net/pets?retryWrites=true&w=majority";

// router.get('/', function (req, res, next) {
//     MongoClient.connect(url, function (err, db) {
//         if (err) throw err;
       
//         var dbo = db.db("pets-db");
//         dbo.collection('pets').find({}).toArray((err, obj) => {
//             if (err) throw err;
//             res.send(obj)
//             db.close();
//         })
//     })
// })

// router.get('/:id', function (req, res, next) {
//     MongoClient.connect(url, function (err, db) {
//         if (err) throw err;
//         var dbo = db.db("pets-db");
//         dbo.collection('pets').findOne({ "_id": new ObjectId(req.params.id) }, (err, result) => {
//             if (err) throw err;
//             res.send(result);
//             db.close()
//         })
//     })

// })

// router.post('/', function (req, res, next) {
//     MongoClient.connect(url, function (err, db) {
//         if (err) throw err;
//         var dbo = db.db("pets-db");
//         const { breed, name, image } = req.body;
//         var animal = {
//             breed,
//             name,
//             image
//         }
//         dbo.collection('pets').insertOne(animal, (err, res) => {
//             if (err) throw err;
//             db.close();
//         })
//     })
//     res.send('POSTED!')
// })

// router.put('/', function (req, res, next) {
//     MongoClient.connect(url, function (err, db) {
//         if (err) throw err;
//         var dbo = db.db('pets-db');
//         const { breed, name, image } = req.body;
//         var newValues = {
//             $set: {
//                 breed,
//                 name,
//                 image
//             }
//         }
//         dbo.collection('pets').updateOne({ "_id": new ObjectId(req.body.id) }, newValues, (err, res) => {
//             if (err) throw err;
//             db.close()
//         })
//     })
//     res.send('PUTTED!')
// })


// router.delete('/:id', function(req,res,next){
//     MongoClient.connect(url,function(err,db){
//         if(err) throw err;
//         var dbo = db.db('pets-db');
//         dbo.collection('pets').deleteOne({"_id": ObjectId(req.params.id)}, (err, obj) => {
//             if(err) throw err;
//             console.log('DELETED!');
//             db.close();
//         })
//     })
//     res.send('DELETED!')
// })

// module.exports = router;



