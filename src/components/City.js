import React from 'react';
import {connect} from 'react-redux';
import {
    ScrollView,
    Text,
    View,
    TouchableNativeFeedback,
    InteractionManager,
} from 'react-native';

import * as actions from '../actions';
import * as selectors from '../selectors';
import * as navigationActions from '../navigation/actions';


const CityComponent = ({pubs, onPubPress}) => {
    return (
        <ScrollView style={{flex: 1, marginTop: 56}}>
            {pubs.map((p) =>
                <PubButton
                    key={p.id}
                    pub={p}
                    onPress={() => onPubPress(p)}
                />
            )}
        </ScrollView>
    );
};

const PubButton = ({pub, onPress}) => (
    <TouchableNativeFeedback onPress={onPress}>
        <View style={{padding: 16}}>
            <Text>{pub.name}</Text>
        </View>
    </TouchableNativeFeedback>
);

class CityContainer extends React.Component {
    componentWillMount() {
        InteractionManager.runAfterInteractions(() => {
            this.props.fetchPubs(this.props.city.id);
        });
    }

    render() {
        const {city, pubs} = this.props;
        return <CityComponent city={city} pubs={pubs} onPubPress={this._onPubPress.bind(this)}/>
    }

    _onPubPress(pub) {
        const state = {key: 'pub', pub, title: pub.name};
        this.props.selectPub(state);
    }
}

const mapStateToProps = (state, ownProps) => ({
  pubs: selectors.getSortedPubsForCity(state, ownProps.city.id),
});

const mapActions = {
    fetchPubs: actions.fetchPubsRequest,
    selectPub: navigationActions.push,
};

export const City = connect(mapStateToProps, mapActions)(CityContainer);