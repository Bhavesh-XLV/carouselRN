import React, {useState} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
const Login = ({navigation}: any) => {
  const [email, setEmail] = useState<any>('');
  const [password, setPassword] = useState<any>('');
  const emailValidater = (validateEmail: any) => {
    if (validateEmail.endsWith('@gmail.com')) {
      return true;
    }
    return false;
  };
  const passwordValidater = (validatePassword: any) => {
    const check = new RegExp(
      '((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))(?=.*[@#$%^&*]).{8,}',
    );
    return check.test(validatePassword);
  };
  const submitHandler = () => {
    if (emailValidater(email) && passwordValidater(password)) {
      navigation.navigate('Profile');
    } else {
      Alert.alert('Oops!', 'Enter valid Email and Password');
    }
  };
  const profileHandler = () => {
    navigation.navigate('Profile');
  };
  const carouselHandler = () => {
    navigation.navigate('Carousel');
  };
  return (
    <View style={styles.LoginScreen}>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={enteredText => setEmail(enteredText)}
        placeholder="Enter Email"
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={enteredText => setPassword(enteredText)}
        placeholder="Enter Password"
        placeholderTextColor="black"
      />
      <View style={styles.button}>
        <Button title="Submit" onPress={submitHandler} />
      </View>
      <View style={styles.button}>
        <Button title="Profile" onPress={profileHandler} />
      </View>
      <View style={styles.button}>
        <Button title="Carousel" onPress={carouselHandler} />
      </View>
    </View>
  );
};
<TextInput />;
export default Login;

const styles = StyleSheet.create({
  LoginScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 3,
    borderColor: 'red',
    width: '80%',
    height: 40,
    marginBottom: 10,
    borderRadius: 10,
    color: 'black',
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
  },
});
