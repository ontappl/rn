import React from 'react';
import {
    View,
    ActivityIndicator,
    Text,
    StyleSheet,
    ListView,
} from 'react-native';

import {PlainListRow, PlainListSeparator} from './PlainListRow';


export const Pubs = ({isLoading, pubsDataSource}) => (
    <View style={{flex: 1, backgroundColor: 'white'}}>
        {isLoading && <ActivityIndicator style={styles.activityIndicator} size="large"/>}
        {!isLoading &&
        <ListView
            style={styles.list}
            enableEmptySections={true}
            dataSource={pubsDataSource}
            renderRow={renderRow}
            renderSeparator={renderSeparator}
            contentContainerStyle={{paddingTop: 8}}
            initialListSize={10}
            pageSize={10}
        />}
    </View>
);

function renderRow(rowData) {
    return <PlainListRow key={rowData.id} text={rowData.name}/>
}

function renderSeparator(_, rowId) {
    return <PlainListSeparator key={rowId}/>
}

const styles = StyleSheet.create({
    activityIndicator: {
        flex: 1,
    },
    list: {
        flex: 1,
    },
});