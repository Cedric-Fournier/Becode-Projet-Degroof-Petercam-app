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
} from "native-base";
import styles from "./styles";

class ProjectPage extends Component {
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
            <Title>{this.props.projectTitle}</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}

export default ProjectPage;
