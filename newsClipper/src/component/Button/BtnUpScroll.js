import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import styleSet from '../styles';
const styles = styleSet.BtnUpScroll;

export default function BtnUpScroll({onPress, visible}) {
  return visible ? (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.upButton}
      onPress={onPress}>
      <Image
        source={{
          uri:
            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/arrow_up.png',
        }}
        style={styles.upButtonImage}
      />
    </TouchableOpacity>
  ) : null;
}
