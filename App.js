import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

// File Import
import Counter from './src/screens/Counter';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Counter />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;