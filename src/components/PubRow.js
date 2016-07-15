import React from 'react';
import {
    TouchableNativeFeedback,
    View,
    TouchableOpacity,
    Image,
    Text,
    StyleSheet
} from 'react-native';

import {colors} from './styles';


export const PubRow = ({name, onPress, isFavourited, onToggleFavorite}) => (
    <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple(colors.accent)}
    >
        <View style={styles.container}>
            <TouchableOpacity onPress={onToggleFavorite} style={styles.favoriteButton}>
                {isFavourited &&
                <Image style={styles.favoriteImage} source={require('../img/icon-favorite-full-accent.png')}/>
                }
                {!isFavourited &&
                <Image style={styles.favoriteImage} source={require('../img/icon-favorite-empty-secondary.png')}/>
                }
            </TouchableOpacity>
            <Text style={styles.name}>{name}</Text>
        </View>
    </TouchableNativeFeedback>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 4,
        paddingRight: 16,
        height: 48,
        alignItems: 'center',
    },
    favoriteButton: {
        padding: 12,
    },
    favoriteImage: {
        width: 24,
        height: 24,
    },
    name: {
        flex: 1,
        marginLeft: 20,
        fontSize: 16,
        fontFamily: 'roboto_regular',
        color: colors.text.primary,
    },
});