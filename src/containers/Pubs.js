import React from 'react';
import {
    InteractionManager,
    ListView,
} from 'react-native';
import {connect} from 'react-redux';

import {Pubs as PubsComponent} from '../components';
import * as pubActions from '../actions/pubs';
import * as citySelectors from '../selectors/cities';
import * as pubSelectors from '../selectors/pubs';


class PubsContainer extends React.Component {
    componentDidMount() {
        const {fetchPubs, selectedCityId} = this.props;
        InteractionManager.runAfterInteractions(() => fetchPubs(selectedCityId));
    }

    render() {
        const {selectPub, togglePubFavorite} = this.props;
        return (
            <PubsComponent
                {...this.props}
                onPubSelect={(id, name) => selectPub(id, name)}
                onTogglePubFavorite={(id) => togglePubFavorite(id)}
            />);
    }
}

const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const mapStateToProps = (state) => {
    const selectedCityId = citySelectors.selectedCityId(state);
    const pubs = pubSelectors.sortedPubs(state, selectedCityId);
    return {
        selectedCityId: selectedCityId,
        isLoading: pubSelectors.showLoadingOnPubs(state),
        pubs: pubs,
        pubsDataSource: dataSource.cloneWithRows(pubs),
    }
};

const mapDispatchToProps = {
    fetchPubs: pubActions.fetchPubsRequest,
    selectPub: pubActions.selectPub,
    togglePubFavorite: pubActions.togglePubFavorite,
};

export const Pubs = connect(mapStateToProps, mapDispatchToProps)(PubsContainer);
