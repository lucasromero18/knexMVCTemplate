
exports.up = function(knex, Promise) {
  return knex.schema.createTable("authors", (table) =>{
      table.increments();
      table.string("name");
      table.text("bio");
      table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("authors")
};
