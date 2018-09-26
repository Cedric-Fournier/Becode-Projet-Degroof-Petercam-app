import React, { Component } from "react";
import {
  Content,
  Button,
  Item,
  Label,
  Input,
  Icon,
  Form,
  Text
} from "native-base";


class LoginForm extends Component {
  render() {
    return (

        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry />
            </Item>
          </Form>
          {/* <Button rounded primary
            style={{ alignSelf: "center", marginTop: 25 }}
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
          >
            <Text>Lets Go!</Text>
          </Button> */}

        </Content>

    );
  }
}

export default LoginForm;
