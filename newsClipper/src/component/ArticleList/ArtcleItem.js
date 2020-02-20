import React from 'react';
import {TouchableOpacity, View, Linking, Text} from 'react-native';
import styleSet from '../styles';
const styles = styleSet.ArticleItem;

export default function ArticleItem({title, date, rightBtn, leftBtn, link}) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.itemTitle}
          onPress={() => {
            link ? Linking.openURL(link) : null;
          }}>
          <Text style={styles.itemTitleTxt}>{title}</Text>
        </TouchableOpacity>
        <View style={styles.itemDate}>
          <Text>{date}</Text>
        </View>
        <View style={styles.leftBtn}>{leftBtn}</View>
        <View style={styles.rightBtn}>{rightBtn}</View>
      </View>
    </TouchableOpacity>
  );
}
