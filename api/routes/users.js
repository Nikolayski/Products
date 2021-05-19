var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId
var url = "mongodb+srv://nikolayski:Dadada1122@cluster0.g0qsv.mongodb.net/users?retryWrites=true&w=majority";


router.post('/login', function (req, res, next) {
    const { email, password } = req.body;
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db('products-db');
        dbo.collection('users').findOne({ "email": email, "password": password }, (err, userResult) => {
            if (err) throw err;
            console.log(userResult)
            if (userResult) {
                res.send('inserted')
                db.close();
            }
            else{
                res.send('error')
                db.close();
            }
        })

    })
})

router.post('/register', function (req, res, next) {
    const { email, password } = req.body;

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db('products-db');
        dbo.collection('users').findOne({ "email": email }, (err, userResult) => {
            if(err) throw err;
            if (userResult) {
                res.send('REGISTERED ALREADY!')
                db.close();
            }
            else {
                dbo.collection('users').insertOne({ email, password }, (err, result) => {
                    if (err) throw err;
                    res.send('INSERTED');
                    db.close();
                })
            }
        })

    })

})

module.exports = router;