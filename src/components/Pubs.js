import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
} from 'react-native';

import {LoadingIndicator} from './LoadingIndicator';
import {PubRow} from './PubRow';
import {PlainListSeparator} from './PlainListRow';


export const Pubs = ({isLoading, pubsDataSource, onPubSelect, onTogglePubFavorite}) => (
    <View style={{flex: 1, backgroundColor: 'white'}}>
        <LoadingIndicator show={isLoading}/>
        {!isLoading &&
        <ListView
            style={styles.list}
            enableEmptySections={true}
            dataSource={pubsDataSource}
            renderRow={(rowData) =>
                <PubRow
                    key={rowData.id}
                    name={rowData.name}
                    onPress={() => onPubSelect(rowData.id, rowData.name)}
                    isFavourited={rowData.favorited}
                    onToggleFavorite={() => onTogglePubFavorite(rowData.id)}
                />
            }
            renderSeparator={(_, rowId) => <PlainListSeparator key={rowId}/>}
            contentContainerStyle={{paddingTop: 8}}
            initialListSize={20}
            pageSize={30}
        />}
    </View>
);

const styles = StyleSheet.create({
    list: {
        flex: 1,
    },
});