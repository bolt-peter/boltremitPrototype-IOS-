import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Drawer } from 'native-base';
import { Button } from 'react-native-elements';
import { Container, Header, Content,  
        Item, Input, Label,
        Form,
        Icon, Left, Body, Right, Thumbnail, Text } from 'native-base'
//custome components
import Sidebar from './Sidebar/Sidebar';
import NewRecipientHeader from './AppHeaders/NewRecipientHeader'
export default class NewRecipientPage extends Component {
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  render() {
    return (
              <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<Sidebar/>}
                onClose={() => this.closeDrawer()} >

                <NewRecipientHeader
                    openDrawer={this.openDrawer.bind(this)}
                />
                <Container
                style={{
                    marginTop: '5%'
                }}>
<Container>
        <Content>
            <Image 
            style={{marginLeft: '35%', width: 100, height: 100}}
            source={{uri: 'https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-13-256.png'}}
            />
            <Text style={{
                color:'#304FFE',
                marginLeft: '33%',
                marginTop: '5%',
            }}> New Recipient </Text>
            <Form style={{
                marginTop: '25%',
                marginLeft: '5%',
                width: '83%'
            }}>
            <Item inlineLabel>
              <Label>Name</Label>
              <Input />
            </Item>
            <Item inlineLabel>
              <Label>Birthday</Label>
              <Input />
            </Item>
            <Item inlineLabel>
              <Label>Phone Number</Label>
              <Input/>
            </Item>
            <Item inlineLabel>
              <Label>Address</Label>
              <Input />
            </Item>
            </Form>
        </Content>
</Container>
                
                </Container>
                </Drawer>
    );
  }
}
