import React, { Component } from 'react';
import { View, Text, Dimensions, SafeAreaView, StyleSheet } from 'react-native';

const PAGE = Dimensions.get('window');

const styles = StyleSheet.create({
  headerTitle: {
      alignSelf: 'center',
      fontSize: 24,
      color: 'white',
      fontWeight: 'bold'
  },
  header: {
      width: PAGE.width,
    backgroundColor: '#e74c3c',
      height: 50,
      justifyContent: 'center'
  }
})

export default class Header extends Component {
  render(){
    return (
      <SafeAreaView forceInset={{ top: 'always' }}>
      <View style={[styles.header]}>
        <Text style={[styles.headerTitle]}>STREETBY TODO-APP</Text>
      </View>
      </SafeAreaView>
    );
  }
}



