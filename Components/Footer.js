import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
const PAGE = Dimensions.get('window');
export default class Footer extends Component {
  render() {
    return (
      <View style={{ width: PAGE.width, backgroundColor: 'green', height: 50 }}>
        <Text>Hello footer</Text>
      </View>
    );
  }
}