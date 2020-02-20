import React from 'react';
import {searchFrom} from '../../libs/news';

import Icon from 'react-native-vector-icons/FontAwesome';
import {
  createIconSetFromFontello,
  createIconSetFromIcoMoon,
} from 'react-native-vector-icons';
import nytConfig from '../../libs/selection';
import naverConfig from '../../libs/config';
import {TouchableOpacity} from 'react-native-gesture-handler';
const NYT = createIconSetFromIcoMoon(nytConfig);
const NAVER = createIconSetFromFontello(naverConfig);

export default function iconMaker({icon, onPress}) {
  if (icon.name === searchFrom.naver) {
    return (
      <NAVER.Button
        name={'naver_icon'}
        size={icon.size + 15}
        color={icon.color}
        onPress={onPress}
        iconStyle={{marginLeft: -7, marginTop: -7}}
        backgroundColor="transparent"
        underlayColor="transparent"
      />
    );
  } else if (icon.name === searchFrom.nyt) {
    return (
      <NYT.Button
        name={'NYT'}
        size={icon.size}
        color={icon.color}
        onPress={onPress}
        iconStyle={{marginRight: 0}}
        backgroundColor="transparent"
        underlayColor="transparent"
      />
    );
  } else {
    return (
      <Icon.Button
        name={icon.name.toLowerCase()}
        size={icon.size}
        color={icon.color}
        onPress={onPress}
        iconStyle={{marginRight: 0}}
        backgroundColor="transparent"
        underlayColor="transparent"
      />
    );
  }
}
