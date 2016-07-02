import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import {NavigationBar} from './NavigationBar';
import {TabBar} from './TabBar';


export const Home = ({city, tabs, onChangeTab, selectedScene}) => (
    <View style={{flex: 1, backgroundColor: 'pink'}}>
        <NavigationBar title={city.name}/>
        <TabBar tabs={tabs} onChangeTab={onChangeTab}/>
        {selectedScene}
    </View>
);
