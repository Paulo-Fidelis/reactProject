import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Input } from 'react-native-elements';
import { SafeAreaView } from 'react-native-web';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerheader}>
        <Text>Esqueceu a senha</Text>
      </View>
      <View style={styles.inputs}>
        <Text>email</Text>
        <Input></Input>
      </View>
      <View style={styles.button}>
        <Button
          title='enviar'
          color="#841584"/>
      </View>
    </SafeAreaView>
  );
}


function Login(){
  return (
    <SafeAreaView style={styles.container}>
      <AntDesign name="user" size={160} color="black"/>
     <View style={styles.inputs}> 
      <Text>Email</Text>
      <Input></Input>
      <Text>Senha</Text>
      <Input></Input>
      </View>
      <View style={[styles.button, {marginBottom: 20}]}>
        <Button
          title="login"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"/>
      </View>
      <View style={styles.button}>
        <Button
          title="cadastro"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"/>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function Cadastro(){
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerheader}>
        <Text>Cadastro</Text>
      </View>
      <View style={styles.inputs}>
        <Text>Nome</Text>
        <Input></Input>
        <Text>email</Text>
        <Input></Input>
        <Text>ssenha</Text>
        <Input></Input>
      </View>
      <View style={styles.button}>
        <Button
          title='Cadastro'
          color="#841584"/>
      </View>
    </SafeAreaView>
  );
}

function EsqueceuSenha(){
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerheader}>
        <Text>Esqueceu a senha</Text>
      </View>
      <View style={styles.inputs}>
        <Text>email</Text>
        <Input></Input>
      </View>
      <View style={styles.button}>
        <Button
          title='enviar'
          color="#841584"/>
      </View>
    </SafeAreaView>
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
    width:'80%',
    marginTop: 10,
    padding: 5,
  },
  containerheader: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
    marginBottom: 30,
    backgroundColor: '#f0f0f0',
  },
  inputs: {
    width: '60%',
    alignSelf: 'center',
    marginBottom: 20,
  },
});
