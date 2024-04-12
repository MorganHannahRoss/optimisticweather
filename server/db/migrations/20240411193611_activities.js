/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = (knex) => {
  return knex.schema.createTable('activities', (table) => {
    table.increments('activity_id')
    table.string('name')
    table.string('weather')
    table.string('type')
    table.string('optionaldetails')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = (knex) => {
  return knex.schema.dropTable('activities')
}
