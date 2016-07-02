import React from 'react';

import {Home as HomeComponent} from '../components';


class HomeContainer extends React.Component {
    render() {
        return <HomeComponent/>;
    }
}

export const Home = HomeContainer;
