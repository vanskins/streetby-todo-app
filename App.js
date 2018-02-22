import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Dimensions, Alert } from 'react-native';
import Header from './Components/Header';
import Footer from './Components/Footer';


const PAGE = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  button: {
    width: PAGE.width,
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
      text: '',
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
          done: true,
        },
      ],
    }
  }

  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ height: 40, justifyContent: 'center', borderWidth: 1, marginTop: 15, backgroundColor: item.done ? 'green' : 'white', color: item.done ? 'white' : 'black' }}
        onPress={() => {
          Alert.alert(
            'Todo',
            item.todo,
            [
              { text: 'DONE', onPress: () => console.log('Ask me later pressed') },
              { text: 'DELETE', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            ],
            { cancelable: false }
          )
        }}
      >
        <Text style={{ alignSelf: 'center' }}>{item.todo}</Text>
      </TouchableOpacity>
    );
  };

  _add = () => {
    const { text, todos } = this.state;
    todos.push({todo: text, done: false });
  }

  render() {
    const { todos } = this.state;
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
            onPress={this._add()}
          >
            <Text style={[styles.text]}>Submit Todo</Text>
          </TouchableOpacity>
          <FlatList
            data={todos}
            renderItem={this._renderItem}
          />
        </View>
        <Footer />
      </View>
    );
  }
}