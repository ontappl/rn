import React from 'react';
import {
    View,
    TouchableNativeFeedback,
    Text,
    StyleSheet,
} from 'react-native';

import {colors} from './styles';


export const TabBar = ({tabs, onChangeTab}) => (
    <View style={styles.wrapper}>
        {tabs.tabs.map((tab, i) =>
            <Button {...tab} selected={tabs.index === i} onPress={() => onChangeTab(i)}/>
        )}
    </View>
);

const Button = ({title, selected, onPress}) => (
    <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(colors.accent)}
        onPress={onPress}>
        <View style={styles.button}>
            <View style={styles.textWrapper}>
                <Text style={[styles.text, selected && styles.textSelected]}>{title}</Text>
            </View>
            <Underline visible={selected}/>
        </View>
    </TouchableNativeFeedback>
);

const Underline = ({visible}) => (
    <View
        style={[
            styles.underline,
            visible && styles.underlineVisible
        ]}
    />
);

const BUTTON_HEIGHT = 48;
const UNDERLINE_HEIGHT = 2;

const styles = StyleSheet.create({
    wrapper: {
        height: BUTTON_HEIGHT,
        backgroundColor: colors.primary,
        elevation: 4,
        flexDirection: 'row',
    },
    button: {
        height: BUTTON_HEIGHT,
        flex: 1,
        flexDirection: 'column',
    },
    textWrapper: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: UNDERLINE_HEIGHT,
        paddingLeft: 12,
        paddingRight: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        fontFamily: 'roboto_medium',
        color: colors.text.secondary,
    },
    textSelected: {
        color: colors.text.primary,
    },
    underline: {
        height: UNDERLINE_HEIGHT,
        backgroundColor: 'transparent',
    },
    underlineVisible: {
        backgroundColor: colors.accent,
    }
});
