exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('events', (table) => {
    table.increments('event_id')
    table.integer('user_id')
    table.integer('group_id')
    table.string('event_title')
    table.string('event_date')
    table.string('event_time')
    table.timestamp('event_created_at').defaultTo(knex.fn.now())
    table.string('event_info').defaultTo('')
    table.integer('response_count').defaultTo(0)
    table.integer('comment_count').defaultTo(0)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('events')
};
