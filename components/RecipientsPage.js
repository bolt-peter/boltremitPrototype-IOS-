import React, { Component } from 'react';
import { Drawer } from 'native-base';
import { Button } from 'react-native-elements';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base'


//StackNavigator
import { StackNavigator } from 'react-navigation';

//custome components
import Sidebar from './Sidebar/Sidebar';
import RecipientHeader from './AppHeaders/RecipientHeader';
import EditRecipientPage from './EditRecipientPage';


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

export default class RecipientsPage extends Component {
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  handleClick(recipient){
    console.log(recipient);
    const self = this.props.navigation.state.params.self;
    self.props.navigation.navigate('EditRecipientPage', {self: self, recipient: recipient});
  }
  render() {
    return (
              <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<Sidebar self = {this.props.navigation.state.params.self}/>}
                onClose={() => this.closeDrawer()} >

                <RecipientHeader
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
                    onPress={() => this.props.handleRegister()}
                    buttonStyle={{width: '90%',marginLeft: '5%', marginTop: '2%', borderRadius: 5}}
                    title='Add Receipient' />
                    </Content>
                </Container>
                </Drawer>
    );
  }
}

StackNavigator({
  EditRecipientPage: {
    screen: EditRecipientPage,
    navigationOptions: {
      header: null,
      headerLeft: null
    }
  }
})