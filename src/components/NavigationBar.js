import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


export const NavigationBar = ({title}) => (
    <View style={styles.wrapper}>
        <Text>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    wrapper: {
        height: 56,
        backgroundColor: 'aqua',
        elevation: 4,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
    },
    title: {

    }
});