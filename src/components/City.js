import React from 'react';
import {
    Text,
    View,
} from 'react-native';


export const City = ({city}) => {
    return (
        <View style={{flex: 1, backgroundColor: 'yellow'}}>
            <Text>SINGLE CITY</Text>
            <Text>{city.name}</Text>
        </View>
    );
};
