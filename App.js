import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Dimensions, Alert, Image} from 'react-native';
import Header from './Components/Header';
import Footer from './Components/Footer';


const PAGE = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
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
      todos: [],
    }
  }

  todoList = () => {
    return this.state.todos.map( (item, index) => 
      <TouchableOpacity
        key ={index}
        style={{ width: Dimensions.get('window').width * 0.9 ,height: 40, justifyContent: 'center', borderWidth: 1, marginTop: 15, backgroundColor: item.done ? 'white' : 'white', borderRadius: 15 }}
        onPress={() => {
          const label = item.done ? 'UNDONE': 'DONE';
          Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
              {
                text: label, onPress: () => {
                  if(label === 'DONE'){
                    let todoCopy = this.state.todos;
                    todoCopy[index].done = true;
                    this.setState({
                      todos: todoCopy,
                    })
                  } else {
                    let todoCopy = this.state.todos;
                    todoCopy[index].done = false;
                    this.setState({
                      todos: todoCopy,
                    })
                  }
              } },
              { text: 'DELETE', onPress: () => {
                const todoIndex = this.state.todos.findIndex(a => a.todo === item.todo);
                let todoCopy = this.state.todos;
                todoCopy.splice(todoIndex,1);
                this.setState({
                  todos: todoCopy,
                })
              } },
            ],
            { cancelable: false }
          )
        }}

      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: Dimensions.get('window').width * 0.9}}>
          <View>
            <Text style={{ color: 'black', paddingLeft: 20, height: 25 }}>{item.todo}</Text>
          </View>
          <View>
          {
            item.done && 
              <Image
                style={{ width: 25, height: 25, marginRight: 15 }}
                source={require('./images/check.png')}
              />
          }
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  submit = () => {
    this.setState({
      todos: [...this.state.todos, { todo: this.state.text, done: false }]
    })
    this.textInput.clear(); 
  }

  render() {
    const { todos } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <View style={[styles.container]}>
          <TextInput
            ref={input => { this.textInput = input }}
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: Dimensions.get('window').width }}
            onChangeText={(text) => this.setState({ text })}
            onSubmitEditing={() => {
              this.submit();
            } }
            value={this.state.text}
            placeholder="What will you do today"
          />
          <TouchableOpacity
            style={[styles.button]}
            onPress={()=>{
              this.submit();
              this.textInput.clear();
            }}
          >
            <Text style={[styles.text]}>Submit Todo</Text>
          </TouchableOpacity>
          {this.todoList()}
        </View>
        <Footer />
      </View>
    );
  }
}