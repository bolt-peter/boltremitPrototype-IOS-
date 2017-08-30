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
import { Container, 
         Footer, 
         FooterTab, 
         Content, 
         Header, Title, Left, Right, Body, Badge } from 'native-base';


//Navigator
import { StackNavigator } from 'react-navigation';
//CUSTOM Components
import IntroPage from './components/IntroPage';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import PhoneVerification from './components/PhoneVerification';
import IdFrontPage from './components/IdFrontPage';
import IdBackPage from './components/IdBackPage';
import MainPage from './components/MainPage';
import RecipientsPage from './components/RecipientsPage';
import ActivityPage from './components/ActivityPage';
import AddRecipientPage from './components/AddRecipientPage';
import EditRecipientPage from './components/EditRecipientPage';
import NewRecipientPage from './components/NewRecipientPage';
import TopUpPage from './components/TopUpPage';
import TopUpDonePage from './components/TopUpDonePage';
import ReceiptPage from './components/ReceiptPage';
import TransferMainPage from './components/TransferMainPage'
import TransferListPage from './components/TransferListPage';
import TransferConfirmationPage from './components/TransferConfirmationPage';
import TransferSuccessPage from './components/TransferSuccessPage';

const self = null;
class App extends Component {
  handleLogin_Navigation(){
    self = this;
    this.props.navigation.navigate('LoginPage', {self: self})
  } 
  handleRegister_Navigation(){
    this.props.navigation.navigate('PhoneVerification')
  }
  handlePhoneVerification_Navigation(){
    console.log('in');
  }
  render(){
    return(
      <Container>
        <Grid>
            <Row size={3}></Row>
             <Row size={1}> 
               <IntroPage 
                handleLogin={() => this.handleLogin_Navigation()}
                handleRegister={() => this.handleRegister_Navigation()}
                handlePhoneVerification={() => this.handlePhoneVerification_Navigation()}
               />
            </Row>
        </Grid>
    </Container>
    )
  }
}

export default StackNavigator({
  FirstPage: {
    screen: App
  },
  LoginPage: {
    screen: LoginPage
  },
  RegistrationPage: {
    screen: RegistrationPage
  },
  PhoneVerification: {
    screen: PhoneVerification
  },
  IdFrontPage: {
    screen: IdFrontPage
  },
  IdBackPage: {
    screen: IdBackPage
  },
  MainPage: {
    screen: MainPage,
    navigationOptions: {
      header: null,
      headerLeft: null,
    },
  },
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
  TransferMainPage:{
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
  },
  AddRecipientPage:{
    screen: AddRecipientPage,
    navigationOptions: {
      header: null,
      headerLeft: null
    }
  }
}, {initialRouteName: 'FirstPage'});