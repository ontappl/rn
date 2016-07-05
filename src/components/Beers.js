import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import {colors} from './styles';


export const Beers = ({city}) => (
    <View style={styles.wrapper}>
        <Text style={styles.text}>
            Tutaj znajdzie się wyszukiwarka i lista piw.
        </Text>
    </View>
);

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 60,
        paddingRight: 60,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        color: colors.text.disabled,
    },
});