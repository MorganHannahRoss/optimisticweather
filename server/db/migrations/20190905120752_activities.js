export async function up(knex) {
  return knex.schema.createTable('activities', (table) => {
    table.increments('id')
    table.string('activity')
    table.string('weather')
    
  })
}

export async function down(knex) {
  return knex.schema.dropTable('activities')
}
