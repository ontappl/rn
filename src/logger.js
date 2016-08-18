import {Crashlytics,} from 'react-native-fabric';


export function logError(error) {
  console.warn(error, error.data); // eslint-disable-line no-console
  const message = `${error.toString()}, ${JSON.stringify(error.data)}`;
  Crashlytics.logException(message);
}
