
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('eventComments', (table) => {
    table.increments('event_comment_id')
    table.integer('event_id')
    table.integer('user_id')
    table.string('comment_content')
    table.timestamp('comment_created_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('eventComments')
};
