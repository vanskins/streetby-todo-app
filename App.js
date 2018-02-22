import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import Header from './Components/Header';
import Footer from './Components/Footer';


const PAGE = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  button: {
    width: PAGE.width - 100,
    backgroundColor: '#2980b9',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  text: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 22,
    padding: 5
  }
})
export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {
          todo: 'Wash dishes',
          done: false,
        },
        {
          todo: 'Do my Capstone project',
          done: false,
        },
        {
          todo: 'Study Programming',
          done: false,
        },
      ],
    }
  }
  render() {
    const { todo } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <View style={[styles.container]}>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
            placeholder="What will you do today"
          />
          <TouchableOpacity
            style={[styles.button]}
          >
            <Text style={[styles.text]}>Submit Todo</Text>
          </TouchableOpacity>
          <FlatList
            data={todo}
            renderItem={({ item }) => <Text>{item.key}</Text>}
          />
        </View>
        <Footer />
      </View>
    );
  }
}