import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
} from 'react-native';

import {LoadingIndicator} from './LoadingIndicator';
import {PlainListRow, PlainListSeparator} from './PlainListRow';


export const Pubs = ({isLoading, pubsDataSource, onPubSelect}) => (
    <View style={{flex: 1, backgroundColor: 'white'}}>
        <LoadingIndicator show={isLoading}/>
        {!isLoading &&
        <ListView
            style={styles.list}
            enableEmptySections={true}
            dataSource={pubsDataSource}
            renderRow={(rowData) => <PlainListRow key={rowData.id} text={rowData.name} onPress={() => onPubSelect(rowData.id, rowData.name)}/>}
            renderSeparator={(_, rowId) => <PlainListSeparator key={rowId}/>}
            contentContainerStyle={{paddingTop: 8}}
            initialListSize={10}
            pageSize={10}
        />}
    </View>
);

const styles = StyleSheet.create({
    list: {
        flex: 1,
    },
});