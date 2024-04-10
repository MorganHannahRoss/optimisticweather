export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('activities').del()

  // Inserts seed entries
  await knex('activities').insert([
    { id: 1, activity: 'monopoly', weather: ['light_rain', 'overcast'] },
    {
      id: 2,
      activity: 'tennis',
      weather: ['sunny', 'mostly_sunny', 'partly_sunny'],
    },
    { id: 3, activity: 'bowling', weather: [] },
    {
      id: 4,
      activity: 'movie marathon',
      weather: ['rain', 'overcast', 'cloudy'],
    },
    { id: 5, activity: 'hiking', weather: ['sunny', 'mostly_sunny'] },
    { id: 6, activity: 'indoor rock climbing', weather: ['rain'] },
    {
      id: 7,
      activity: 'picnic',
      weather: ['sunny', 'mostly_sunny', 'partly_sunny', 'mostly_cloudy'],
    },
    {
      id: 8,
      activity: 'board games',
      weather: [
        'sunny',
        'mostly_sunny',
        'partly_sunny',
        'mostly_cloudy',
        'cloudy',
        'overcast',
      ],
    },
    { id: 9, activity: 'swimming', weather: ['sunny', 'mostly_sunny'] },
    { id: 10, activity: 'baking', weather: ['rain'] },
    {
      id: 11,
      activity: 'reading',
      weather: [
        'sunny',
        'mostly_sunny',
        'partly_sunny',
        'mostly_cloudy',
        'cloudy',
        'overcast',
      ],
    },
    {
      id: 12,
      activity: 'bike ride',
      weather: ['sunny', 'mostly_sunny', 'partly_sunny'],
    },
    { id: 13, activity: 'gardening', weather: ['sunny', 'mostly_sunny'] },
    {
      id: 14,
      activity: 'painting',
      weather: [
        'sunny',
        'mostly_sunny',
        'partly_sunny',
        'mostly_cloudy',
        'cloudy',
        'overcast',
      ],
    },
    {
      id: 15,
      activity: 'cooking',
      weather: [
        'sunny',
        'mostly_sunny',
        'partly_sunny',
        'mostly_cloudy',
        'cloudy',
        'overcast',
      ],
    },
    {
      id: 16,
      activity: 'yoga',
      weather: ['sunny', 'mostly_sunny', 'partly_sunny', 'mostly_cloudy'],
    },
    {
      id: 17,
      activity: 'bird watching',
      weather: ['sunny', 'mostly_sunny', 'partly_sunny', 'mostly_cloudy'],
    },
    {
      id: 18,
      activity: 'karaoke night',
      weather: ['overcast', 'cloudy', 'rain'],
    },
    {
      id: 19,
      activity: 'fishing',
      weather: ['sunny', 'mostly_sunny', 'partly_sunny', 'mostly_cloudy'],
    },
    {
      id: 20,
      activity: 'pottery',
      weather: [
        'sunny',
        'mostly_sunny',
        'partly_sunny',
        'mostly_cloudy',
        'cloudy',
        'overcast',
      ],
    },
    {
      id: 21,
      activity: 'camping',
      weather: ['sunny', 'mostly_sunny', 'partly_sunny'],
    },
    {
      id: 22,
      activity: 'stargazing',
      weather: ['clear_night', 'mostly_clear_night'],
    },
    {
      id: 23,
      activity: 'paintball',
      weather: ['sunny', 'mostly_sunny', 'partly_sunny', 'overcast'],
    },
    {
      id: 24,
      activity: 'volleyball',
      weather: ['sunny', 'mostly_sunny', 'partly_sunny'],
    },
    {
      id: 25,
      activity: 'skateboarding',
      weather: ['sunny', 'mostly_sunny', 'partly_sunny'],
    },
    {
      id: 26,
      activity: 'ice skating',
      weather: [
        'snow',
        'possible_snow',
        'freezing_rain',
        'possible_freezing_rain',
      ],
    },
    {
      id: 27,
      activity: 'go-karting',
      weather: ['sunny', 'mostly_sunny', 'partly_sunny', 'overcast'],
    },
    {
      id: 28,
      activity: 'kayaking',
      weather: ['sunny', 'mostly_sunny', 'partly_sunny'],
    },
    {
      id: 29,
      activity: 'writing',
      weather: [
        'sunny',
        'mostly_sunny',
        'partly_sunny',
        'mostly_cloudy',
        'cloudy',
        'overcast',
      ],
    },
    {
      id: 30,
      activity: 'sewing',
      weather: [
        'sunny',
        'mostly_sunny',
        'partly_sunny',
        'mostly_cloudy',
        'cloudy',
        'overcast',
      ],
    },
    {
      id: 31,
      activity: 'crafting',
      weather: [
        'sunny',
        'mostly_sunny',
        'partly_sunny',
        'mostly_cloudy',
        'cloudy',
        'overcast',
      ],
    },
    {
      id: 32,
      activity: 'barbecue',
      weather: ['sunny', 'mostly_sunny', 'partly_sunny', 'mostly_cloudy'],
    },
    {
      id: 33,
      activity: 'snorkeling',
      weather: ['sunny', 'mostly_sunny', 'partly_sunny'],
    },
    {
      id: 34,
      activity: 'surfing',
      weather: ['sunny', 'mostly_sunny', 'partly_sunny'],
    },
    { id: 35, activity: 'snowboarding', weather: ['snow', 'possible_snow'] },
    { id: 36, activity: 'skiing', weather: ['snow', 'possible_snow'] },
    {
      id: 37,
      activity: 'building a snowman',
      weather: ['snow', 'possible_snow'],
    },
    {
      id: 38,
      activity: 'building a sandcastle',
      weather: ['sunny', 'mostly_sunny', 'partly_sunny'],
    },
    {
      id: 39,
      activity: 'play frisbee',
      weather: ['sunny', 'mostly_sunny', 'partly_sunny'],
    },
    {
      id: 40,
      activity: 'play soccer',
      weather: ['sunny', 'mostly_sunny', 'partly_sunny'],
    },
    {
      id: 41,
      activity: 'play basketball',
      weather: ['sunny', 'mostly_sunny', 'partly_sunny'],
    },
    {
      id: 42,
      activity: 'play baseball',
      weather: ['sunny', 'mostly_sunny', 'partly_sunny'],
    },
    {
      id: 43,
      activity: 'play football',
      weather: ['sunny', 'mostly_sunny', 'partly_sunny'],
    },
    {
      id: 44,
      activity: 'play volleyball',
      weather: ['sunny', 'mostly_sunny', 'partly_sunny'],
    },
    {
      id: 45,
      activity: 'play tennis',
      weather: ['sunny', 'mostly_sunny', 'partly_sunny'],
    },
    {
      id: 46,
      activity: 'play golf',
      weather: ['sunny', 'mostly_sunny', 'partly_sunny'],
    },
    {
      id: 47,
      activity: 'play badminton',
      weather: ['sunny', 'mostly_sunny', 'partly_sunny'],
    },
    {
      id: 48,
      activity: 'play table tennis',
      weather: ['sunny', 'mostly_sunny', 'partly_sunny'],
    },
    {
      id: 49,
      activity: 'play cricket',
      weather: ['sunny', 'mostly_sunny', 'partly_sunny'],
    },
    {
      id: 50,
      activity: 'play dodgeball',
      weather: ['sunny', 'mostly_sunny', 'partly_sunny'],
    },
  ])
}

// sunny
// mostly_sunny
// partly_sunny
// mostly_cloudy
// cloudy
// overcast
// overcast_with_low_clouds
// fog
// light_rain
// rain
// psbl_rain
// rain_shower
// thunderstorm
// local_thunderstorms
// light_snow
// snow
// psbl_snow
// snow_shower
// rain_and_snow
// psbl_rain_and_snow
// rain_and_snow
// freezing_rain
// psbl_freezing_rain
// hail
