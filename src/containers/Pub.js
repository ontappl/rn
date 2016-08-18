import React from 'react';
import {connect,} from 'react-redux';
import {
    InteractionManager,
    ListView,
} from 'react-native';

import * as rootNavigatorSelectors from '../selectors/rootNavigator';
import * as pubsSelectors from '../selectors/pubs';
import * as pubsActions from '../actions/pubs';
import * as rootNavigatorActions from '../actions/rootNavigator';
import {Pub as PubComponent,} from '../components';


class PubContainer extends React.Component {
  componentDidMount() {
    const {fetchTaps, id,} = this.props;
    InteractionManager.runAfterInteractions(() => fetchTaps(id));
  }

  render() {
    const {isLoading, pub, tapsDataSource, back,} = this.props;
    return (
            <PubComponent
                isLoading={isLoading}
                {...pub}
                tapsDataSource={tapsDataSource}
                onBack={back}
            />
        );
  }
}

const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2,});

const mapStateToProps = (state) => {
  const {pubId,} = rootNavigatorSelectors.currentRoute(state);
  const isLoading = state.pubs.isLoading;
  return {
    id: pubId,
    isLoading: isLoading,
    pub: pubsSelectors.pub(state, pubId),
    tapsDataSource: dataSource.cloneWithRows(pubsSelectors.taps(state, pubId)),
  };
};

const mapDispatchToProps = {
  fetchTaps: pubsActions.fetchTapsRequest,
  back: rootNavigatorActions.pop,
};

export const Pub = connect(mapStateToProps, mapDispatchToProps)(PubContainer);
