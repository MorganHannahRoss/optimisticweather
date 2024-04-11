export async function seed(knex) {
  try {
    // deletes ALL existing entries
    await knex('sqlite_sequence').del()
    await knex('activity_weather').del()
    await knex('activities').del()

    //  seed data for activities
    const activities = [
      { activity: 'monopoly' },
      { activity: 'tennis' },
      { activity: 'bowling' },
      { activity: 'movie marathon' },
      { activity: 'hiking' },
      { activity: 'indoor rock climbing' },
      { activity: 'picnic' },
      { activity: 'board games' },
      { activity: 'swimming' },
      { activity: 'baking' },
      { activity: 'reading' },
      { activity: 'bike ride' },
      { activity: 'gardening' },
      { activity: 'painting' },
      { activity: 'cooking' },
      { activity: 'yoga' },
      { activity: 'bird watching' },
      { activity: 'karaoke night' },
      { activity: 'fishing' },
      { activity: 'pottery' },
      { activity: 'camping' },
      { activity: 'stargazing' },
      { activity: 'paintball' },
      { activity: 'volleyball' },
      { activity: 'skateboarding' },
      { activity: 'ice skating' },
      { activity: 'go-karting' },
      { activity: 'kayaking' },
      { activity: 'writing' },
      { activity: 'sewing' },
      { activity: 'crafting' },
      { activity: 'barbecue' },
      { activity: 'snorkeling' },
      { activity: 'surfing' },
      { activity: 'snowboarding' },
      { activity: 'skiing' },
      { activity: 'building a snowman' },
      { activity: 'building a sandcastle' },
      { activity: 'play frisbee' },
      { activity: 'play soccer' },
      { activity: 'play basketball' },
      { activity: 'play baseball' },
      { activity: 'play football' },
      { activity: 'play volleyball' },
      { activity: 'play tennis' },
      { activity: 'play golf' },
      { activity: 'play badminton' },
      { activity: 'play table tennis' },
      { activity: 'play cricket' },
      { activity: 'play dodgeball' },
    ]

    // appoint activities an ids
    const activityIds = (
      await knex('activities').insert(activities).returning('id')
    ).map((activity) => activity.id)

    console.log(activityIds[0])

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
