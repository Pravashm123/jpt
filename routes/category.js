var express = require('express');
var Category = require('../models/category');
var router = express.Router();


// Root path of course

router.route('/')
    .get( (req, res, next) => {
        Category.find({})
            .populate('products')
            .then((category) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(category);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Category.create(req.body)
            .then((category) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(category);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported!');
    })
    .delete( (req, res, next) => {
        Category.deleteMany({})
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });


// Category by id route

router.route('/:id')
    .get( (req, res, next) => {
        Category.findById(req.params.id)
            .populate('products')
            .then((category) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(category);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end("POST operation not supported!");
    })
    .put( (req, res, next) => {
        Category.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true, useFindAndModify: false })
            .then((category) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(category);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete( (req, res, next) => {
        Category.findByIdAndDelete(req.params.id)
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });



// This is route to store products in a category in the list array

router.route('/:id/:id2')

    .get((req, res, next) => {

      res.statusCode = 403;
      res.end("GET operation not supported!");
    })

    .post((req, res, next) => {
        Category.findByIdAndUpdate(req.params.id, {$push: { "products": req.params.id2 }})
        .then((category) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(category);
        }, (err) => next(err))
        .catch((err) => next(err));
    })

    .put( (req, res, next) => {
      res.statusCode = 403;
      res.end("PUT operation not supported!");
    })

    .delete( (req, res, next) => {
        Category.findByIdAndUpdate(req.params.id, {$pull: { "products": req.params.id2 }})
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });


    module.exports = router;