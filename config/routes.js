//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js")
const authors = require("../controllers/authors.js")
module.exports = function(app){

//Books
  app.get('/', index.index);
  app.get("/newbook", index.newBook);
  app.post("/newbook", index.addBook);


//authors
app.get('/authors', authors.index);
app.post('/authors', authors.newAuthor);


//individual
app.get('/individual/:id', index.individualBook);
}
