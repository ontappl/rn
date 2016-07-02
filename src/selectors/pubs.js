export function sortedPubs({pubs}, cityId) {
    return Object.keys(pubs.pubs)
        .map((i) => pubs.pubs[i])
        .filter((p) => p.city === cityId)
        .sort((a, b) => a.name.localeCompare(b.name));
}
