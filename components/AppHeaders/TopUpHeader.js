import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import {Container, 
        Header,
        Left,
        Button,Right,Body,Title} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class AppHeader extends Component {
  render() {
    return (
      <Header       
      style={{
         backgroundColor:'#03A9F4',
         shadowColor: '#757575',
         shadowOffset: {
          width: 0,
          height: 3
         },
        shadowRadius: 3,
        shadowOpacity: 1.0
       }}>
       <Left>
       <Button transparent
              onPress={()=>this.props.openDrawer()}
       >
         <Icon name='bars' />
       </Button>
       </Left>
       <Body >
         <Title style={{
           fontFamily: 'Avenir',
           color: '#FFFFFF'
         }}>Top Up</Title>
       </Body>
      <Right>
       <Button transparent
              onPress={()=>this.props.openDrawer()}
       >
       </Button>
       </Right>
     </Header>
    );
  }
}