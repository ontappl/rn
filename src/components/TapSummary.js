import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


export const TapSummary = ({tap}) => (
    <View style={styles.tap}>
        <Text style={styles.tapName}>{tap.tapName}</Text>
        <Beer beer={tap.beer}/>
        <Prices prices={tap.prices}/>
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

const Prices = ({prices}) => {
    if (!prices || prices.length === 0) {
        return null;
    }

    return (
        <Text>Ceny: {prices.map((p) => Number(p/100).toFixed(2)).join(', ')}</Text>
    );
};

const styles = StyleSheet.create({
    tap: {
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
