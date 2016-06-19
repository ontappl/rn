import React from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    View,
    TouchableNativeFeedback,
} from 'react-native';
import {connect} from 'react-redux';

import * as actions from '../actions';
import * as navigationActions from '../navigation/actions';

class CitiesContainer extends React.Component {
    componentDidMount() {
        this.props.fetchCities();
    }

    render() {
        const {isLoading, citiesObject} = this.props;
        const cities = Object
            .keys(citiesObject)
            .map((k) => citiesObject[k])
            .sort((a, b) => a.name.localeCompare(b.name));
        return (
            <ScrollView style={{flex: 1, marginTop: 56}}>
                {isLoading && <Text>Loading...</Text>}
                {cities.length > 0 && cities.map(c =>
                    <CityButton
                        key={c.id}
                        city={c}
                        onPress={this._onCityPress.bind(this)}
                    />
                )
                }
            </ScrollView>
        );
    }

    _onCityPress(city) {
        const state = {key: 'city', city, title: city.name};
        this.props.selectCity(state);
    }
}

const CityButton = ({city, onPress}) => (
    <TouchableNativeFeedback onPress={() => onPress(city)}>
        <View style={{padding: 16}}>
            <Text>{city.name}</Text>
        </View>
    </TouchableNativeFeedback>
);

const mapStateToProps = ({cities}) => ({
    isLoading: cities.isLoading,
    citiesObject: cities.cities,
    error: cities.error,
});

const mapActions = {
    fetchCities: actions.fetchCitiesRequest,
    selectCity: navigationActions.push,
};

export const Cities = connect(mapStateToProps, mapActions)(CitiesContainer);
