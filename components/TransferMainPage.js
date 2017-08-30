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

//StackNavigator
import { StackNavigator } from 'react-navigation';

//custome components
import Sidebar from './Sidebar/Sidebar';
import TransferHeader from './AppHeaders/TransferHeader';
import ExchangeRateHeader from './AppHeaders/ExchangeRateHeader';

import TransferListPage from './TransferListPage';
export default class TransferMainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      amount: 1000,
      converted: ''
    }
  }
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  componentDidMount(){
    console.log(this.props.navigation.state.params.self);
  }
  handleSend(){
      var self = this.props.navigation.state.params.self;
      self.props.navigation.navigate('TransferListPage', {self: self, transferDetails: this.state});
  }
  render() {
    return (
              <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<Sidebar self = {this.props.navigation.state.params.self}/>}
                onClose={() => this.closeDrawer()} >
                <ExchangeRateHeader
                    openDrawer={this.openDrawer.bind(this)}
                />
                <Container
                style={{
                    marginTop: '35%',
                    marginLeft: '5%'
                }}>
                <Container>
                    <Form style={{
                width: '83%'
            }}>
            <Item floatingLabel>
              <Label>You are sending exactly: </Label>
              <Input 
              onChangeText={(amount) => {
                this.setState({amount: amount})
                this.setState({converted: amount})
                }}
              />
            </Item>
            <Item floatingLabel>
              <Label>Recipient will get: </Label>
              <Input 
              value={this.state.converted}
              />
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
                onPress={() => this.handleSend()}
                style={{marginBottom: '20%'}}
                backgroundColor='#25CB68'
                title='Send!' />
                </Container>
                </Drawer>
    );
  }
}

StackNavigator({
  TransferListPage: {
    screen: TransferListPage,
    navigationOptions: {
      header: null,
      headerLeft: null
    }
  }
})