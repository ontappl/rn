export function sortedPubs({pubs}, cityId) {
    return Object.keys(pubs.pubs)
        .map((i) => pubs.pubs[i])
        .filter((p) => p.city === cityId)
        .sort((a, b) => a.name.localeCompare(b.name));
}

export function taps(state, pubId) {
    const taps = state.pubs.pubs[pubId].taps;
    return taps ? taps : [];
}

export const pub = (state, pubId) => state.pubs.pubs[pubId];
