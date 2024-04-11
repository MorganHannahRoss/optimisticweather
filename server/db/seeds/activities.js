/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('activities').del()
  await knex('activities').insert([
    {activity_id: 1, name: 'Fishing 🎣', weather: 'cloudy', type: 'half day or longer', optionaldetails: 'Spend a relaxing day out by the lake fishing.'},
    {activity_id: 2, name: 'Hiking ⛰️', weather: 'sunny', type: 'full day', optionaldetails: 'Make sure to tell someone you are going for a hike!'},
    {activity_id: 3, name: 'Go see a movie 🍿', weather: 'rain', type: 'short', optionaldetails: 'Take a look at whats showing at your local cinema.'},
    {activity_id: 4, name: 'Beach 🏖️', weather: 'sunny', type: 'half day or longer', optionaldetails: 'Wear sunscreen.'},
    {activity_id: 5, name: 'Code 🖥️', weather: 'cloudy', type: 'multi day', optionaldetails: 'Careful you dont hurt yourself.'}
  ]);
};