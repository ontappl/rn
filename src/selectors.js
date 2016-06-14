export function getSortedPubsForCity({cities}, cityId) {
    const pubIds = cities.cities[cityId].pubs;
    if (!pubIds) {
        return [];
    }

    return pubIds.map((i) => cities.pubs[i]).sort((a, b) => a.name.localeCompare(b.name));
}

export function getTapsForPub({cities}, pubId) {
    const taps = cities.pubs[pubId].taps;
    return taps ? taps : [];
}
