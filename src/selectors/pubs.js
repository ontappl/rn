const pubsStore = (state) => state.pubs;

export function taps(state, pubId) {
    const taps = state.pubs.pubs[pubId].taps;
    return taps ? taps : [];
}

const pubs = (state) => pubsStore(state).pubs;

export const pub = (state, pubId) => ({
    ...pubs(state)[pubId],
    favorited: favorited(state, pubId),
});

const favorites = (state) => pubsStore(state).favorites;

const favorited = (state, pubId) => favorites(state).indexOf(pubId) !== -1;

export const sortedPubs = (state, cityId) => {
    return Object.keys(pubs(state))
        .map((id) => pub(state, id))
        .filter((p) => p.city === cityId)
        .sort((a, b) => a.name.localeCompare(b.name));
};

export const showLoadingOnPubs = (state) => pubsStore(state).isLoading && pubs(state).length === 0;
