import React from 'react';
import {connect} from 'react-redux';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
} from 'react-native';

import * as actions from '../actions';
import * as selectors from '../selectors';


const PubComponent = ({pub, taps}) => (
    <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.titleWrapper}>
            <Text style={styles.title}>{pub.name}</Text>
        </View>
        <ScrollView style={{flex: 1}}>
            {taps.map((t) => <Tap key={t.tapName} tap={t}/>)}
        </ScrollView>
    </View>
);

const Tap = ({tap}) => (
    <View style={styles.tap}>
        <Text style={styles.tapName}>{tap.tapName}</Text>
        <Beer beer={tap.beer}/>
    </View>
);

const Beer = ({beer}) => (
    <View>
        <Text style={styles.beerName}>{beer.name}</Text>
        <Text style={styles.beerStyleName}>{beer.style}</Text>
        <Text style={styles.beerBreweryName}>{beer.brewery}</Text>
        <View style={styles.detailsWrapper}>
            <View style={styles.detailWrapper}>
                <Text style={styles.detailsName}>ABV</Text>
                <Text style={styles.detailsValue}>{beer.abv ? beer.abv : '--'}</Text>
            </View>
            <View style={styles.detailWrapper}>
                <Text style={styles.detailsName}>IBU</Text>
                <Text style={styles.detailsValue}>{beer.ibu ? beer.ibu : '--'}</Text>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    titleWrapper: {
        borderBottomWidth: 0.5,
        borderColor: 'gray',
    },
    title: {
        margin: 16,
        fontSize: 24,
    },
    tap: {
        borderBottomWidth: 0.5,
        borderColor: 'gray',
        padding: 16,
    },
    tapName: {
        fontSize: 10,
        color: 'gray',
    },
    beerName: {
        fontSize: 18,
        color: 'black',
    },
    beerStyleName: {
        fontSize: 14,
        color: '#333',
    },
    beerBreweryName: {
        fontSize: 14,
        color: '#333',
    },
    detailsWrapper: {
        flexDirection: 'row',
    },
    detailWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginRight: 8,
    },
    detailsName: {
        fontSize: 12,
        color: '#333',
        marginRight: 4,
    },
    detailsValue: {
        fontSize: 14,
        color: '#333',
    },
});

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
