import React, { Component } from "react";
import NHCardShowcase from "./card-showcase";
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
          <NHCardShowcase projectTitle={"Project 1"} projectDate={"April 15, 2018"} projectText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget neque euismod, tincidunt risus at, viverra lacus. In gravida nunc sed ex sollicitudin ultrices. Vivamus luctus, neque at facilisis euismod, turpis diam finibus libero, at malesuada risus eros a justo. Quisque dictum, quam vitae finibus blandit, erat urna imperdiet nisl."}/>
          <NHCardShowcase projectTitle={"Project 2"} projectDate={"June 22, 2018"} projectText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget neque euismod, tincidunt risus at, viverra lacus. In gravida nunc sed ex sollicitudin ultrices. Vivamus luctus, neque at facilisis euismod, turpis diam finibus libero, at malesuada risus eros a justo. Quisque dictum, quam vitae finibus blandit, erat urna imperdiet nisl."}/>
          <NHCardShowcase projectTitle={"Project 3"} projectDate={"June 22, 2018"} projectText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget neque euismod, tincidunt risus at, viverra lacus. In gravida nunc sed ex sollicitudin ultrices. Vivamus luctus, neque at facilisis euismod, turpis diam finibus libero, at malesuada risus eros a justo. Quisque dictum, quam vitae finibus blandit, erat urna imperdiet nisl."}/>
          <NHCardShowcase projectTitle={"Project 4"} projectDate={"June 22, 2018"} projectText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget neque euismod, tincidunt risus at, viverra lacus. In gravida nunc sed ex sollicitudin ultrices. Vivamus luctus, neque at facilisis euismod, turpis diam finibus libero, at malesuada risus eros a justo. Quisque dictum, quam vitae finibus blandit, erat urna imperdiet nisl."}/>
          <NHCardShowcase projectTitle={"Project 5"} projectDate={"June 22, 2018"} projectText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget neque euismod, tincidunt risus at, viverra lacus. In gravida nunc sed ex sollicitudin ultrices. Vivamus luctus, neque at facilisis euismod, turpis diam finibus libero, at malesuada risus eros a justo. Quisque dictum, quam vitae finibus blandit, erat urna imperdiet nisl."}/>

        </Content>

      </Container>
    );
  }
}

export default ProjectsList;
