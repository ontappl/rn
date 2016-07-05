import React from 'react';
import {
    View,
    TouchableNativeFeedback,
    Image,
    Text,
    StyleSheet,
} from 'react-native';

import {colors} from './styles';


export const NavigationBar = ({title, onBackPress}) => (
    <View style={styles.container}>
        {onBackPress &&
        <TouchableNativeFeedback onPress={onBackPress}>
            <View style={styles.button}>
                <Image
                    style={styles.buttonImage}
                    source={require('../img/icon-arrow-back-white.png')}
                />
            </View>
        </TouchableNativeFeedback>
        }
        <Text style={[styles.title, onBackPress && styles.titleWithLeftButton]}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: 56,
        backgroundColor: colors.primary,
        elevation: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        padding: 12,
        margin: 2,
    },
    buttonImage: {
        width: 24,
        height: 24,
    },
    title: {
        marginLeft: 16,
        fontSize: 20,
        color: 'rgba(0,0,0,0.87)',
    },
    titleWithLeftButton: {
        marginLeft: 20,
    },
});
