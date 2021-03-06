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
import AddRecipientHeader from './AppHeaders/AddRecipientHeader'
export default class AddRecipient extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      birthday: '',
      phoneNumber: '',
      address: ''
    }
  }
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  handleAdd(){
      console.log('in')
  }
  render() {
    return (
              <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<Sidebar self = {this.props.navigation.state.params.self}/>}
                onClose={() => this.closeDrawer()} >

                <AddRecipientHeader
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
                marginLeft: '35%',
                marginTop: '5%',
                fontWeight: 'bold'
            }}> {this.state.name } </Text>
            <Form style={{
                marginTop: '25%',
                marginLeft: '5%',
                width: '83%'
            }}>
            <Item inlineLabel>
              <Label>Name</Label>
              <Input 
              value={this.state.name}
              onChangeText={(text) => this.setState({name: text})}
              />
            </Item>
            <Item inlineLabel>
              <Label>Birthday</Label>
              <Input 
              value={this.state.name}
              onChangeText={(text) => this.setState({birthday: text})}
              />
            </Item>
            <Item inlineLabel>
              <Label>Phone Number</Label>
              <Input 
              value={this.state.phoneNumber}
              onChangeText={(text) => this.setState({phoneNumber: text})}
              />
            </Item>
            <Item inlineLabel>
              <Label>Address</Label>
              <Input 
              value={this.state.address}
              onChangeText={(text) => this.setState({address: text})}
              />
            </Item>
            </Form>
                <Button
                    raised
                    onPress={() => this.handleAdd()}
                    buttonStyle={{width: '90%',marginLeft: '5%', marginTop: '2%', borderRadius: 5}}
                    title='Add Recipient' />
        </Content>
</Container>
                
                </Container>
                </Drawer>
    );
  }
}
