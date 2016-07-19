export const entities = (state) => state.entities;

export const cities = (state) => entities(state).cities;

export const sortedCities = (state) => {
    const citiesObject = cities(state);
    return Object
        .keys(citiesObject)
        .map((k) => citiesObject[k])
        .sort((a, b) => a.name.localeCompare(b.name));
};

export const app = (state) => state.app;

export const selectedCityId = (state) => app(state).selectedCity;

export const selectedCity = (state) => cities(state)[selectedCityId(state)];
