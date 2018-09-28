import React, { Component } from "react";
import { Image } from "react-native";
import { Content, Text, List, ListItem, Icon, Container, Left, Right, Badge } from "native-base";
import styles from "./style";

const drawerCover = require("../../../assets/drawer-cover.png");
const drawerImage = require("../../../assets/logo-kitchen-sink.png");
const datas = [
  {
    name: "Personal page",
    route: "PersonalPage",
    icon: "person",
  },
  {
    name: "Projects list",
    route: "ProjectsList",
    icon: "md-paper",
    bg: "#4FBC83",
    types: "9"
  },
  {
    name: "My missions",
    route: "MyMissions",
    icon: "bookmark",
    bg: "#FF4632",
    types: "2"
  },
  {
    name: "History",
    route: "Archives",
    icon: "archive",
    bg: "#EB6B23"
  },
    {
    name: "Logout",
    route: "Home",
    icon: "md-log-out",
    bg: "#EB6B23"
  },
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          <Image square style={styles.drawerImage} source={drawerImage} />

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} News`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
