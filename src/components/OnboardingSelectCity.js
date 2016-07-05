import React from 'react';
import {
    View,
    Text,
    ListView,
    TouchableNativeFeedback,
    StyleSheet,
} from 'react-native';

import {LoadingIndicator} from './LoadingIndicator';
import {PlainListRow, PlainListSeparator} from './PlainListRow';
import {colors} from './styles';


export const OnboardingSelectCity = ({isLoading, citiesDataSource, onCitySelect}) => (
    <View style={styles.wrapper}>
        <View style={styles.welcome}>
            <Text style={styles.head}>Witamy w On Tap!</Text>
            <Text style={styles.subHead}>
                Aby zacząć, wybierz miasto w którym będziesz szukać multitapów:
            </Text>
        </View>
        <LoadingIndicator show={isLoading}/>
        {!isLoading &&
        <ListView
            style={styles.list}
            enableEmptySections={true}
            dataSource={citiesDataSource}
            renderRow={(rowData) => <PlainListRow key={rowData.id} text={rowData.name} onPress={() => onCitySelect(rowData.id, rowData.name)}/>}
            renderSeparator={(_, rowId) => <PlainListSeparator key={rowId}/>}
            contentContainerStyle={{paddingTop: 8}}
        />}
    </View>
);

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column',
    },
    welcome: {
        elevation: 4,
        backgroundColor: colors.primary,
    },
    head: {
        color: colors.text.primary,
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
        color: colors.text.secondary,
        fontSize: 15,
        lineHeight: 24,
        textAlign: 'center',
        marginLeft: 40,
        marginRight: 40,
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
