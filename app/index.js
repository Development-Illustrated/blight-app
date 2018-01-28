import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { MapView, Constants, Location, Permissions } from 'expo'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Yay</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
