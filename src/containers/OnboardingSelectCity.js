import React from 'react';
import {connect} from 'react-redux';
import {
    ListView,
    InteractionManager,
} from 'react-native';

import {OnboardingSelectCity as OnboardingSelectCityComponent} from '../components';
import {fetchCitiesRequest} from '../actions/cities';
import {selectCity} from '../actions/onboarding';
import {sortedCities} from '../selectors/cities';


class OnboardingSelectCityContainer extends React.Component {
    componentDidMount() {
        InteractionManager.runAfterInteractions(() => this.props.fetchCities());
    }

    render() {
        return <OnboardingSelectCityComponent {...this.props} onCitySelect={this._onCitySelect.bind(this)}/>;
    }

    _onCitySelect(id) {
        this.props.selectCity(id);
    }
}

const citiesDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const mapStateToProps = ({cities}) => ({
    isLoading: cities.isLoading,
    citiesDataSource: citiesDataSource.cloneWithRows(sortedCities(cities)),
});

const mapDispatchToProps = {
    fetchCities: fetchCitiesRequest,
    selectCity: selectCity,
};

export const OnboardingSelectCity = connect(mapStateToProps, mapDispatchToProps)(OnboardingSelectCityContainer);