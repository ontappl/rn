import {Answers} from 'react-native-fabric';

import * as appActionTypes from '../actionTypes/app';
import * as homeTabsActionTypes from '../actionTypes/homeTabs';
import * as homeTabsSelectors from '../selectors/homeTabs';
import * as onboardingActionTypes from '../actionTypes/onboarding';
import * as pubsActionTypes from '../actionTypes/pubs';
import * as pubsSelectors from '../selectors/pubs';


export const middleware = (store) => (next) => (action) => {
    switch (action.type) {
        case appActionTypes.SHOW_OPTIONS: {
            Answers.logContentView('Settings');
            console.info('Settings');
            break;
        }
        case appActionTypes.RESET: {
            Answers.logCustom('Reset app');
            console.info('Reset app');
            break;
        }

        case homeTabsActionTypes.CHANGE_TAB: {
            const tabName = homeTabsSelectors.tabName(store.getState());
            Answers.logContentView('Home tab', tabName);
            console.info('Home tab', tabName);
            break;
        }

        case onboardingActionTypes.SELECT_CITY: {
            Answers.logCustom('Select city', {id: action.cityId, name: action.name});
            console.info('Select city', {id: action.cityId, name: action.name});
            break;
        }

        case pubsActionTypes.SELECT_PUB: {
            Answers.logContentView('Pub', action.name, action.id);
            console.info('Pub', action.name, action.id);
            break;
        }

        case pubsActionTypes.TOGGLE_FAVORITE_PUB: {
            const pub = pubsSelectors.pub(store.getState(), action.id);
            const name = `Pub ${pub.favorited ? 'unfavourite' : 'favorite'}`;
            Answers.logCustom(name, {name: pub.name, id: pub.id});
            console.info(name, {name: pub.name, id: pub.id});
            break;
        }
    }
    return next(action);
};