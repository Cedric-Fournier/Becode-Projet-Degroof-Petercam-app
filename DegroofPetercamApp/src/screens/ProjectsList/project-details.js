import React, { Component } from "react";
import { Image, Dimensions } from "react-native";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text,
  Content,
  View
} from "native-base";
import styles from "./styles";

const deviceWidth = Dimensions.get("window").width;
const cardImage = require("../../../assets/cc-cover.png");


class ProjectPage extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("ProjectsList")}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Project One</Title>
          </Body>
          <Right />
        </Header>
        <Content>
         <Image
            style={{
              marginTop: 20,
              alignSelf: "center",
              height: 150,
              resizeMode: "cover",
              width: deviceWidth / 1.18,
              marginVertical: 5
            }}
            source={cardImage}
          />
          <Text style={{margin:25, justifyContent:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget neque euismod, tincidunt risus at, viverra lacus. In gravida nunc sed ex sollicitudin ultrices. Vivamus luctus, neque at facilisis euismod, turpis diam finibus libero, at malesuada risus eros a justo. Quisque dictum, quam vitae finibus blandit, erat urna imperdiet nisl.</Text>
          <View style={styles.apply}>
            <Button primary>
              <Text>Apply</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default ProjectPage;
