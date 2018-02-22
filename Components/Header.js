import React, { Component } from 'react';
import { View, Text, Dimensions, SafeAreaView } from 'react-native';

const PAGE = Dimensions.get('window');

export default class Header extends Component {
  
  render(){
    return (
      <SafeAreaView forceInset={{ top: 'always' }}>
      <View style={{ width: PAGE.width, backgroundColor: 'green', height: 60 }} />
      </SafeAreaView>
    );
  }
}



