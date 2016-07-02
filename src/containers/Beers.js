import React from 'react';

import {Beers as BeersComponent} from '../components';


class BeersContainer extends React.Component {
    render() {
        return <BeersComponent/>;
    }
}

export const Beers = BeersContainer;
