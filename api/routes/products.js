var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId
var url = "mongodb+srv://nikolayski:Dadada1122@cluster0.g0qsv.mongodb.net/products?retryWrites=true&w=majority";

router.get('/', function (req, res, next) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db('products-db');
        dbo.collection('products').find({}).toArray((err, obj) => {
            if (err) throw err;
            res.send(obj);
            db.close();
        })
    })
})

router.get('/:id', function (req, res, next) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db('products-db');
        dbo.collection('products').findOne({ "_id": new ObjectId(req.params.id) }, (err, obj) => {
            if (err) throw err;
            res.send(obj);
            db.close();
        })
    })
})


router.get('/collections/:type', function(req, res, next){
    let type = req.params.type;
    MongoClient.connect(url, function(err, db){
        if(err) throw err;
        var dbo = db.db('products-db');
        dbo.collection('products').find({"theme": type}).toArray(function(err, arr) {
            if(err) throw err;
            res.send(arr);
            db.close();
        })
    })
})

router.get('/myProducts/:email', function(req, res, next){
   let email = req.params.email;
    MongoClient.connect(url, function(err, db){
        if(err) throw err;
        var dbo = db.db('products-db');
        dbo.collection('products').find({"userEmail": email}).toArray(function(err, arr){
            if(err) throw err;
            console.log(arr)
             res.send(arr)
             db.close();
        })
    })
})

router.post('/', function (req, res, next) {

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db('products-db');
        const { theme, model, image, description, price, userEmail } = req.body;
        var product = {
            theme,
            model,
            image,
            description,
            price,
            userEmail
        }

        dbo.collection('products').insertOne(product, (err, res) => {
            if (err) throw err;
            db.close();
        })
        dbo.collection('users').updateOne({"email": userEmail}, {$push: {productList: {productId: ObjectId(product._id)}}}, (err, res) => {
            if(err) throw err;
            db.close();
        })
    })

    res.send('DONE!');
})

router.put('/', function (req, res, next) {
    const { id, model, image, description, price } = req.body;
    var newValues = {$set:{
        model,
        image,
        description,
        price
    }}
    MongoClient.connect(url, function(err, db){
        if(err) throw err;
        var dbo = db.db('products-db');
        dbo.collection('products').updateOne({"_id": new ObjectId(id)}, newValues, (err, obj) =>{
            if(err) throw err;
            db.close();
        })
    })

    res.send('Updated!')
})


router.delete('/:id', function (req, res, next) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db('products-db');
        dbo.collection('products').deleteOne({ "_id": new ObjectId(req.params.id) }, (err, obj) => {
            if (err) throw err;
            db.close();
        })
    })
    res.send('DELETED!')
})

module.exports = router;