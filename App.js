import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Input } from 'react-native-elements';



export default function App() {
  return (
    <View style={styles.container}>
      <AntDesign name="user" size={160} color="black"/>
      <Text>Email</Text>
      <Input></Input>
      <Text>Senha</Text>
      <Input></Input>
      <View styles={styles.button}>
        <Button
          title="login"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"/>
      </View>
      <View styles={styles.button}>
        <Button
          title="cadastro"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


function Login(){
  return (
    <View style={styles.container}>
      <AntDesign name="user" size={160} color="black"/>
      <Text>Email</Text>
      <Input></Input>
      <Text>Senha</Text>
      <Input></Input>
      <View styles={styles.button}>
        <Button
          title="login"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"/>
      </View>
      <View styles={styles.button}>
        <Button
          title="cadastro"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 50,
    padding: 50,
  },
});
