import React, {useState} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';

type LoginProp = {
  email: any;
  password: any;
};

type AppProp = {
  navigation: any;
};

class Login extends React.Component<AppProp> {
  constructor(props: AppProp) {
    super(props);
  }
  state: LoginProp = {
    email: '',
    password: '',
  };
  emailValidater = (validateEmail: any) => {
    if (validateEmail.endsWith('@gmail.com')) {
      return true;
    }
    return false;
  };
  passwordValidater = (validatePassword: any) => {
    const check = new RegExp(
      '((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))(?=.*[@#$%^&*]).{8,}',
    );
    return check.test(validatePassword);
  };
  submitHandler = () => {
    if (
      this.emailValidater(this.state.email) &&
      this.passwordValidater(this.state.password)
    ) {
      Alert.alert('Successful');
      this.props.navigation.navigate('Profile');
    } else {
      Alert.alert('Oops!', 'Enter valid Email and Password');
    }
  };
  profileHandler = () => {
    this.props.navigation.navigate('Profile');
  };
  carouselHandler = () => {
    this.props.navigation.navigate('Carousel');
  };
  render() {
    return (
      <View style={styles.LoginScreen}>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={enteredText => this.setState({email: enteredText})}
          placeholder="Enter Email"
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={enteredText => this.setState({password: enteredText})}
          placeholder="Enter Password"
          placeholderTextColor="black"
        />
        <View style={styles.button}>
          <Button title="Submit" onPress={this.submitHandler} />
        </View>
        <View style={styles.button}>
          <Button title="Profile" onPress={this.profileHandler} />
        </View>
        <View style={styles.button}>
          <Button title="Carousel" onPress={this.carouselHandler} />
        </View>
      </View>
    );
  }
}

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
