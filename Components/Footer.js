import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
const PAGE = Dimensions.get('window');
const styles = StyleSheet.create({
  footerTitle: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'white',
    fontWeight: 'normal'
  },
  header: {
    width: PAGE.width,
    backgroundColor: '#e74c3c',
    height: 50,
    justifyContent: 'center'
  }
})
export default class Footer extends Component {
  render() {
    return (
      <View style={[styles.header]}>
        <Text style={[styles.footerTitle]}>Streetby Todo 2018</Text>
      </View>
    );
  }
}