import React from 'react';
import {
    ActivityIndicator,
    StyleSheet,
} from 'react-native';

import {colors} from './styles';


export const LoadingIndicator = ({show}) => {
    if (!show) {
        return null;
    } else {
        return (
            <ActivityIndicator
                style={[styles.indicator, {transform: [{scale: 1.5}]}]}
                size="large"
                color={colors.accent}
            />
        );
    }
};

const styles = StyleSheet.create({
    indicator: {
        flex: 1,
    },
});

