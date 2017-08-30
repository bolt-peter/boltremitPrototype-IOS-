import React, { Component } from 'react';
import { Drawer } from 'native-base';
import { Button } from 'react-native-elements';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base'

//StackNavigator
import { StackNavigator } from 'react-navigation';

//custome components
import Sidebar from './Sidebar/Sidebar';
import ActivityHeader from './AppHeaders/ActivityHeader';
import ReceiptPage from './ReceiptPage';
const array = [{
    name: 'Cayaha Ali',
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmdQL1UO8o1dmrd0q_Yp6g6_s7Itq6jx-HS5VJ2xby2sRBfVjtNPtNLio',
    date: '2/2/17',
    amount: '-$2200',
},{
    name: 'Porsche Ma',
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmdQL1UO8o1dmrd0q_Yp6g6_s7Itq6jx-HS5VJ2xby2sRBfVjtNPtNLio',
    date: '2/2/17',
    amount: '-$2200',
},{
    name: 'Eric Ma',
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmdQL1UO8o1dmrd0q_Yp6g6_s7Itq6jx-HS5VJ2xby2sRBfVjtNPtNLio',
    date: '2/2/17',
    amount: '-$2200',
}];

export default class ReceipientPage extends Component {
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  handleClick(recipient){
      const self = this.props.navigation.state.params.self;
      self.props.navigation.navigate('ReceiptPage', {self: self, recipient: recipient});
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
                    marginTop: '5%'
                }}>
                <Content>
                    <List
                    dataArray={array}
                     renderRow={(recipient) =>
                        <ListItem avatar 
                        onPress={() => this.handleClick(recipient)}
                        style={{marginBottom: '3%'}}>
                        <Left>
                            <Thumbnail source={{ uri: recipient.imageUri }} />
                        </Left>
                        <Body>
                            <Text>{recipient.name}</Text>
                            <Text note>{recipient.date}</Text>
                        </Body>
                        <Right>
                            <Text note
                            style={{
                                color: '#03A9F4'
                            }}>{recipient.amount}</Text>
                        </Right>
                        </ListItem>
                    } 
                    >
                    </List>
                    </Content>
                </Container>
                </Drawer>
    );
  }
}

StackNavigator({
  ReceiptPage: {
    screen: ReceiptPage,
    navigationOptions: {
      header: null,
      headerLeft: null
    }
  } 
})