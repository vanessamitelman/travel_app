import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  const URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;
  try {
    const {
      data: { data }
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        // 'x-rapidapi-key': '38a34767admsh3f9b29ceff770d0p1fddcfjsnce1aff737128'
        // 'x-rapidapi-key': 'a9b3a69589mshb640bbdf000915dp15ca5bjsn269050226c59'
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_API_KEY
      }
    });

    return data;
  } catch (e) {
    console.log(e);
  }
};
export const getWeatherData = async (lat, lng) => {
  const URL = 'https://community-open-weather-map.p.rapidapi.com/find';

  try {
    const { data } = await axios.get(URL, {
      params: {
        lat,
        lon: lng
      },
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        // 'x-rapidapi-key': 'a9b3a69589mshb640bbdf000915dp15ca5bjsn269050226c59'
        // 'x-rapidapi-key': '38a34767admsh3f9b29ceff770d0p1fddcfjsnce1aff737128'
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_API_KEY
      }
    });

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getAirportData = async (lat, lng) => {
  try {
    const {data} = await axios.get(
      `https://aerodatabox.p.rapidapi.com/airports/search/location/${lat}/${lng}/km/100/16`,
      {
        headers: {
          'x-rapidapi-host': 'aerodatabox.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_AIRPORT_API_KEY
        }
      }
    );

    return data
  } catch (e) {
    console.log(e);
  }

};
