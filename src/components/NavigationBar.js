import React from 'react';
import {
    View,
    TouchableNativeFeedback,
    Image,
    Text,
    StyleSheet,
} from 'react-native';


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
        backgroundColor: 'aqua',
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
    },
    titleWithLeftButton: {
        marginLeft: 20,
    },
});
