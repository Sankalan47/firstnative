import React from 'react';

import {View, Text, StyleSheet, useColorScheme} from 'react-native';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        Hello from native
      </Text>
    </View>
  );
}

/* The `const styles` variable is an object that contains style definitions for different components in
the React Native app. It uses the `StyleSheet.create()` method to create a stylesheet object with
the specified styles. */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#ffffff',
  },
  darkText: {
    color: '#000000',
  },
});

export default App;
