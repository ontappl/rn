import React from 'react';
import {connect} from 'react-redux';
import {
    ScrollView,
    View,
    Text,
} from 'react-native';

import * as actions from '../actions';
import * as selectors from '../selectors';


const PubComponent = ({pub, taps}) => (
    <ScrollView style={{flex: 1, backgroundColor: 'pink'}}>
        <View>
            <Text>{pub.name}</Text>
            {taps.map((t) => <Tap tap={t}/>)}
        </View>
    </ScrollView>
);

const Tap = ({tap}) => (
    <View>
        <Text>{tap.beer ? tap.beer.name : 'pusty'}</Text>
    </View>
);

class PubContainer extends React.Component {
    componentWillMount() {
        const {fetchTaps, pub} = this.props;
        fetchTaps(pub.id);
    }

    render() {
        return <PubComponent {...this.props}/>;
    }
}

const mapStateToProps = (state, ownProps) => ({
    taps: selectors.getTapsForPub(state, ownProps.pub.id),
});

const mapDispatchToProps = {
    fetchTaps: actions.fetchTapsRequest,
};

export const Pub = connect(mapStateToProps, mapDispatchToProps)(PubContainer);
