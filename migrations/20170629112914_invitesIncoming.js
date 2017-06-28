
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('invitesIncoming', (table) => {
    table.increments('incoming_invite_id')
    table.integer('group_id')
    table.integer('user_id')
    table.string('invite_content')
    table.timestamp('invite_received_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('invitesIncoming')
};
