import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

// Modif
import Home from "./screens/home/";
import LoginForm from "./screens/home/LoginForm";
import ProjectsList from "./screens/ProjectsList/";

import Default from "./screens/button/default";
import Outline from "./screens/button/outline";
import Rounded from "./screens/button/rounded";
import Block from "./screens/button/block";
import Full from "./screens/button/full";
import Custom from "./screens/button/custom";
import Transparent from "./screens/button/transparent";
import IconBtn from "./screens/button/iconBtn";
import Disabled from "./screens/button/disabled";
import BasicCard from "./screens/card/basic";
import NHCardItemBordered from "./screens/card/carditem-bordered";
import NHCardItemButton from "./screens/card/carditem-button";
import NHCardImage from "./screens/card/card-image";
import NHCardShowcase from "./screens/card/card-showcase";
import NHCardList from "./screens/card/card-list";
import NHCardHeaderAndFooter from "./screens/card/card-header-and-footer";
import NHCardTransparent from "./screens/card/card-transparent";
import NHButton from "./screens/button/";
import NHCard from "./screens/card/";
import NHCheckbox from "./screens/checkbox/";
import SideBar from "./screens/sidebar";

const Drawer = DrawerNavigator(
  {
    Home: { screen: Home },
    ProjectsList: { screen: ProjectsList },
    NHButton: { screen: NHButton },
    NHCard: { screen: NHCard },
    NHCheckbox: { screen: NHCheckbox }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = StackNavigator(
  {
    LoginForm: { screen: LoginForm },

    Drawer: { screen: Drawer },

    Default: { screen: Default },
    Outline: { screen: Outline },
    Rounded: { screen: Rounded },
    Block: { screen: Block },
    Full: { screen: Full },
    Custom: { screen: Custom },
    Transparent: { screen: Transparent },
    IconBtn: { screen: IconBtn },
    Disabled: { screen: Disabled },

    BasicCard: { screen: BasicCard },
    NHCardItemBordered: { screen: NHCardItemBordered },
    NHCardItemButton: { screen: NHCardItemButton },
    NHCardImage: { screen: NHCardImage },
    NHCardShowcase: { screen: NHCardShowcase },
    NHCardList: { screen: NHCardList },
    NHCardHeaderAndFooter: { screen: NHCardHeaderAndFooter },
    NHCardTransparent: { screen: NHCardTransparent },

  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
