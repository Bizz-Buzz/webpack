
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('hashes', (table) => {
    table.increments('hash_id')
    table.integer('user_id')
    table.string('hash')
    table.boolean('is_confirmed').defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('hashes')
};
