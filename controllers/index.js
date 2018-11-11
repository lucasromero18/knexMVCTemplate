const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION

  index: function(req, res) {
    knex('books').select().then((results) => {
      res.render("index", {books: results});
    })
  },
  newBook: (req, res) => {
    knex('authors').select().then((results) => {
      res.render("newbook", {authors:results});
    })
  },
addBook: (req, res) => {
  knex('books').insert(req.body).then((results) => {
    res.redirect("/")
  })
},

individualBook: (req, res) => {
  knex('books').select().where('id', req.params.id).then((results) =>{
    res.render('individual', {book:results[0]});
  })
}

}
