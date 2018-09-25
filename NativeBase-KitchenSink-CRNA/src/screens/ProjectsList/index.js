import React, { Component } from "react";
import NHCardShowcase from "../card/card-showcase"
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body
} from "native-base";

import styles from "./styles";

class ProjectsList extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Projects list</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <NHCardShowcase/>
          <NHCardShowcase/>
          <NHCardShowcase/>
          <NHCardShowcase/>
          <NHCardShowcase/>

        </Content>

      </Container>
    );
  }
}

export default ProjectsList;
