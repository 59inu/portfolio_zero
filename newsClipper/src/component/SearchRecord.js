import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styleSet from './styles';
const styles = styleSet.SearchRecord;

export default function SearchRecord({data, onPress}) {
  const _renderItem = item => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => onPress({searchRecord: item})}
          style={styles.item}>
          <Text>{item}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return data.length ? (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        contentContainerStyle={styles.flatContainer}
        data={data}
        keyExtractor={(item, i) => String(i)}
        renderItem={({item}) => _renderItem(item)}
      />
    </View>
  ) : null;
}
