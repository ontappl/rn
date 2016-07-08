import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableNativeFeedback,
} from 'react-native';

import {NavigationBar} from './NavigationBar';
import {colors} from './styles';


export const Options = ({onBack, onResetCityPress}) => (
    <View style={styles.container}>
        <NavigationBar
            title="Ustawienia"
            onBackPress={onBack}
        />
        <View style={styles.spacer}/>
        <TouchableNativeFeedback
            onPress={onResetCityPress}
            background={TouchableNativeFeedback.Ripple(colors.accent)}
        >
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Zmień miasto</Text>
            </View>
        </TouchableNativeFeedback>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    spacer: {
        height: 8,
    },
    buttonContainer: {
        paddingLeft: 16,
        paddingRight: 16,
        minHeight: 48,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: colors.text.dividers,
    },
    buttonText: {
        fontSize: 16,
        color: colors.text.primary,
    },
});