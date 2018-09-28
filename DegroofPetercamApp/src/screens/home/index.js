import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, Text } from "native-base";
import LoginForm from "./LoginForm";

import { firebaseAuth } from "../../config/Firebase";

import styles from "./styles";

const launchscreenBg = require("../../../assets/launchscreen-bg.png");
const launchscreenLogo = require("../../../assets/logo-kitchen-sink.png");

class Home extends Component {

  // Trouver comment mettre le connected en true sur les autres pages, récupèrer avec un props ? state ? ETC !!!

  constructor(props) {
    super(props);
    this.state = {
      email: 'enter your email',
      password: 'enter your password',
      connected: false
    };
  }

  onSend(input) {
    // alert(input.email);
    this.setState({ email: input.email, password: input.pwd });
    this.signInFirebase();
  }

  // submitNewUser() {
  //   firebaseAuth.createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function (error) {
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     // En construction
  //   });
  // }

  signInFirebase() {

    let email = "massimo@hotmail.com";
    let password = "azerty";
    // this.state. a remettre 
    firebaseAuth.signInWithEmailAndPassword(email, password).then((user) => {
      if (user) {
        alert('You\'re connected');
        this.setState({ connected: true });
        this.props.navigation.navigate("ProjectsList");
      }
    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert('Please enter your email and password');
    });
  }

  signOutFirebase() {
    firebaseAuth.signOut().then(function () {
      alert("You\'re disconnected");
    }).catch(function (error) {
      alert("Disconnection error");
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
