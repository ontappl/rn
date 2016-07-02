import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import {NavigationBar} from './NavigationBar';
import {TabBar} from './TabBar';


export const Home = ({city}) => (
    <View style={{flex: 1, backgroundColor: 'pink'}}>
        <NavigationBar title={city.name}/>
        <TabBar buttonParams={[{title: 'puby', selected: true, onPress: ()=>console.log('puby')}, {title: 'piwa', selected: false, onPress: () => console.log('piwa')}]}/>
        <Text>------ Home ------</Text>
        <Text>------ Home ------</Text>
        <Text>------ Home ------</Text>
        <Text>------ Home ------</Text>
        <Text>------ Home ------</Text>
    </View>
);