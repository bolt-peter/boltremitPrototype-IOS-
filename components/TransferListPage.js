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
import TopUpPage from './TopUpPage';
import AddRecipientPage from './AddRecipientPage';


const array = [{
    name: 'Kumar Pratik',
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmdQL1UO8o1dmrd0q_Yp6g6_s7Itq6jx-HS5VJ2xby2sRBfVjtNPtNLio',
    phoneNumber: '(+63)2301-2000',
    address: '1201 Roxas Blvd, Ermita, Manila, 1000 Metro Manila, Philippines'
},
{
    name: 'Porsche Ma',
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmdQL1UO8o1dmrd0q_Yp6g6_s7Itq6jx-HS5VJ2xby2sRBfVjtNPtNLio',
    phoneNumber: '(+63)2301-2000',
    address: '1201 Roxas Blvd, Ermita, Manila, 1000 Metro Manila, Philippines'
},
{
    name: 'Justin Ho',
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmdQL1UO8o1dmrd0q_Yp6g6_s7Itq6jx-HS5VJ2xby2sRBfVjtNPtNLio',
    phoneNumber: '(+63)2301-2000',
    address: '1201 Roxas Blvd, Ermita, Manila, 1000 Metro Manila, Philippines'
}];
export default class TransferListPage extends Component {
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  handleClick(recipient){
     const self = this.props.navigation.state.params.self;
     const transferDetails = this.props.navigation.state.params.transferDetails
     self.props.navigation.navigate('TopUpPage', {self: self, recipient: recipient, transferDetails: transferDetails});
     console.log(recipient);   
    
  }
  handleAddRecipient(){
      console.log('in')
    const self = this.props.navigation.state.params.self;
    self.props.navigation.navigate('AddRecipientPage', {self: self})
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
                <Container>
                <Content>
                    <List
                    dataArray={array}
                    renderRow={(recipient) =>
                       <ListItem avatar
                        onPress={() => this.handleClick(recipient)}
                        >
                        <Left>
                            <Thumbnail source={{ uri: recipient.imageUri }} />
                        </Left>
                        <Body>
                            <Text>{ recipient.name }</Text>
                            <Text note>{recipient.phoneNumber}</Text>
                            <Text note>{recipient.address}</Text>
                        </Body>
                        </ListItem>
                    }
                    >
                    </List>
                    <Button
                    raised
                    onPress={() => this.handleAddRecipient()}
                    buttonStyle={{width: '90%',marginLeft: '5%', marginTop: '2%', borderRadius: 5}}
                    title='Add Recipient' />
                    </Content>
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
  },
   AddRecipientPage: {
        screen: AddRecipientPage,
        navigationOptions: {
        header: null,
        headerLeft: null
        }
  },
})