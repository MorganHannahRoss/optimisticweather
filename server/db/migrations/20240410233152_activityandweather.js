// export async function up(knex) {
//   return knex.schema.createTable('activities', (table) => {
//     table.increments('id')
//     table.string('activity')
//     table.string('weather')
//   })
// }

// export async function down(knex) {
//   return knex.schema.dropTable('activities')
// }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('activity_weather', (table) => {
    table.integer('activity_id').unsigned().notNullable()
    table.string('weather_code').notNullable()
    table.foreign('activity_id').references('activities.id')
    // Composite primary key to allow multiple weathers for an activity
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
