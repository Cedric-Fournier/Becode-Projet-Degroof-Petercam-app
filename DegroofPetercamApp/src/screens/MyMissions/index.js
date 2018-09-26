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
  Content,
} from "native-base";
import styles from "./styles";
import AdvancedDeck from "./card-deck.js";

class MyMissions extends Component {
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
            <Title>My Missions</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <AdvancedDeck/>
        </Content>
      </Container>
    );
  }
}

export default MyMissions;