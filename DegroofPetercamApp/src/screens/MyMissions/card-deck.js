import React, { Component } from "react";
import { Image, View } from "react-native";
import {
  Container,
  Button,
  DeckSwiper,
  Card,
  CardItem,
  Icon,
  H1,
  Text,
  Left,
  Body,
} from "native-base";
import styles from "./styles";
import DatePickerCard from "./date-picker";

const cardOne = require("../../../assets/cc-cover.png");
const cardTwo = require("../../../assets/drawer-cover.png");
const cardThree = require("../../../assets/cc-cover.png");
const cardFour = require("../../../assets/drawer-cover.png");
const cards = [
  {
    name: "Project One",
    description: "Workshop on Firebase",
    date: "29/08/2019",
    image: cardOne,
    phone: '02789611',
    email: 'm.vandeputte@gmail.com',
    location: 'Antwerp',
  },
  {
    name: "Project Two",
    description: "",
    date: "",
    image: cardTwo,
    phone: '',
    email: '',
    location: '',
  },
  {
    name: "Project Three",
    description: "",
    date: "",
    image: cardThree,
    phone: '',
    email: '',
    location: '',
  },
  {
    name: "Project Four",
    description: "",
    date: "",
    image: cardFour,
    phone: '',
    email: '',
    location: '',
  }
];

class AdvancedDeck extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <View style={{ flex: 1, padding: 12 }}>
          <DeckSwiper
            ref={mr => (this._deckSwiper = mr)}
            dataSource={cards}
            looping={true}
            renderEmpty={() =>
              <View style={{ alignSelf: "center" }}>
                <Text>Over</Text>
              </View>}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Body>
                      <H1>
                        {item.name}
                      </H1>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image
                    style={{
                      resizeMode: "cover",
                      width: null,
                      flex: 1,
                      height: 200
                    }}
                    source={item.image}
                  />
                </CardItem>
                <CardItem>
                  <Icon name="md-paper"/>
                  <Text>
                    {item.description}
                  </Text>
                </CardItem>
                <CardItem>
                  <Icon name="phone-portrait"/>
                  <Text>
                    {item.phone}
                  </Text>
                </CardItem>
                <CardItem>
                  <Icon name="mail"/>
                  <Text>
                    {item.email}
                  </Text>
                </CardItem>
                <CardItem>
                  <Icon name="compass"/>
                  <Text>
                    {item.location}
                  </Text>
                </CardItem>
                <CardItem> 
                  <DatePickerCard/>
                </CardItem>
              </Card>}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            position: "absolute",
            bottom: 50,
            left: 0,
            right: 0,
            justifyContent: "space-between",
            padding: 15
          }}
        >
          <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
            <Icon name="arrow-back" />
            <Text>Swipe Left</Text>
          </Button>
          <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
            <Text>Swipe Right</Text>
            <Icon name="arrow-forward" />
          </Button>
        </View>
      </Container>
    );
  }
}

export default AdvancedDeck;