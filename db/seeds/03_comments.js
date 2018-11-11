
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {name: "Anonymous Human Being", comment: "Yo idk where i am right now", book_id: "1"},
        {name: "Bam Margera", comment: "IS THAT A SNAKE", book_id: "2"},
        {name: "Steve Carell", comment: "Can i be in the next novel?", book_id: "3"}
      ]);
    });
};
