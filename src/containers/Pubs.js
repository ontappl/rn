import React from 'react';
import {
    InteractionManager,
    ListView,
} from 'react-native';
import {connect} from 'react-redux';

import {Pubs as PubsComponent} from '../components';
import * as pubActions from '../actions/pubs';
import * as pubSelectors from '../selectors/pubs';


class PubsContainer extends React.Component {
    componentDidMount() {
        const {pubs, fetchPubs, selectedCity} = this.props;
        if (pubs.length === 0) {
            InteractionManager.runAfterInteractions(() => fetchPubs(selectedCity));
        }
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

const mapStateToProps = (state) => ({
    selectedCity: state.app.selectedCity,
    isLoading: state.pubs.isLoading,
    pubs: pubSelectors.sortedPubs(state, state.app.selectedCity),
    pubsDataSource: dataSource.cloneWithRows(pubSelectors.sortedPubs(state, state.app.selectedCity)),
});

const mapDispatchToProps = {
    fetchPubs: pubActions.fetchPubsRequest,
    selectPub: pubActions.selectPub,
    togglePubFavorite: pubActions.togglePubFavorite,
};

export const Pubs = connect(mapStateToProps, mapDispatchToProps)(PubsContainer);
