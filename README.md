# OnTap React Native App (halted)

## General Setup
- `.config` before starting the app add `.config` file (which is ignored by git) and fill it with this template:
```
export const config = {
    baseUrl: 'http://www.4chan.org/api/',
    currentApiVersion: 'v666',
    apiKey: 'YOUR_KEY_HERE_LOL',
    androidSenderId: '66677766677',
};

```
- ESLint: `npm run lint`

## Android Setup
1. Install dependencies: `npm i`
2. Establish USB connection with device: `adb reverse tcp:8081 tcp:8081`
3. Start Android bundle: `react-native run-android`
