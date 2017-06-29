exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('messages', (table) => {
    table.increments('message_id')
    table.string('message_content')
    table.integer('from_user')
    table.integer('to_user')
    table.boolean('message_seen').defaultTo('false')
    table.timestamp('message_created_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('messages')
};
