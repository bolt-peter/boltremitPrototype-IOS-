import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Drawer } from 'native-base';
import { Button } from 'react-native-elements';
import { Container, Header, Content,  
        Item, Input, Label,
        Form,
        Icon,
        List, ListItem,
        Left, Body, Right, Thumbnail, Text } from 'native-base'


//Navigator
import { StackNavigator } from 'react-navigation';

//custome components
import Sidebar from './Sidebar/Sidebar';
import TransferHeader from './AppHeaders/TransferHeader'
import TransferSuccessPage from './TransferSuccessPage';

export default class TransferConfirmationPage extends Component {
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
    //fetch post request.
    self.props.navigation.navigate('TransferSuccessPage', {self: self});
  }
  render() {
    return (
              <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<Sidebar self = {this.props.navigation.state.params.self}/>}
                onClose={() => this.closeDrawer()} >

                <TransferHeader
                    openDrawer={this.openDrawer.bind(this)}
                />
                <Container
                style={{
                    marginTop: '5%',
                    marginLeft: '5%'
                }}>
                <Image 
                  style={{marginTop: '25%', marginLeft: '35%', width: 100, height: 100}}
                  source={{uri: 'https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-13-256.png'}}
                  />
                <Text style={{
                    color:'#304FFE',
                    marginLeft: '35%',
                    marginTop: '5%',
                    fontWeight: 'bold'
                }}> { this.props.navigation.state.params.recipient.name }</Text>
                <Container>
                    <Form style={{
                width: '83%'
            }}>
            <Item floatingLabel>
              <Label>You are sending exactly: </Label>
              <Input value={this.props.navigation.state.params.transferDetails.amount}/>
            </Item>
            <Item floatingLabel>
              <Label>Recipient will get: </Label>
              <Input value={this.props.navigation.state.params.transferDetails.converted}/>
            </Item>
            </Form>
            <Text style={{
                marginTop: '5%',
                marginLeft: '20%',
                color: '#03A9F4'
            }}> Current rate: {(<Text style={{color: '#FF4081'}}> 6.45</Text>)}</Text>
            <Text style={{
                marginLeft: '20%',
                color: '#03A9F4'
            }}> Fee: {(<Text style={{color: '#03A9F4'}}>$15HKD</Text>)}</Text>
                </Container>
                <Button
                raised
                onPress={() => this.handleConfirm()}
                style={{marginBottom: '20%'}}
                backgroundColor='#25CB68'
                title='Confirm!' />
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