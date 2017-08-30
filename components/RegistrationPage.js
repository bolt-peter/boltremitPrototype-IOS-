import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  Alert
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Button } from 'react-native-elements'
import { Form,
         Item,
         Label,
         Container, 
         Input,
         Header, Title, Left, Right, Body, Badge } from 'native-base';


import * as Animatable from 'react-native-animatable';



//custome components

export default class RegistrationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: this.props.navigation.state.params.phoneNumber,
      username: '',
      password: '',
      repassword: ''
    };
  }
  handleRegistration(){
    var self = this;
    console.log(this.props.navigation.state.params);
    fetch('http://localhost:3000/registration', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    })
    .then(function(resp){
      return resp.json();
    })
    .then(function(resp){
     if(resp === 'success'){
     }
    })
  }
  render(){
    return(
      <Container>
        <Grid>
            <Row size={3}>
            <Container>
            <Text style={{
                fontFamily: 'Avenir',
                color: '#304FFE',
                fontSize: '36',
                marginTop: '5%',
                marginLeft: '2%'
            }}> Register </Text>
            <Col style={{width: '80%'}}>
                <Form style={{marginLeft: '13%', marginTop: '5%'}}>
                    <Animatable.View animation='fadeInRight' easing='ease-in-out'>
                    <Item floatingLabel>
                    <Label>Your username</Label>
                    <Input 
                    onChangeText={(text) => this.setState({username: text})}/>
                    </Item>
                    </Animatable.View>
                    <Animatable.View animation='slideInRight' easing='ease-in-out'>
                    <Item floatingLabel>
                    <Label>Your password</Label>
                    <Input onChangeText={(text) => this.setState({password: text})}/>
                    </Item>
                    </Animatable.View>
                    <Animatable.View animation='slideInRight' easing='ease-in-out'>
                    <Item floatingLabel>
                    <Label>Re-enter your password</Label>
                    <Input onChangeText={(text) => this.setState({repassword: text})}/>
                    </Item>
                    </Animatable.View>
                </Form>
            </Col>
            </Container>
            </Row>
             <Row size={1}> 
            <Col>
             <Button
              raised
              onPress={() => this.handleRegistration()}
              buttonStyle={{width: '70%',marginLeft: '17%', borderRadius: '5px'}}
              title='Register' />
            </Col>
            </Row>
        </Grid>
    </Container>
    )
  }
}