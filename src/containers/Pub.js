import React from 'react';
import {connect} from 'react-redux';
import {
    Text,
} from 'react-native';

import * as rootNavigatorSelectors from '../selectors/rootNavigator';


class PubContainer extends React.Component {
    // componentDidMount() {
    //     InteractionManager.runAfterInteractions(() => this.props);
    // }
    //
    render() {
        return <Text>PUB {this.props.name}</Text>;
    }
}

const mapStateToProps = (state) => {
    const route = rootNavigatorSelectors.currentRoute(state);
    return {
        id: route.pubId,
        name: route.pubName,
    };
};

export const Pub = connect(mapStateToProps)(PubContainer);
