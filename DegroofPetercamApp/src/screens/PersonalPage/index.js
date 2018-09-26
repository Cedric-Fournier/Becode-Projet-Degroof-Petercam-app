import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Left,
  Right,
  Body,
  View, 
  Thumbnail,
  Text,
  H1,
  Badge
} from "native-base";
import styles from "./styles";

class PersonalPage extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Personal page</Title>
          </Body>
          <Right />
        </Header>
        <View style={styles.containerAv}>
          <Thumbnail large style={styles.avatar} source={require('../../../assets/logo-cc.png')} />
        </View>
        <Body style={styles.info}>
          <H1 style={styles.txt}>Cédric Fournier</H1>
          <Text style={styles.txt}>cedric.fournier@degroof.com</Text>
          <Text style={styles.txt}>Charleroi</Text>
        <View style={styles.badgesContainer}>
          <Badge success style={styles.badges}>
            <Text>Skills</Text>
          </Badge>
          <Badge success style={styles.badges}>
            <Text>Skills</Text>
          </Badge>
          <Badge success style={styles.badges}>
            <Text>Skills</Text>
          </Badge>
          <Badge success style={styles.badges}>
            <Text>Skills</Text>
          </Badge>
        </View>
          <H1 style={styles.txt}>8 / 24h</H1><Text>used</Text>
        </Body>
      </Container>
    );
  }
}

export default PersonalPage;
