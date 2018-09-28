import React, { Component } from 'react';
import { Container, DatePicker, Text, Icon } from 'native-base';

class DatePickerCard extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    return (
      <Container style={{flexDirection:'row', flexWrap:'wrap'}}>
          <Icon name="calendar"/>
          <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            />
            <Text style={{marginTop: 10}}>
            Date: {this.state.chosenDate.toString().substr(4, 12)}
          </Text>
      </Container>
    );
  }
}

export default DatePickerCard;