import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View, Image } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello sir {this.props.name}!</Text>
    )
  }
}

export default class App extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <Text>Hello Tommy!!!</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Greeting name="Thomas" />
        <Greeting name="Phil" />
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
