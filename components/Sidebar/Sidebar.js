import React, { Component } from 'react';
import { Drawer } from 'native-base';
import {
  Text,
  Image
} from 'react-native';
import Hr from 'react-native-hr'
import {Content} from 'native-base';
import {Container, 
        Header,
        Left,
        Button,Right,Body,Title} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/FontAwesome';

//custome components
import MainPage from '../MainPage';
import RecipientsPage from '../RecipientsPage';
import ActivityPage from '../ActivityPage';
import EditRecipientPage from '../EditRecipientPage';
import NewRecipientPage from '../NewRecipientPage';
import TopUpPage from '../TopUpPage';
import TopUpDonePage from '../TopUpDonePage';
import ReceiptPage from '../ReceiptPage';
import TransferMainPage from '../TransferMainPage'
import TransferListPage from '../TransferListPage';
import TransferConfirmationPage from '../TransferConfirmationPage';
import TransferSuccessPage from '../TransferSuccessPage';

import { StackNavigator } from 'react-navigation';

export default class Sidebar extends Component {

  componentDidMount(){
    console.log(this.props.self);
  }
  render() {
    return (
            <Grid>
              <Row size={1}style={{backgroundColor: '#9D46FF'}}>
                <Container>
                  <Image 
                  style={{marginLeft: '5%',marginTop: '10%',width: 70, height: 70}}
                  source={{uri:'https://thecityprincessdotcom.files.wordpress.com/2014/02/profile-in-circle.png'}}/>
                <Text style={{
                  marginLeft: '5%',
                  marginTop: '7%',
                  color: '#FFFFFF'}}> Jeff Bezos </Text>
                </Container>
              </Row>
              <Row size={3} style={{
                backgroundColor: '#FFFFFF'
              }}>
        <Container
              style={{
                flexDirection: 'column',
                padding: '10%'
              }}>
            <Icon.Button
            iconStyle={{
              color: 'black',
              marginBottom: '10%'
            }} 
            onPress={() => {
              const self = this.props.self;
              this.props.self.props.navigation.navigate('TransferMainPage', {self: self})
              }}
            backgroundColor='#FFFFFF'
            name="bolt">
              <Text style={{fontFamily: 'Arial', fontSize: 15 ,marginBottom:'10%'}}>Exchange Rate</Text>
            </Icon.Button>
            <Icon.Button 
            onPress={() => {
              const self = this.props.self;
              this.props.self.props.navigation.navigate('TransferListPage', {self: self})
              }} 
            iconStyle={{
              color: 'black',
              marginBottom: '10%'
            }}
            backgroundColor='#FFFFFF'
            name="usd">
              <Text style={{fontFamily: 'Arial', fontSize: 15, marginBottom: '10%'}}>Transfer</Text>
            </Icon.Button>
            <Icon.Button 
            iconStyle={{
              color: 'black',
              marginBottom: '10%'
            }}
            onPress={() => {
              const self = this.props.self;
              this.props.self.props.navigation.navigate('ActivityPage', {self: self})
              }} 
            backgroundColor='#FFFFFF'
            name="rocket">
              <Text style={{fontFamily: 'Arial', fontSize: 15, marginBottom: '10%'}}>Acitivity</Text>
            </Icon.Button>
            <Icon.Button 
            iconStyle={{
              color: 'black',
              marginBottom: '10%'
            }}
            onPress={() => {
              const self = this.props.self;
              this.props.self.props.navigation.navigate('RecipientsPage', {self: self})
              }} 
            backgroundColor='#FFFFFF'
            name="home">
              <Text style={{fontFamily: 'Arial', fontSize: 15, marginBottom: '10%'}}>Recipients</Text>
            </Icon.Button>
             <Hr 
             style={{
               marginTop: '10%'
             }}
             lineColor='#b3b3b3' text='You and Bolt~' textColor='steelblue' />
             <Container
             style={{
               marginTop: '10%'
             }}>
              <Text style={{
                marginBottom:'5%'
              }}>Profile</Text>
              <Text style={{
                marginBottom:'5%'
              }}>Settings</Text>
              <Text style={{
                marginBottom:'5%'
              }}>Help</Text>
              </Container>
        </Container>
              </Row>
            </Grid>
    );
  }
}

StackNavigator({
  RecipientsPage: {
    screen: RecipientsPage,
    navigationOptions: {
      header: null,
      headerLeft: null
    }
  },
  ActivityPage: {
    screen: ActivityPage,
    navigationOptions: {
      header: null,
      headerLeft: null
    }
  },
  EditRecipientPage: {
    screen: EditRecipientPage,
    navigationOptions: {
      header: null,
      headerLeft: null
    }
  },
  NewRecipientPage: {
    screen: NewRecipientPage,
    navigationOptions: {
      header: null,
      headerLeft: null
    }
  },
  TopUpPage: {
    screen: TopUpPage,
    navigationOptions: {
      header: null,
      headerLeft: null
    }
  },
  TopUpDonePage: {
    screen: TopUpDonePage,
    navigationOptions: {
      header: null,
      headerLeft: null
    }
  },
  ReceiptPage: {
    screen: ReceiptPage,
    navigationOptions: {
      header: null,
      headerLeft: null
    }
  },
  TransferMainPage: {
    screen: TransferMainPage,
    navigationOptions: {
      header: null,
      headerLeft: null
    }
  },
  TransferListPage: {
    screen: TransferListPage,
    navigationOptions: {
      header: null,
      headerLeft: null
    }
  },
  TransferConfirmationPage: {
    screen: TransferConfirmationPage,
    navigationOptions: {
      header: null,
      headerLeft: null
    }
  },
  TransferSuccessPage: {
    screen: TransferSuccessPage,
    navigationOptions: {
      header: null,
      headerLeft: null
    }
  }
});