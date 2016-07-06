import React from 'react';
import {connect} from 'react-redux';

import {Home as HomeComponent} from '../components';
import {Pubs} from './Pubs';
import {Beers} from './Beers';
import * as selectors from '../selectors/cities';
import * as tabsActions from '../actions/homeTabs';


class HomeContainer extends React.Component {
    render() {
        const selectedScene = getSelectedScene(this.props.tabs);
        return <HomeComponent
            city={this.props.city}
            tabs={this.props.tabs}
            onChangeTab={this.props.changeTab}
            selectedScene={selectedScene}
        />;
    }
}

function getSelectedScene(tabs) {
    const selectedTabKey = tabs.tabs[tabs.index].key;
    switch (selectedTabKey) {
        case 'HOME_TAB_PUBS':
            return <Pubs/>;
        case 'HOME_TAB_BEERS':
            return <Beers/>;
    }
}

const mapStateToProps = (state) => ({
    city: selectors.selectedCity(state),
    tabs: state.homeTabs,
});

const mapDispatchToProps = {
    changeTab: tabsActions.changeTab,
};

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
