import {StyleSheet} from 'react-native';

const styles = {
  AppNav: StyleSheet.create({
    badgeContainer: {
      backgroundColor: 'tomato',
      position: 'relative',
      left: 50,
      top: 0,
      width: 25,
      height: 25,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
    },
    badgeTxt: {color: 'white', fontWeight: 'bold', fontSize: 13},
  }),
};

export default styles;
