import React from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    ListView,
    TouchableNativeFeedback,
    StyleSheet,
} from 'react-native';

export const OnboardingSelectCity = ({isLoading, citiesDataSource, onCitySelect}) => (
    <View style={styles.wrapper}>
        <View style={styles.welcome}>
            <Text style={styles.head}>Witamy w On Tap!</Text>
            <Text style={styles.subHead}>
                Aby zacząć, wybierz miasto w którym będziesz szukać multitapów:
            </Text>
        </View>
        {isLoading && <ActivityIndicator style={styles.activityIndicator} size="large"/>}
        {!isLoading &&
        <ListView
            style={styles.list}
            enableEmptySections={true}
            dataSource={citiesDataSource}
            renderRow={CityRow(onCitySelect)}
            renderSeparator={Separator}
            contentContainerStyle={{paddingTop: 8}}
        />}
    </View>
);

const CityRow = (onPress) => ({id, name}) => (
    <TouchableNativeFeedback
        onPress={() => onPress(id)}
        background={TouchableNativeFeedback.SelectableBackground()}
        key={id}
    >
        <View style={styles.cityWrapper}>
            <Text style={styles.cityName}>{name}</Text>
        </View>
    </TouchableNativeFeedback>
);

const Separator = (_, rowId) => <View key={rowId} style={styles.separator}/>;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column',
    },
    welcome: {
        elevation: 4,
        backgroundColor: 'pink',
    },
    head: {
        color: 'black',
        fontWeight: 'normal',
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        marginLeft: 16,
        marginRight: 16,
        marginTop: 10,
        marginBottom: 20,
    },
    subHead: {
        color: 'black',
        fontSize: 15,
        lineHeight: 24,
        textAlign: 'center',
        marginLeft: 40,
        marginRight: 40,
    },
    activityIndicator: {
        flex: 1,
    },
    list: {
        flex: 1,
    },
    cityWrapper: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        height: 48,
        justifyContent: 'center',
    },
    cityName: {
        fontSize: 16,
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgray',
    }
});
