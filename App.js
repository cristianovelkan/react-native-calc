/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { TextInput, Button } from 'react-native-paper';

import { Colors} from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component {
  
  state = {
    weight: 0,
    height: 0,
    imc: 0,
    label: 'Preencha os dados abaixo',
    color: '#bdc3c7',
  };

  calcIMC = () => {
    const result = 
      this.state.weight / (this.state.height * this.state.height);

    this.setState({
      imc: Math.ceil(result)
    });

    if(result < 18.5) {
      this.setState({
        label: 'Magreza',
        color: '#e74c3c'
      });
    } else if (result >= 18.5 && result < 25) {
      this.setState({
        label: 'Normal',
        color: '#2ecc71'
      });
    } else if (result >= 25 && result < 30) {
     this.setState({
        label: 'Sobreweight',
        color: '#f1c40f'
      }); 
    } else if (result >= 30 && result < 40) {
      this.setState({
        label: 'Obesidade ',
        color: '#e67e22'
      }); 
    } else if (result >= 40) {
      this.setState({
        label: 'Obesidade Grave',
        color: '#e74c3c'
      }); 
    }
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.app}>
              <Text style={styles.label}>Seu IMC</Text>

              <View style={[styles.panel, {backgroundColor: this.state.color}]}>
                <Text style={styles.result}>{this.state.imc}</Text>
                <Text style={styles.diagnostic}>{this.state.label}</Text>
              </View>

              <View>
                <TextInput
                  style={styles.weight}
                  label="Seu Peso (Kg)"
                  onChangeText={value => {
                    this.setState({weight: value.replace(',', '.')});
                  }}
                />
                <TextInput
                  style={styles.height}
                  label="Sua Altura (m)"
                  onChangeText={value => {
                    this.setState({height: value.replace(',', '.')});
                  }}
                />
                <Button mode="contained" onPress={this.calcIMC}>
                  Calcular
                </Button>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  };
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  app: {
    padding: 10,
    backgroundColor: Colors.white,
  },
  panel: {
    alignSelf: 'center',
    borderRadius: 5,
    width: 150,
    marginVertical: 10,
    padding: 8,
  },
  label: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  result: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  diagnostic: {
    textAlign: 'center',
    fontSize: 16,
  },
  weight: {
    marginVertical: 10,
  },
  height: {
    marginVertical: 10,
  },
});
