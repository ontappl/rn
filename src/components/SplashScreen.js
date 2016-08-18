import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import {colors,} from './styles';


export const SplashScreen = () => (
    <View style={styles.container}>
        <Text>Ładowanie...</Text>
    </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: colors.text.disabled,
  },
});
