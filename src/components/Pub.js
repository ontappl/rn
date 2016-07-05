import React from 'react';
import {
    View,
    ActivityIndicator,
    Text,
    StyleSheet,
    ListView,
} from 'react-native';

import {NavigationBar} from './NavigationBar';
import {
    PlainListRow,
    PlainListSeparator,
} from './PlainListRow';


export const Pub = ({isLoading, name, tapsDataSource, onBack}) => (
    <View style={styles.container}>
        <NavigationBar title={name} onBackPress={onBack}/>
        {isLoading && <ActivityIndicator style={styles.activityIndicator} size="large"/>}
        {!isLoading &&
        <ListView
            style={styles.list}
            enableEmptySections={true}
            dataSource={tapsDataSource}
            renderRow={(rowData) => <PlainListRow key={rowData.id} text={rowData.tapName} onPress={() => console.log(rowData.tapName)}/>}
            renderSeparator={(_, rowId) => <PlainListSeparator key={rowId}/>}
            contentContainerStyle={{paddingTop: 8}}
            initialListSize={10}
            pageSize={10}
        />}
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    activityIndicator: {
        flex: 1,
    },
    list: {
        flex: 1,
    },
});

