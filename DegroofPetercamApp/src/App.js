import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

// Modif
import Home from "./screens/home/";
import LoginForm from "./screens/home/LoginForm";
import ProjectsList from "./screens/ProjectsList/";
import ProjectPage from "./screens/ProjectsList/project-details";
import NHCardShowcase from "./screens/ProjectsList/card-showcase";
import SideBar from "./screens/sidebar";
import PersonalPage from "./screens/PersonalPage/";
import MyMissions from "./screens/MyMissions/";
import Archives from "./screens/Archives/";


const Drawer = DrawerNavigator(
  {
    Home: { screen: Home },
    ProjectsList: { screen: ProjectsList },
    PersonalPage: { screen: PersonalPage },
    MyMissions: { screen: MyMissions},
    Archives: { screen: Archives }
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
    ProjectPage: { screen: ProjectPage },
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
