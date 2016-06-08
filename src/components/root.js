import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {connect} from 'react-redux';

import * as actions from '../actions';


class RootContainer extends React.Component {
    componentDidMount() {
        this.props.fetchCities();
    }

    render() {
        const {isLoading, cities} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Shake or press menu button for dev menu
                </Text>
                {isLoading && <Text>Loading...</Text>}
                {cities.length > 0 && cities.map(c => <Text key={c.id}>{c.name}</Text>)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

const mapStateToProps = ({cities}) => ({
    isLoading: cities.isLoading,
    cities: cities.cities,
    error: cities.error,
});

const mapActions = {
    fetchCities: actions.fetchCitiesRequest,
};

export const Root = connect(mapStateToProps, mapActions)(RootContainer);