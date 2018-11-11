
exports.up = function(knex, Promise) {
  return knex.schema.createTable("comments", (table) =>{
    table.string("name");
    table.text("comment");
    table.integer("book_id")
    .references('id', 'books')
    .inTable("books")
    .onDelete("CASCADE");
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable("comments")
};
