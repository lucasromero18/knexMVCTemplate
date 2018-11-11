
exports.up = function(knex, Promise) {
  return knex.schema.createTable("books", (table) => {
    table.increments();
    table.string("name");
    table.text("description");
    table.text("img_url");
    table.integer("author_id")
          .notNullable()
          .references("id", "authors")
          .inTable("authors")
          .onDelete("CASCADE");
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable("books")
};
