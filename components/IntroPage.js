import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { Container } from 'native-base';
export default class LoginButton extends React.Component {
    render(){
        return(
            <Container>
            <Button
              raised
              onPress={() => this.props.handleLogin()}
              buttonStyle={{width: '90%',marginLeft: '5%', borderRadius: 5}}
              title='Log in' />
              <Button
                raised
                onPress={() => this.props.handleRegister()}
                buttonStyle={{width: '90%',marginLeft: '5%', marginTop: '2%', borderRadius: 5}}
                title='Register' />
            </Container>
        )
    }
}

