import React from 'react';
import {
    View,
    StyleSheet,
    ListView,
} from 'react-native';

import {NavigationBar,} from './NavigationBar';
import {LoadingIndicator,} from './LoadingIndicator';
import {TapSummary,} from './TapSummary';
import {PlainListSeparator,} from './PlainListRow';


export const Pub = ({isLoading, name, tapsDataSource, onBack,}) => (
    <View style={styles.container}>
        <NavigationBar title={name} onBackPress={onBack}/>
        <LoadingIndicator show={isLoading}/>
        {!isLoading &&
        <ListView
            style={styles.list}
            enableEmptySections={true}
            dataSource={tapsDataSource}
            renderRow={(rowData) => <TapSummary key={rowData.name} tap={rowData}/>}
            renderSeparator={(_, rowId) => <PlainListSeparator key={rowId}/>}
            contentContainerStyle={{paddingTop: 8,}}
            initialListSize={4}
            pageSize={6}
        />}
    </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});

