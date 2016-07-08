import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import {NavigationBar} from './NavigationBar';
import {TabBar} from './TabBar';


export const Home = ({city, tabs, onChangeTab, selectedScene}) => (
    <View style={{flex: 1}}>
        <NavigationBar
            title={city.name}
            rightButtonImage={require('../img/icon-more-primary.png')}
            onRightButtonPress={() => console.log('dadsa')}
        />
        <TabBar tabs={tabs} onChangeTab={onChangeTab}/>
        {selectedScene}
    </View>
);
