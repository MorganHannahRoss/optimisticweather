export async function up(knex) {
  return knex.schema.createTable('activities', (table) => {
    table.increments('id')
    table.string('activity')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('activities')
}
