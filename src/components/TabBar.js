import React from 'react';
import {
    View,
    TouchableNativeFeedback,
    Text,
    StyleSheet,
} from 'react-native';


export const TabBar = ({buttonParams}) => (
    <View style={styles.wrapper}>
        {buttonParams.map((bP) => <Button key={bP.title} {...bP}/>)}
    </View>
);

const Button = ({title, selected, onPress}) => (
    <TouchableNativeFeedback>
        <View style={styles.button}>
            <View style={styles.textWrapper}>
                <Text style={styles.text}>{title}</Text>
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
        backgroundColor: 'aqua',
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
    },
    underline: {
        height: UNDERLINE_HEIGHT,
        backgroundColor: 'transparent',
    },
    underlineVisible: {
        backgroundColor: 'black',
    }
});
