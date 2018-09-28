import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

// Modif
import Home from "./screens/home/";
import SideBar from "./screens/sidebar";
import LoginForm from "./screens/home/LoginForm";
import PersonalPage from "./screens/PersonalPage/";
import ProjectsList from "./screens/ProjectsList/";
import NHCardShowcase from "./screens/ProjectsList/card-showcase";
import ProjectPage from "./screens/ProjectsList/project-details";
import MyMissions from "./screens/MyMissions/";
import Archives from "./screens/Archives/";


const Drawer = DrawerNavigator(
  {
    Home: { screen: Home },
    PersonalPage: { screen: PersonalPage },
    ProjectsList: { screen: ProjectsList },
    MyMissions: { screen: MyMissions},
    Archives: { screen: Archives },
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
    NHCardShowcase: { screen: NHCardShowcase },
    ProjectPage: { screen: ProjectPage }
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
