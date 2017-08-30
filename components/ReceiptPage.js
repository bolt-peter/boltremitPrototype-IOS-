import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Drawer } from 'native-base';
import { Button } from 'react-native-elements';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base'


//StackNavigator
import { StackNavigator } from 'react-navigation';

//custome components
import Sidebar from './Sidebar/Sidebar';
import ActivityHeader from './AppHeaders/ActivityHeader'
import TopUpPage from './TopUpPage'



export default class ReceipientPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      status: 'Loading',
      orderNumber: 'Loading'
    }
  }
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  componentDidMount(){
    //fetcha get request and set state
  }
  handSendMore(){
    const self = this.props.navigation.state.params.self;
    const recipient = this.props.navigation.state.params.recipient;
    self.props.navigation.navigate('TopUpPage', {self: self, recipient: recipient})
  }
  render() {
    return (
              <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<Sidebar self = {this.props.navigation.state.params.self}/>}
                onClose={() => this.closeDrawer()} >

                <ActivityHeader
                    openDrawer={this.openDrawer.bind(this)}
                />
                <Container
                style={{
                    marginTop: '5%',
                    marginLeft: '5%'
                }}>
                <Image 
                  style={{marginTop: '35%', marginLeft: '35%', width: 100, height: 100}}
                  source={{uri: 'https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-13-256.png'}}
                  />
                <Text style={{
                    color:'#304FFE',
                    marginLeft: '35%',
                    marginTop: '5%',
                    fontWeight: 'bold'
                }}> Cayaha Ali</Text>
                <Container style={{
                  marginLeft: '20%'
                }}>
                 <Text style={{
                    fontSize: 14,
                    fontFamily: 'Avenir'
                }}>Transaction amount: {(<Text> {this.props.navigation.state.params.recipient.amount}</Text>)}</Text>
                <Text style={{
                    fontSize: 14,
                    fontFamily: 'Avenir'
                }}>Order placed: {(<Text> {this.props.navigation.state.params.recipient.date} </Text>)}</Text>
                <Text style={{
                    fontSize: 14,
                    fontFamily: 'Avenir'
                }}>Status: {(<Text> {this.state.status }</Text>)}</Text>
                <Text style={{
                    fontSize: 14,
                    fontFamily: 'Avenir'
                }}>Order number: {(<Text>{this.state.orderNumber}</Text>)}</Text>
                </Container>
                <Button
                raised
                onPress={() => this.handSendMore()}
                style={{marginBottom: '20%'}}
                backgroundColor='#25CB68'
                title='Send more money!' />
                </Container>
                </Drawer>
    );
  }
}


StackNavigator({
  TopUpPage: {
    screen: TopUpPage,
    navigationOptions: {
      header: null,
      headerLeft: null
    }
  } 
})