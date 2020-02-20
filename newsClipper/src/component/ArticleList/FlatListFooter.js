import React from 'react';
import {View, ActivityIndicator} from 'react-native';

export default function FlatListFooter({visible}) {
  const footer = () => (
    <View style={{marginBottom: 30, justifyContent: 'center'}}>
      <ActivityIndicator size="large" />
    </View>
  );
  return visible ? footer() : null;
}
