
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('groups', (table) => {
    table.increments('group_id')
    table.string('group_name')
    table.integer('member_count').defaultTo(1)
    table.timestamp('group_created_at').defaultTo(knex.fn.now())
    table.integer('parent_group_id').defaultTo(null)
    table.integer('owner_id').defaultTo(1)
    table.string('group_description').defaultTo('')
    table.boolean('is_invite_only').defaultTo(false)
    table.boolean('are_members_visbile').defaultTo(false)
    table.boolean('can_post_default').defaultTo(true)
    table.boolean('can_invite_default').defaultTo(true)
    table.boolean('can_create_default').defaultTo(true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('groups')
};
