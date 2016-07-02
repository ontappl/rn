import React from 'react';
import {connect} from 'react-redux';

import * as selectors from '../selectors/cities';
import {Home as HomeComponent} from '../components';


class HomeContainer extends React.Component {
    render() {
        return <HomeComponent city={this.props.city}/>;
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        city: selectors.selectedCity(state),
    };
};

export const Home = connect(mapStateToProps)(HomeContainer);
