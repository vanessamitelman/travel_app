import { createContext, useState,useEffect } from 'react';
import { getPlacesData, getWeatherData, getAirportData } from './api';

export const TravelContext = createContext();

const TravelContextProvider = ({ children }) => {
  const [places, setPlaces] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [airportData, setAirportData] = useState([]);
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState({});
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);
  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  useEffect(() => {
    setIsLoading(true);
    if (bounds.ne && bounds.sw) {
      getWeatherData(coords.lat, coords.lng).then((data) =>
        setWeatherData(data)
      );
      getAirportData(coords.lat, coords.lng).then((data) =>
        setAirportData(data)
      );
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([]);
        setRating('');
        setIsLoading(false);
      });
    }
  }, [type, bounds]);

  const value = {
    places,
    setPlaces,
    weatherData,
    setWeatherData,
    airportData,
    setAirportData,
    coords,
    setCoords,
    bounds,
    setBounds,
    type,
    setType,
    rating,
    setRating,
    childClicked,
    setChildClicked,
    isLoading,
    setIsLoading,
    filteredPlaces,
    setFilteredPlaces
  };
  return (
    <TravelContext.Provider value={value}>{children}</TravelContext.Provider>
  );
};
export default TravelContextProvider;
