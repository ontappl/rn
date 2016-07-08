import React from 'react';
import {connect} from 'react-redux';

import {Options as OptionsComponent} from '../components';
import * as navigatorActions from '../actions/rootNavigator';


class OptionsContainer extends React.Component {
    render() {
        const {back} = this.props;
        return <OptionsComponent onBack={back}/>;
    }
}

const mapDispatchToProps = {
    back: navigatorActions.pop,
};

export const Options = connect(null, mapDispatchToProps)(OptionsContainer);
