import React from 'react';

import {Pubs as PubsComponent} from '../components';


class PubsContainer extends React.Component {
    render() {
        return <PubsComponent/>;
    }
}

export const Pubs = PubsContainer;
