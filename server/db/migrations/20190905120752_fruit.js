export async function up(knex) {
  return knex.schema.createTable('weather', (table) => {
    table.increments('id')
    table.string('name')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('weather')
}
