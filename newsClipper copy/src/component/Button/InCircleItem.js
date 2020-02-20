import React from 'react';
import {TouchableOpacity, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function InCircleItem({
  degree,
  size,
  containerSize,
  onPress,
  iconStyle,
}) {
  function degToRad(deg) {
    return (deg * Math.PI) / 180;
  }
  const distance = (containerSize / 2) * 0.67;
  const angleRad = degToRad(degree);
  const radius = containerSize / 2;
  const center = radius;

  const x = distance * Math.cos(angleRad) + center - size / 2;
  const y = distance * Math.sin(angleRad) + center - size / 2;

  const [xPosition] = React.useState(new Animated.Value(10));
  const [yPosition] = React.useState(new Animated.Value(10));
  const [IconSize] = React.useState(new Animated.Value(0));

  const iconDefault = {
    name: 'ban',
    color: 'balck',
    size: 10,
  };
  const icon = {};
  typeof iconStyle === 'object'
    ? Object.keys(iconStyle).forEach(property => {
        icon[property] = iconStyle[property]
          ? iconStyle[property]
          : iconDefault[property];
      })
    : null;
  React.useEffect(() => {
    Animated.parallel([
      Animated.spring(xPosition, {toValue: x, friction: 1, tension: 30}),
      Animated.spring(yPosition, {toValue: y, friction: 1, tension: 30}),
    ]).start();
  }, []);
  return (
    <Animated.View
      style={{
        position: 'absolute',
        width: size,
        height: size,
        left: xPosition,
        top: yPosition,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Icon.Button
        name={icon.name}
        size={icon.size}
        color={icon.color}
        onPress={onPress}
        iconStyle={{marginRight: 0}}
        backgroundColor="transparent"
        underlayColor="transparent"
      />
    </Animated.View>
  );
}
