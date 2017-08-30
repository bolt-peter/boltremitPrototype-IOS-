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



export default class TransferConfirmationPage extends Component {
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  handleHome(){
    const self = this.props.navigation.state.params.self;
    self.props.navigation.navigate('TransferMainPage', {self: self});
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
                <Text style={{
                    marginTop: '30%',
                    fontSize: 14
                }}>{`
        Thank you for using Bolt!

        Cayaha Ali will be notified when the money 
        arrives and where to pick it up! 

        Your order number is: 123456789

        If you have any questions, please contact us 
        here.
                    `}</Text>
                <Button
                raised
                onPress={() => this.handleHome()}
                style={{marginTop:'20%'}}
                title='Return to Home!' />
                </Drawer>
    );
  }
}
