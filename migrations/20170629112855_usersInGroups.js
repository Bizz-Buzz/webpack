exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('memberships', (table) => {
    table.increments('membership_id')
    table.integer('group_id')
    table.integer('user_id')
    table.boolean('can_post').defaultTo(false)
    table.boolean('can_invite').defaultTo(false)
    table.boolean('can_create').defaultTo(true)
    table.boolean('is_admin').defaultTo(false)
    table.timestamp('member_since').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('memberships')
};
