import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  NativeModules,
  Dimensions,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import InCircleItem from './InCircleItem';

import {newsActions} from '../../redux/news';
import {connect} from 'react-redux';
const width = Dimensions.get('window').width;

const Circle = ({setAPIsource}) => {
  const [btnSize] = React.useState(new Animated.Value(50));
  const [ctnSize] = React.useState(new Animated.Value(0));
  const [ctnOpacity] = React.useState(new Animated.Value(0));
  const [ctnPosition, setCtnPosition] = React.useState(0);
  const [iconSize, setIconSize] = React.useState(30);
  const [isOpen, setOpen] = React.useState(false);

  const handleOnPress = () => {
    switch (isOpen) {
      case false:
        setOpen(true);
        setIconSize(20);
        Animated.parallel([
          Animated.spring(btnSize, {
            toValue: 35,
            friction: 3,
            tension: 50,
          }),
          Animated.spring(ctnSize, {
            toValue: 400,
            friction: 3,
            tension: 5,
          }),
        ]).start();
        break;
      case true:
        setOpen(false);
        setIconSize(30);
        Animated.parallel([
          Animated.spring(btnSize, {
            toValue: 50,
            friction: 3,
            tension: 50,
          }),
          Animated.spring(ctnSize, {
            toValue: 0,
            friction: 10,
            tension: 0,
          }),
        ]).start();
    }
  };
  return (
    <>
      <View
        style={{
          position: 'absolute',
          bottom: -ctnPosition,
          right: -ctnPosition,
          opacity: 0.7,
        }}>
        <Animated.View
          onLayout={event => {
            const {width} = event.nativeEvent.layout;
            setCtnPosition(width / 2 - 45);
          }}
          style={{
            backgroundColor: '#f8d7d7',
            height: ctnSize,
            width: ctnSize,
            borderRadius: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <InCircleItem
            degree={187}
            size={65}
            containerSize={400}
            iconStyle={{name: 'google', size: 40, color: 'black'}}
            onPress={() => {
              setAPIsource('google');
            }}
          />
          <InCircleItem degree={225} size={65} containerSize={400} />
          <InCircleItem degree={263} size={65} containerSize={400} />
        </Animated.View>
      </View>
      <TouchableOpacity style={{position: 'absolute', bottom: 15, right: 15}}>
        <Animated.View
          style={{
            backgroundColor: '#2036b3cc',
            height: btnSize,
            width: btnSize,
            borderRadius: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon.Button
            name="ellipsis-h"
            color="#fff"
            size={iconSize}
            backgroundColor="transparent"
            iconStyle={{marginRight: 0}}
            onPress={handleOnPress}
            underlayColor="transparent"
          />
        </Animated.View>
      </TouchableOpacity>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  setAPIsource: source => dispatch(newsActions.setAPIsource(source)),
});
export default connect(null, mapDispatchToProps)(Circle);
