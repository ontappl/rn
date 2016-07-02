export const sortedCities = (citiesStore) => {
    const citiesObject = citiesStore.cities;
    return Object
        .keys(citiesObject)
        .map((k) => citiesObject[k])
        .sort((a, b) => a.name.localeCompare(b.name));
};

export const selectedCity = ({app, cities}) => cities.cities[app.selectedCity];
