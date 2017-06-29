
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('postComments', (table) => {
    table.increments('post_comment_id')
    table.integer('post_id')
    table.integer('user_id')
    table.string('comment_content')
    table.timestamp('post_comment_created_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('postComments')
};
