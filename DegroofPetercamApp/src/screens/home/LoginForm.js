import React, { Component } from "react";
import { Content, Item, Label, Input, Form, Button, Text } from "native-base";


class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
    }
  }

  sendData(){
    this.props.onSend({email: this.state.email, pwd: this.state.password})
  }

  render() {
    return (
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              value={this.state.email}
              onChangeText={(email) => this.setState({email})}
              autoCapitalize = 'none'
            />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input secureTextEntry 
              value={this.state.password}
              onChangeText={(password) => this.setState({password})}
              autoCapitalize = 'none'
            />
          </Item>
          <Button rounded primary
              style={{ alignSelf: "center", marginTop: 25 }}
              onPress={this.sendData.bind(this)}
            >
              <Text>Lets Go!</Text>
            </Button>
        </Form>
      </Content>
    );
  }
}

export default LoginForm;