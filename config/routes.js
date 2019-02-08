const users = require("../controllers/users.js")
const situations = require("../controllers/situations.js")
const comments = require("../controllers/comments.js")
const login_register = require("../controllers/login_register.js")
const categories = require("../controllers/categories.js")
const solution_rating = require("../controllers/solution_rating.js")



module.exports = (app) => {

    //USERS
    app.get('/users', users.getAllUsers);
    app.patch('/users/:id', users.editUser);
    app.delete('user/delete/:id', users.deleteUser);

    //SITUATIONS
    app.get('/situations', situations.getAllSituations);
    app.post('/situations/addSituation', situations.addSituation);
    app.patch('/situations/editSituation/:id', situations.editSituation);
    app.delete('/situations/deleteSituation/:id', situations.deleteSituation);


    //COMMENTS
    app.get('/comments', comments.getAllComments);
    app.post('/comments/addComment', comments.addComment);
    app.patch('/comments/editComment/:id', comments.editComment);
    app.delete('/comments/delete/:id', comments.deleteComment)


    //LOGIN_REGISTER
    app.post('/login', login_register.login);
    app.get('/register', login_register.register);



    //CATEGORIES
    app.get('/categories', categories.getAllCategories);


    //SOLUTION_RATING
    app.get('/solutionRating', solution_rating.getAllSolutions);

}
