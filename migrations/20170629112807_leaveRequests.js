exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('leaveRequests', (table) => {
    table.increments('request_id')
    table.integer('user_id')
    table.integer('group_id')
    table.boolean('is_sick_leave').defaultTo(true)
    table.boolean('is_paid_leave').defaultTo(false)
    table.string('leave_start_date').defaultTo(null)
    table.integer('leave_days').defaultTo(1)
    table.string('leave_reason').defaultTo('No reason given')
    table.boolean('is_pinned').defaultTo(false)
    table.timestamp('request_created_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('leaveRequests')
};
