import React from 'react';
import {connect,} from 'react-redux';

import {Home as HomeComponent,} from '../components';
import {Pubs,} from './Pubs';
import {Beers,} from './Beers';
import * as selectors from '../selectors/cities';
import * as tabsActions from '../actions/homeTabs';
import * as appActions from '../actions/app';


class HomeContainer extends React.Component {
  render() {
    const {city, tabs, changeTab, showOptions,} = this.props;
    const selectedScene = getSelectedScene(tabs);
    return <HomeComponent
            city={city}
            tabs={tabs}
            onChangeTab={changeTab}
            selectedScene={selectedScene}
            onOptionsPress={showOptions}
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
  showOptions: appActions.showOptions,
};

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
