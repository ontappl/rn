const pubsStore = (state) => state.pubs;

export function taps(state, pubId) {
    const pubObject = pub(state, pubId);
    const taps = pubObject.taps;
    return taps ? taps : [];
}

export const pub = (state, pubId) => ({
    ...pubs(state)[pubId],
    favorited: favorited(state, pubId),
});

const pubs = (state) => state.entities.pubs;

const favorited = (state, pubId) => favorites(state).indexOf(pubId) !== -1;

export const favorites = (state) => state.entities.favoritedPubs;

export const sortedPubs = (state, cityId) => {
    return Object.keys(pubs(state))
        .map((id) => pub(state, id))
        .filter((p) => p.city === cityId)
        .sort((a, b) => {
            if (a.favorited !== b.favorited) {
                return a.favorited > b.favorited ? -1 : 1;
            }
            return a.name.localeCompare(b.name)
        });
};

export const showLoadingOnPubs = (state) => pubsStore(state).isLoading && Object.keys(pubs(state)).length === 0;
