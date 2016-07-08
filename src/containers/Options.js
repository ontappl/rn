import React from 'react';
import {connect} from 'react-redux';

import {Options as OptionsComponent} from '../components';
import * as navigatorActions from '../actions/rootNavigator';
import * as appActions from '../actions/app';


class OptionsContainer extends React.Component {
    render() {
        const {back, reset} = this.props;
        return <OptionsComponent onBack={back} onResetCityPress={reset}/>;
    }
}

const mapDispatchToProps = {
    back: navigatorActions.pop,
    reset: appActions.reset,
};

export const Options = connect(null, mapDispatchToProps)(OptionsContainer);
