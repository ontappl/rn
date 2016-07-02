import React from 'react';
import {
    InteractionManager,
    ListView,
} from 'react-native';
import {connect} from 'react-redux';

import {Pubs as PubsComponent} from '../components';
import * as actions from '../actions2/pubs';
import * as selectors from '../selectors/pubs';


class PubsContainer extends React.Component {
    componentDidMount() {
        const {fetchPubs, selectedCity} = this.props;
        InteractionManager.runAfterInteractions(() => fetchPubs(selectedCity));
    }

    render() {
        return <PubsComponent {...this.props}/>;
    }
}

const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const mapStateToProps = (state) => ({
    selectedCity: state.app.selectedCity,
    isLoading: state.pubs.isLoading,
    pubsDataSource: dataSource.cloneWithRows(selectors.sortedPubs(state, state.app.selectedCity)),
});

const mapDispatchToProps = {
    fetchPubs: actions.fetchPubsRequest,
};

export const Pubs = connect(mapStateToProps, mapDispatchToProps)(PubsContainer);
