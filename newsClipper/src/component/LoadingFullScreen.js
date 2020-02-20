import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styleSet from './styles';
const styles = styleSet.LoadingFullScreen;

export default function LoadingFullScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="tomato" />
    </View>
  );
}
