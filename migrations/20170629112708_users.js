
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', (table) => {
    table.increments('user_id')
    table.string('user_name')
    table.string('first_name')
    table.string('last_name')
    table.string('user_email')
    table.timestamp('user_created_at').defaultTo(knex.fn.now())
    table.string('user_title').defaultTo(null)
    table.string('user_info').defaultTo(null)
    table.integer('user_contact').defaultTo(null)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
