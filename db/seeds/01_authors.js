
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('authors').insert([
        {name: "Jhonny Knoxville", bio: "HI MY NAME IS JHONNY KNOXVILLE AND WELCOME TO JACKASS"},
        {name: "Lucas Romero", bio: "Gotta go get these squats done asap"},
        {name: "Zack G", bio: "This is the right chair? This is the right Chair? Okay."}
      ]);
    });
};
