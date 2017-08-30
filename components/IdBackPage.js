import React from 'react';
import { Text, Image, View } from 'react-native';
import { Button } from 'react-native-elements'
// import { ImagePicker } from 'expo';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Form,
         Item,
         Label,
         Container, 
         Input,
         Header, Title, Left, Right, Body, Badge } from 'native-base';
import { StackNavigator } from 'react-navigation';

//custome components

export default class IdBackPage extends React.Component {
  state = {
    image: null,
  };
  render() {
    let { image } = this.state;
    return (
    <Container>
        <Text style={{
            marginLeft: '5%',
            fontFamily: 'Avenir',
            fontSize: '18',
            color: '#03A9F4'
        }}> { `
        Please take a photo of the front of
        your HKID like the example below
        ` } </Text>

         <Image 
        style={{marginLeft: '40%',width: 100, height: 50}}
        source={{uri: 'https://upload.wikimedia.org/wikipedia/en/2/23/HKID_pic-adult-front_sample.jpg'}}/>
        <Button
          style={{marginTop: '10%'}}
          title="Take a picture!"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ marginTop: '5%', marginLeft: '10%', width: 300, height: 150 }} />}
        {image ? <Button
        onPress={() => this.props.navigation.navigate('IdBackPage')}
        style={{marginTop: '5%', backgroundColor: '#03A9F4'}}
        title="Next!"
        /> : <View></View>}
      </Container>
    );
  }

  _pickImage = async () => {
    let result = '';    
    // await ImagePicker.launchCameraAsync({
    //   allowsEditing: true,
    //   aspect: [4, 3],
    // });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}
