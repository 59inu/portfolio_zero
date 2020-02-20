import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Icon name="search" size={50} style={{marginBottom: 10}} />
      <Text>뉴스를 검색하세요.</Text>
    </View>
  );
}
