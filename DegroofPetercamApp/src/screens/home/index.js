import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, Text } from "native-base";
import LoginForm from "./LoginForm";

import { firebaseAuth } from "../../config/Firebase";

import styles from "./styles";

const launchscreenBg = require("../../../assets/launchscreen-bg.png");
const launchscreenLogo = require("../../../assets/logo-kitchen-sink.png");

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: 'enter your email',
      password: 'enter your password'
    };
  }

  onSend(input) {
    alert(input.email)
    this.setState({ email: input.email, password: input.pwd });
    this.signInFirebase()
  }

  submitNewUser() {
    firebaseAuth.createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }

  signInFirebase() {

    // let email = "massimo@petercam.com";
    // let password = "azerty";
    firebaseAuth.signInWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
      if (user) {
        alert('Successfully connected');
        this.setState({connected: true})
      }
    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      //alert(errorMessage, this.state.email)
    });
  }

  signOutFirebase() {
    firebaseAuth.signOut().then(function () {
      // alert("Deconnexion");
    }).catch(function (error) {
      // alert("Error Deconnexion");
    });
  }

  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            <ImageBackground source={launchscreenLogo} style={styles.logo} />
          </View>
          <View style={styles.float}>
            <LoginForm onSend={this.onSend.bind(this)} />
          </View>

        </ImageBackground>
      </Container>
    );
  }
}

export default Home;

