const db = require("../models")

module.exports = {
    findAllSaved: (req, res) => {
        db.Books
            .find()
            .then(function (result) {
                res.json(result)
            })
            .catch(err => res.status(422).json(err));
    },

    create: (req, res) => {
        db.Books
            .create({
                title: req.body.title,
                link: req.body.link,
                thumbnail: req.body.thumbnail,
                author: req.body.author,
                description: req.body.description,
                key: req.body.key
            })
            .then(res.end())
    },
    remove: (req, res) => {
        db.Books
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}