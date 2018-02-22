import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import Footer from './Components/Footer';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={{ flex: 1, borderWidth: 1 }}>
          <Text style={{ flex: 1 }}>Body asdas sadas das sa as</Text>
        </View>
        <Footer />
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
