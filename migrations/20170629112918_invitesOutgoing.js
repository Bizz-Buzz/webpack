exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('invitesOutgoing', (table) => {
    table.increments('outgoing_invite_id')
    table.integer('group_id')
    table.integer('user_id')
    table.string('invite_conent')
    table.timestamp('invite_sent_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('invitesOutgoing')
};
