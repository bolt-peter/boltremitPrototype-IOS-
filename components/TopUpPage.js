import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Drawer } from 'native-base';
import { Button } from 'react-native-elements';
import { Container, Header, Content,  
        Item, Input, Label,
        Form,
        Icon, Left, Body, Right, Thumbnail, Text } from 'native-base'

//Navigator
import { StackNavigator } from 'react-navigation';


//custome components
import Sidebar from './Sidebar/Sidebar';
import TopUpHeader from './AppHeaders/TopUpHeader'
import TransferSuccessPage from './TransferSuccessPage'


export default class TopUpPage extends Component {
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  handleConfirm(){
    const self = this.props.navigation.state.params.self;
    const recipient = this.props.navigation.state.params.recipient;
    const transferDetails = this.props.navigation.state.params.transferDetails;
    self.props.navigation.navigate('TransferSuccessPage', {self: self, recipient:recipient, transferDetails:transferDetails });

  }
  render() {
    return (
              <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<Sidebar self={this.props.navigation.state.params.self}/>}
                onClose={() => this.closeDrawer()} >

                <TopUpHeader
                    openDrawer={this.openDrawer.bind(this)}
                />
                <Container
                style={{
                    marginTop: '5%'
                }}>
<Container>
        <Text style={{
            fontSize: 14,
            fontFamily: 'Avenir'
        }}> {`
        Please go to our nearest Citibank ATMs to top 
        up your account, then follow 
        these instructions:
        ` }</Text>
        <Text style={{
            fontSize: 14,
            fontFamily: 'Avenir'
        }}>
        { `
        1. Type in our account number: 987654321


        2. Select “Deposit Cash” 


        3. Type in your reference code (shown above)      
        `}    
        </Text>
        <Text style={{
            fontSize: 14,
            fontFamily: 'Avenir'
        }}>{`
        4. Insert the amount of cash you want to top up your 
            account with 
            `}
        </Text>
        <Text style={{
            fontSize: 14,
            fontFamily: 'Avenir'
        }}>{`
        5. After you recieve your recipet from the ATM, 
            click the button below to complete top up.
            `}
        </Text>
        <Button
          backgroundColor='#25CB68'
          style={{marginTop: '10%'}}
          title="Confirm!"
          onPress={() => this.handleConfirm()}
        />
</Container>
                
                </Container>
                </Drawer>
    );
  }
}

StackNavigator({
  TransferSuccessPage: {
    screen: TransferSuccessPage,
    navigationOptions: {
      header: null,
      headerLeft: null
    }
  } 
})