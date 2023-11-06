import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from './background';
import Btn from './buton';
import {darkGreen} from './Constants';
import Field from './Field';

const welcome = (props) => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 460}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
          welcome
        </Text>
      </View>
    </Background>
  );
};

export default welcome;