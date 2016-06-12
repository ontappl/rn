import React from 'react';
import {connect} from 'react-redux';
import {
    ScrollView,
    Text,
    View,
    TouchableNativeFeedback,
} from 'react-native';

import * as actions from '../actions';
import * as selectors from '../selectors';


const CityComponent = ({city, pubs}) => {
    return (
        <ScrollView style={{flex: 1, backgroundColor: 'yellow'}}>
            <Text>SINGLE CITY</Text>
            <Text>{city.name}</Text>
            {pubs.map((p) =>
                <PubButton
                    key={p.id}
                    pub={p}
                />
            )}
        </ScrollView>
    );
};

const PubButton = ({pub}) => (
    <TouchableNativeFeedback>
        <View style={{padding: 16}}>
            <Text>{pub.name}</Text>
        </View>
    </TouchableNativeFeedback>
);

class CityContainer extends React.Component {
    componentWillMount() {
        console.log('componentWillMount', this);
        this.props.fetchPubs(this.props.city.id);
    }

    render() {
        const {city, pubs} = this.props;
        return <CityComponent city={city} pubs={pubs}/>
    }
}

const mapStateToProps = (state, ownProps) => ({
  pubs: selectors.getSortedPubsForCity(state, ownProps.city.id),
});

const mapActions = {
    fetchPubs: actions.fetchPubsRequest,
};

export const City = connect(mapStateToProps, mapActions)(CityContainer);