import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'; 

class App extends Component{
  render(){

    let nome = 'Yang';
    let img = 'https://sujeitoprogramador.com/steve.png'

    return(
      <View>
        <Text>Hello Word!</Text>
        <Text>Meu Primeiro App</Text>    
        <Text style={{ color: '#FF0000', fontSize: 25, margin: 15 }}>
          Test
        </Text>

        <Image 
          source={{ uri: img }}
          style={{ width: 300, height: 300 }}
        />

        <Text style={{ fontSize: 40 }}> {nome} </Text>

      </View>
    );
  }
}

export default App;