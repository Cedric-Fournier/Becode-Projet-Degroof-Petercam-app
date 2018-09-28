import React, { Component } from "react";
import { Image, Dimensions } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Thumbnail,
  Left,
  Body
} from "native-base";
import styles from "./styles";

const deviceWidth = Dimensions.get("window").width;
const logo = require("../../../assets/logo-cc.png");
const cardImage = require("../../../assets/cc-cover.png");

class NHCardShowcase extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content padder>
          <Card style={styles.mb}>
            <CardItem bordered>
              <Left>
                <Thumbnail source={logo} />
                <Body>
                  <Text>{this.props.projectTitle}</Text>
                  <Text note>{this.props.projectDate}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  style={{
                    alignSelf: "center",
                    height: 150,
                    resizeMode: "cover",
                    width: deviceWidth / 1.18,
                    marginVertical: 5
                  }}
                  source={cardImage}
                />
                <Text>{this.props.projectText}</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default NHCardShowcase;
