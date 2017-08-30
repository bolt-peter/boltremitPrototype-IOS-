import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  Alert,
  Linking
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

// import Auth0 from 'react-native-auth0';
// const auth0 = new Auth0({ domain: 'boltremit.auth0.com', clientId: 'vQTOn2Xk2aXUKvSKR22Do2V8m5j9HwLA' });
// var {FBLogin, FBLoginManager} = require('react-native-facebook-login');
// import FBSDK, {LoginManager } from 'react-native-fbsdk'

import { StackNavigator } from 'react-navigation';
//custom components
export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        email: '',
        password: ''
        };
    }
    handleLogin(){
    // LoginManager.logInWithReadPermissions(['public_profile'])
    // .then(function(result){
    //     console.log(result);
    // })
    // fetch('https://boltremit.auth0.com/passwordless/start', {
    //     method: 'POST',
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         client_id: "vQTOn2Xk2aXUKvSKR22Do2V8m5j9HwLA",
    //         connection: "sms",
    //         phone_number: "+16505878903", //set for connection=sms
    //         send: "code", //if left null defaults to link
    //         })
    // })
    // auth0
    //     .auth
    //     .passwordRealm({username: "6505878903", password: "123", realm: "Username-Password-Authentication"})
    //     .then(console.log)
    //     .catch(console.error);
    // console.log('in');
    // console.log(this.state);
    const self = this;
    this.props.navigation.state.params.self.props.navigation.navigate('TransferMainPage', {self:self});
    }
    
  render(){
    return(
      <Container>
        <Grid>
            <Row size={3}>
            <Container>
            <Text style={{
                fontFamily: 'Avenir',
                color: '#3d5afe',
                fontSize: 36,
                marginTop: '5%',
                marginLeft: '2%'
            }}> Log in</Text>
            <Col style={{width: '70%'}}>
                <Form style={{marginLeft: '13%', marginTop: '80%'}}>
                    <Animatable.View animation='fadeInRight' easing='ease-in-out'>
                    <Item floatingLabel>
                    <Label>Username</Label>
                    <Input 
                    autoCapitalize='none'
                    onChangeText={(text) => this.setState({email: text})}/>
                    </Item>
                    </Animatable.View>
                    <Animatable.View animation='slideInRight' easing='ease-in-out'>
                    <Item floatingLabel>
                    <Label>Password</Label>
                    <Input 
                    autoCapitalize='none'
                    onChangeText={(text) => this.setState({password: text})}/>
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
              onPress={() => this.handleLogin()}
              buttonStyle={{width: '70%',marginLeft: '17%', borderRadius: 5}}
              title='Log in' />
              <Text style={{
                  marginTop: '2%',
                  marginLeft: '25%',
                  fontFamily: 'Avenir'
              }}> Forget username/password? </Text>
            </Col>
            </Row>
        </Grid>
    </Container>
    )
  }
}
