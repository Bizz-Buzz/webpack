exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('posts', (table) => {
    table.increments('post_id')
    table.integer('user_id')
    table.timestamp('post_created_at').defaultTo(knex.fn.now())
    table.string('content').defaultTo('(No Post Content?)')
    table.integer('group_id')
    table.integer('response_count v ').defaultTo(0)
    table.boolean('is_alert').defaultTo(false)
    table.boolean('can_response').defaultTo(true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('posts')
};
