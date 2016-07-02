import React from 'react';
import {
    TouchableNativeFeedback,
    View,
    Text,
    StyleSheet
} from 'react-native';


export const PlainListRow = ({text, onPress}) => (
    <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.SelectableBackground()}
    >
        <View style={styles.wrapper}>
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableNativeFeedback>
);

export const PlainListSeparator = () => <View style={styles.separator}/>;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        height: 48,
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgray',
    }
});