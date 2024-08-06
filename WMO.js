const weatherCodes = {
  0: {
    description: "Clear sky",
    day :{
      img: "https://img.freepik.com/free-photo/white-cloud-blue-sky_1203-9447.jpg?t=st=1722610306~exp=1722613906~hmac=181856251721202b0e80de4a071cbc382966977119d0916585b67fcdee5e15ac&w=1060",
      icon: "icons/sun256.png"
    },
    night :{
      img: "https://www.shutterstock.com/image-photo/city-landscape-nigh-sky-filled-600nw-300803561.jpg",
      icon: "icons/moon.png"
    }
  },
  1: {
    description: "Mainly clear",
    day:{
      img: "https://img.freepik.com/free-photo/photorealistic-style-clouds-city_23-2151058808.jpg?t=st=1722622239~exp=1722625839~hmac=dca28f7a047e819450ac9b58ea1861f9233267be4fbb0c23c68c435ccc86379e&w=740",
      icon: "icons/mainlyClear.png"
    },
    night:{
      img: "https://img.freepik.com/free-photo/photorealistic-moon-with-abstract-landscape_23-2151158685.jpg?t=st=1722622273~exp=1722625873~hmac=027cae92c72c4490397b33c8a216f7e7052edbb245c150637b473a40741dc0bc&w=360",
      icon: "icons/mainlyClearNight.png"
    }
  },
  2: {
    description: "Partly cloudy",
    day:{
      img: "https://img.freepik.com/free-photo/beautiful-clouds-scenery_23-2151604600.jpg?t=st=1722622360~exp=1722625960~hmac=cdd7d6e58fa2d7c89814d724196c0dbc1bcd4708c844247dfc93f6ee6b7a48a9&w=1380",
      icon: "icons/cloudy-day.png"
    },
    night:{
      img: "https://img.freepik.com/free-photo/sunset-sky-pink-light-with-beautiful-clouds_1150-25558.jpg?t=st=1722626425~exp=1722630025~hmac=d102bf66cce19a905b11c88dfa3f16581178e80c88a0d9eecb79771552b54718&w=1060",
      icon: "icons/cloudy-night.png"
    }
  },
  3: {
    description: "Overcast",
    day:{
      img: "https://alevelweatherandclimate.weebly.com/uploads/5/8/0/4/58043151/4828069_orig.jpg",
      icon: "icons/overcastDay.png"
    },
    night:{
      img: "https://alevelweatherandclimate.weebly.com/uploads/5/8/0/4/58043151/4828069_orig.jpg",
      icon: "icons/overcastNight.png"
    }
  },
  45: {
    description: "Fog",
    day:{
      img: "https://img.freepik.com/free-photo/beautiful-cloudscape_23-2151604620.jpg?t=st=1722623611~exp=1722627211~hmac=90abfdc4f81de7bfb6f2063373ae8d09f3128fa24cc2556b19cec3f27e6e3da8&w=360",
      icon: "icons/fog.png"
    },
    night:{
      img: "https://img.freepik.com/free-photo/beautiful-cloudscape_23-2151604620.jpg?t=st=1722623611~exp=1722627211~hmac=90abfdc4f81de7bfb6f2063373ae8d09f3128fa24cc2556b19cec3f27e6e3da8&w=360",
      icon: "icons/fog.png"
    }
  },
  48: {
    description: "Depositing rime fog",
    day:{
      img: "https://qph.cf2.quoracdn.net/main-qimg-90d2590b2f31ee7c7482c9b2f599429e-lq",
      icon: "icons/rimeFog.png"
    },
    night:{
      img: "https://qph.cf2.quoracdn.net/main-qimg-90d2590b2f31ee7c7482c9b2f599429e-lq",
      icon: "icons/rimeFog.png"
    }
  },
  51: {
    description: "Light drizzle",
    day:{
      img:"https://church.mt/files/article/gabriele-diwald-201135.151550651396.jpg",
      icon: "icons/lightdrizzle.png"
    },
    night:{
      img:"https://church.mt/files/article/gabriele-diwald-201135.151550651396.jpg",
      icon: "icons/lightdrizzle.png"
    }
  },
  53: {
    description: "Moderate drizzle",
    day:{
      img: "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.jpg?s=612x612&w=0&k=20&c=2KhHJguvlQvd83c-CJeOiuEKI323gbtSIf1n2sNdXJc=",
      icon: "icons/moderatedrizzle.png"
    },
    night:{
      img: "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.jpg?s=612x612&w=0&k=20&c=2KhHJguvlQvd83c-CJeOiuEKI323gbtSIf1n2sNdXJc=",
      icon: "icons/moderatedrizzle.png"
    }
  },
  55: {
    description: "Dense drizzle",
    day:{
      img: "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.jpg?s=612x612&w=0&k=20&c=2KhHJguvlQvd83c-CJeOiuEKI323gbtSIf1n2sNdXJc=",
      icon: "icons/densedrizzle.png"
    },
    night:{
      img: "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.jpg?s=612x612&w=0&k=20&c=2KhHJguvlQvd83c-CJeOiuEKI323gbtSIf1n2sNdXJc=",
      icon: "icons/densedrizzle.png"
    }
  },
  56: {
    description: "Light freezing drizzle",
    day:{
      img: "https://img.freepik.com/free-photo/closeup-shot-beautiful-frost-snowflakes-texture-glass_181624-2511.jpg?t=st=1722624070~exp=1722627670~hmac=073da71640abc862ac731f7fcdb6536801ee257dfed4fd9ad2a5a00d4bb237ad&w=360",
      icon: "icons/freezing-rain.png"
    },
    night:{
      img: "https://img.freepik.com/free-photo/closeup-shot-beautiful-frost-snowflakes-texture-glass_181624-2511.jpg?t=st=1722624070~exp=1722627670~hmac=073da71640abc862ac731f7fcdb6536801ee257dfed4fd9ad2a5a00d4bb237ad&w=360",
      icon: "icons/freezing-rain.png"
    }
  },
  57: {
    description: "Dense freezing drizzle",
    day:{
      img: "https://img.freepik.com/free-photo/closeup-shot-beautiful-frost-snowflakes-texture-glass_181624-2511.jpg?t=st=1722624070~exp=1722627670~hmac=073da71640abc862ac731f7fcdb6536801ee257dfed4fd9ad2a5a00d4bb237ad&w=360",
      icon: "icons/freezing-rain.png"
    },
    night:{
      img: "https://img.freepik.com/free-photo/closeup-shot-beautiful-frost-snowflakes-texture-glass_181624-2511.jpg?t=st=1722624070~exp=1722627670~hmac=073da71640abc862ac731f7fcdb6536801ee257dfed4fd9ad2a5a00d4bb237ad&w=360",
      icon: "icons/freezing-rain.png"
    }
  },
  61: {
    description: "Slight rain",
    day:{
      img: "https://s7d2.scene7.com/is/image/TWCNews/showers_jpg_jpg",
      icon: "icons/slightrainDay.png"
    },
    night:{
      img: "https://s7d2.scene7.com/is/image/TWCNews/showers_jpg_jpg",
      icon: "icons/slightrainNight.png"
    }
  },
  63: {
    description: "Moderate rain",
    day:{
      img: "https://d53bpfpeyyyn7.cloudfront.net/Pictures/2000xAny/0/3/4/3072034_rainystreet_356270.jpg",
      icon: "icons/moderaterain.png"
    },
    night:{
      img: "https://d53bpfpeyyyn7.cloudfront.net/Pictures/2000xAny/0/3/4/3072034_rainystreet_356270.jpg",
      icon: "icons/moderaterain.png"
    }
  },
  65: {
    description: "Heavy rain",
    day:{
      img: "https://s7d2.scene7.com/is/image/TWCNews/1031_nc_rainy_weather_4",
      icon: "icons/rain.png"
    },
    night:{
      img: "https://s7d2.scene7.com/is/image/TWCNews/1031_nc_rainy_weather_4",
      icon: "icons/rain.png"
    }
  },
  66: {
    description: "Light freezing rain",
    day:{
      img: "https://img.freepik.com/free-photo/closeup-shot-beautiful-frost-snowflakes-texture-glass_181624-2511.jpg?t=st=1722624070~exp=1722627670~hmac=073da71640abc862ac731f7fcdb6536801ee257dfed4fd9ad2a5a00d4bb237ad&w=360",
      icon: "icons/freezing-rain.png"
    },
    night:{
      img: "https://img.freepik.com/free-photo/closeup-shot-beautiful-frost-snowflakes-texture-glass_181624-2511.jpg?t=st=1722624070~exp=1722627670~hmac=073da71640abc862ac731f7fcdb6536801ee257dfed4fd9ad2a5a00d4bb237ad&w=360",
      icon: "icons/freezing-rain.png"
    }
  },
  67: {
    description: "Heavy freezing rain",
    day:{
      img: "https://img.freepik.com/free-photo/closeup-shot-beautiful-frost-snowflakes-texture-glass_181624-2511.jpg?t=st=1722624070~exp=1722627670~hmac=073da71640abc862ac731f7fcdb6536801ee257dfed4fd9ad2a5a00d4bb237ad&w=360",
      icon: "icons/freezing-rain.png"
    },
    night:{
      img: "https://img.freepik.com/free-photo/closeup-shot-beautiful-frost-snowflakes-texture-glass_181624-2511.jpg?t=st=1722624070~exp=1722627670~hmac=073da71640abc862ac731f7fcdb6536801ee257dfed4fd9ad2a5a00d4bb237ad&w=360",
      icon: "icons/freezing-rain.png"
    }
  },
  71: {
    description: "Slight snow fall",
    day:{
      img: "https://img.freepik.com/free-photo/3d-winter-tree-landscape_1048-17421.jpg?t=st=1722624382~exp=1722627982~hmac=67573aa0719b6dd49d864044859409585207cb9edb2d60fe76d5ae8aba3983bd&w=900",
      icon: "icons/snow.png"
    },
    night:{
      img: "https://img.freepik.com/free-photo/3d-winter-tree-landscape_1048-17421.jpg?t=st=1722624382~exp=1722627982~hmac=67573aa0719b6dd49d864044859409585207cb9edb2d60fe76d5ae8aba3983bd&w=900",
      icon: "icons/snow.png"
    }
  },
  73: {
    description: "Moderate snow fall",
    day:{
      img: "https://img.freepik.com/free-photo/3d-winter-tree-landscape_1048-17421.jpg?t=st=1722624382~exp=1722627982~hmac=67573aa0719b6dd49d864044859409585207cb9edb2d60fe76d5ae8aba3983bd&w=900",
      icon: "icons/snow.png"
    },
    night:{
      img: "https://img.freepik.com/free-photo/3d-winter-tree-landscape_1048-17421.jpg?t=st=1722624382~exp=1722627982~hmac=67573aa0719b6dd49d864044859409585207cb9edb2d60fe76d5ae8aba3983bd&w=900",
      icon: "icons/snow.png"
    }
  },
  75: {
    description: "Heavy snow fall",
    day:{
      img: "https://nsidc.org/sites/default/files/images/After%20a%20snow%20storm%2C%20the%20sun%20emerged%20revealing%20this%20beautiful%20scene%20on%20Cedar%20River%20Road%20west%20of%20Mount%20Vernon%2C%20IA..jpg",
      icon: "icons/snow.png"
    },
    night:{
      img: "https://nsidc.org/sites/default/files/images/After%20a%20snow%20storm%2C%20the%20sun%20emerged%20revealing%20this%20beautiful%20scene%20on%20Cedar%20River%20Road%20west%20of%20Mount%20Vernon%2C%20IA..jpg",
      icon: "icons/snow.png"
    }
  },
  77: {
    description: "Snow grains",
    day:{
      img: "https://img.freepik.com/free-photo/pure-white-snow-surface_181624-8715.jpg?t=st=1722624515~exp=1722628115~hmac=6645321445ce303d5de51e62b52d090fe2b8bfadfb98f1b6265fe1edd9e47f3c&w=1060",
      icon: "icons/snowgrain.png"
    },
    night:{
      img: "https://img.freepik.com/free-photo/pure-white-snow-surface_181624-8715.jpg?t=st=1722624515~exp=1722628115~hmac=6645321445ce303d5de51e62b52d090fe2b8bfadfb98f1b6265fe1edd9e47f3c&w=1060",
      icon: "icons/snowgrain.png"
    }
  },
  80: {
    description: "Slight rain showers",
    day:{
      img: "https://s7d2.scene7.com/is/image/TWCNews/showers_jpg_jpg",
      icon: "icons/rain.png"
    },
    night:{
      img: "https://s7d2.scene7.com/is/image/TWCNews/showers_jpg_jpg",
      icon: "icons/rain.png"
    }
  },
  81: {
    description: "Moderate rain showers",
    day:{
      img: "https://d53bpfpeyyyn7.cloudfront.net/Pictures/2000xAny/0/3/4/3072034_rainystreet_356270.jpg",
      icon: "icons/rain.png"
    },
    night:{
      img: "https://d53bpfpeyyyn7.cloudfront.net/Pictures/2000xAny/0/3/4/3072034_rainystreet_356270.jpg",
      icon: "icons/rain.png"
    }
  },
  82: {
    description: "Violent rain showers",
    day:{
      img: "https://s7d2.scene7.com/is/image/TWCNews/1031_nc_rainy_weather_4",
      icon: "icons/rain.png"
    },
    night:{
      img: "https://s7d2.scene7.com/is/image/TWCNews/1031_nc_rainy_weather_4",
      icon: "icons/rain.png"
    }
  },
  85: {
    description: "Slight snow showers",
    day:{
      img: "https://cdni.iconscout.com/illustration/premium/thumb/snow-park-3642170-3040972.png?f=webp",
      icon: "icons/snowshower.png"
    },
    night:{
      img: "https://cdni.iconscout.com/illustration/premium/thumb/snow-park-3642170-3040972.png?f=webp",
      icon: "icons/snowshower.png"
    }
  },
  86: {
    description: "Heavy snow showers",
    day:{
      img: "https://cdni.iconscout.com/illustration/premium/thumb/snow-park-3642170-3040972.png?f=webp",
      icon: "icons/snowshower.png"
    },
    night:{
      img: "https://cdni.iconscout.com/illustration/premium/thumb/snow-park-3642170-3040972.png?f=webp",
      icon: "icons/snowshower.png"
    }
  },
  95: {
    description: "Slight or moderate thunderstorm",
    day:{
      img: "https://cdn.securem2.com/commonimages/pages/2024/5/lightning-striking.jpg",
      icon: "icons/thunder.png"
    },
    night:{
      img: "https://cdn.securem2.com/commonimages/pages/2024/5/lightning-striking.jpg",
      icon: "icons/thunder.png"
    }
  },
  96: {
    description: "Thunderstorm with slight hail",
    day:{
      img: "https://content.api.news/v3/images/bin/8a5609033b5ec23c8d291c4326ef4783",
      icon: "icons/moderatethunder.png"
    },
    night:{
      img: "https://content.api.news/v3/images/bin/8a5609033b5ec23c8d291c4326ef4783",
      icon: "icons/moderatethunder.png"
    }
  },
  99: {
    description: "Thunderstorm with heavy hail",
    day:{
      img: "https://content.api.news/v3/images/bin/8a5609033b5ec23c8d291c4326ef4783",
      icon: "icons/thunderstorm.png"
    },
    night:{
      img: "https://content.api.news/v3/images/bin/8a5609033b5ec23c8d291c4326ef4783",
      icon: "icons/thunderstorm.png"
    }
  }
};