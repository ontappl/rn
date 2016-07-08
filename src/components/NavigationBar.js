import React from 'react';
import {
    View,
    TouchableNativeFeedback,
    Image,
    Text,
    StyleSheet,
} from 'react-native';

import {colors} from './styles';


export const NavigationBar = ({title, onBackPress, rightButtonImage, onRightButtonPress}) => (
    <View style={styles.container}>
        {onBackPress &&
        <TouchableNativeFeedback onPress={onBackPress}>
            <View style={styles.button}>
                <Image
                    style={styles.buttonImage}
                    source={require('../img/icon-arrow-back-primary.png')}
                />
            </View>
        </TouchableNativeFeedback>
        }
        <Text
            style={[styles.title, onBackPress && styles.titleWithLeftButton]}
            lineBreakMode="tail"
            numberOfLines={1}
        >
            {title}
        </Text>
        {rightButtonImage && onRightButtonPress &&
        <TouchableNativeFeedback onPress={onRightButtonPress}>
            <View style={styles.button}>
                <Image style={styles.buttonImage} source={rightButtonImage}/>
            </View>
        </TouchableNativeFeedback>
        }
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
        flex: 1,
        marginLeft: 16,
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.text.primary,
    },
    titleWithLeftButton: {
        marginLeft: 20,
    },
});
