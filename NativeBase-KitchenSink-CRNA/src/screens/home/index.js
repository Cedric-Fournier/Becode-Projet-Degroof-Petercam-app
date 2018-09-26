import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, Text } from "native-base";
import LoginForm from "./LoginForm";

import styles from "./styles";

const launchscreenBg = require("../../../assets/launchscreen-bg.png");
const launchscreenLogo = require("../../../assets/logo-kitchen-sink.png");

class Home extends Component {

  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content"/>
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            <ImageBackground source={launchscreenLogo} style={styles.logo} />
          </View>
          <View style={styles.float}>
          <LoginForm/>
          <Button rounded primary
            style={{ alignSelf: "center", marginTop: 25 }}
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
          >
            <Text>Lets Go!</Text>
          </Button>
          </View>

        </ImageBackground>
      </Container>
    );
  }
}

export default Home;
