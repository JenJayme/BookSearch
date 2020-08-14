const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Book.find()
            .then(function (result) {res.json(result)})
            .catch(err => res.status(422).json(err));
    },
    findById: (req,res) =>{
        db.Book.findById(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.status(422).json(err));

    },
    create: (req, res) => {
        db.Book
            .create({
                title: req.body.title,
                link: req.body.link,
                thumbnail: req.body.thumbnail,
                author: req.body.author,
                description: req.body.description,
                key: req.body.key
            })
            .then(result => res.json(result))
    },
    remove: (req, res) => {
        db.Book
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: (req,res) => {
        db.Book.findOneAndUpdate({_id:req.params.id},req.body)
        .then(results => res.json(results))
        .catch(err => res.status(422).json(err));

    }
}