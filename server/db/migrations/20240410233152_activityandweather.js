/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('activity_weather', (table) => {
    table.integer('activity_id').unsigned().notNullable()
    table.string('weather_code').notNullable()
    table.foreign('activity_id').references('activities.id')
    // composite primary key to allow multiple weathers for an activity
    table.primary(['activity_id', 'weather_code'])
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('activity_weather')
}
