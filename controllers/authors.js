const knex = require("../db/knex.js");

module.exports = {

  index: function(req, res) {
      res.render("newauthor");
    },

    newAuthor: (req, res) => {
      knex('authors').insert({
        name: req.body.name,
        bio: req.body.bio
      }).then((results) => {
        res.redirect('/newbook')
      })
    }
  }
