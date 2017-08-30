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
import TopUpHeader from './AppHeaders/TopUpHeader'
export default class TopUpDonePage extends Component {
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

                <TopUpHeader
                    openDrawer={this.openDrawer.bind(this)}
                />
                <Container
                style={{
                    marginTop: '5%'
                }}>
<Container>
        <Text style={{
            fontSize: 14,
            fontFamily: 'Avenir'
        }}> {`
            Congratulations! You're done!
            `}</Text>
        <Text>[Cute mascot]</Text>
        <Text style={{
            fontSize: 14,
            fontFamily: 'Avenir'
        }}>{`
            Your account should automatically top up soon. 
            Please keep your reciept until then. If you 
            have any questions, please contact us here.
            `}
        </Text>
        <Button
          backgroundColor='#03A9F4'
          style={{marginTop: '10%'}}
          title="Return to Home :)"
          onPress={this._pickImage}
        />
</Container>
                
                </Container>
                </Drawer>
    );
  }
}
