export async function seed(knex) {
  try {
    // deletes ALL existing entries
    await knex('activity_weather_associations').del()
    await knex('activities').del()

    //  seed data for activities
    const activities = [
      { activity_name: 'monopoly' },
      { activity_name: 'tennis' },
      { activity_name: 'bowling' },
      { activity_name: 'movie marathon' },
      { activity_name: 'hiking' },
      { activity_name: 'indoor rock climbing' },
      { activity_name: 'picnic' },
      { activity_name: 'board games' },
      { activity_name: 'swimming' },
      { activity_name: 'baking' },
      { activity_name: 'reading' },
      { activity_name: 'bike ride' },
      { activity_name: 'gardening' },
      { activity_name: 'painting' },
      { activity_name: 'cooking' },
      { activity_name: 'yoga' },
      { activity_name: 'bird watching' },
      { activity_name: 'karaoke night' },
      { activity_name: 'fishing' },
      { activity_name: 'pottery' },
      { activity_name: 'camping' },
      { activity_name: 'stargazing' },
      { activity_name: 'paintball' },
      { activity_name: 'volleyball' },
      { activity_name: 'skateboarding' },
      { activity_name: 'ice skating' },
      { activity_name: 'go-karting' },
      { activity_name: 'kayaking' },
      { activity_name: 'writing' },
      { activity_name: 'sewing' },
      { activity_name: 'crafting' },
      { activity_name: 'barbecue' },
      { activity_name: 'snorkeling' },
      { activity_name: 'surfing' },
      { activity_name: 'snowboarding' },
      { activity_name: 'skiing' },
      { activity_name: 'building a snowman' },
      { activity_name: 'building a sandcastle' },
      { activity_name: 'play frisbee' },
      { activity_name: 'play soccer' },
      { activity_name: 'play basketball' },
      { activity_name: 'play baseball' },
      { activity_name: 'play football' },
      { activity_name: 'play volleyball' },
      { activity_name: 'play tennis' },
      { activity_name: 'play golf' },
      { activity_name: 'play badminton' },
      { activity_name: 'play table tennis' },
      { activity_name: 'play cricket' },
      { activity_name: 'play dodgeball' },
    ]

    // insert activities and appoint them an ids
    const activityIds = await knex('activities')
      .insert(activities)
      .returning('activity_id')

    // define weather for each activity
    const activityWeather = [
      { activity_id: activityIds[0], weather_code: 'light_rain' },
      { activity_id: activityIds[0], weather_code: 'overcast' },
      { activity_id: activityIds[1], weather_code: 'sunny' },
      { activity_id: activityIds[1], weather_code: 'mostly_sunny' },
      { activity_id: activityIds[1], weather_code: 'partly_sunny' },
      { activity_id: activityIds[2], weather_code: 'overcast' },
      { activity_id: activityIds[3], weather_code: 'rain' },
      { activity_id: activityIds[3], weather_code: 'cloudy' },
      { activity_id: activityIds[4], weather_code: 'sunny' },
      { activity_id: activityIds[4], weather_code: 'mostly_sunny' },
      { activity_id: activityIds[5], weather_code: 'rain' },
      { activity_id: activityIds[5], weather_code: 'rain_shower' },
      { activity_id: activityIds[6], weather_code: 'sunny' },
      { activity_id: activityIds[6], weather_code: 'mostly_sunny' },
      { activity_id: activityIds[6], weather_code: 'partly_sunny' },
      { activity_id: activityIds[6], weather_code: 'mostly_cloudy' },
      { activity_id: activityIds[7], weather_code: 'sunny' },
      { activity_id: activityIds[7], weather_code: 'mostly_sunny' },
      { activity_id: activityIds[7], weather_code: 'partly_sunny' },
      { activity_id: activityIds[7], weather_code: 'mostly_cloudy' },
      { activity_id: activityIds[7], weather_code: 'cloudy' },
      { activity_id: activityIds[7], weather_code: 'overcast' },
    ]

    // insert activity_weather
    await knex('activity_weather').insert(activityWeather)
  } catch (error) {
    console.error('Error seeding data:', error)
    throw error
  }
}
