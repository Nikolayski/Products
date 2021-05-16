var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId
var url = "mongodb+srv://nikolayski:Dadada1122@cluster0.g0qsv.mongodb.net/products?retryWrites=true&w=majority";

router.post('/',function(req,res,next){
    const {email, description} = req.body;
    MongoClient.connect(url, function(err, db){
        if(err) throw err;
        var dbo = db.db('products-db');
        var contact = {
            email,
            description
        }
        dbo.collection('contacts').insertOne(contact,(err, obj) => {
            if(err) throw err;
            res.send('Done');
            db.close();
        })
    })
})

module.exports = router;
