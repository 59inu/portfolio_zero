import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;

const styles = {
  MyClip: StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    viewContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    upButton: {
      position: 'absolute',
      width: 50,
      height: 50,
      borderRadius: 100,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
      left: (width * 0.9 - 50) / 2,
      bottom: 10,
    },
    upButtonImage: {
      width: 30,
      height: 30,
    },
  }),
  Search: StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    viewContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    searchInput: {
      height: 50,
      width: width * 0.9,
      paddingRight: 50,
      marginTop: 20,
      marginBottom: 10,
      borderColor: 'black',
      borderWidth: 1,
      textAlign: 'right',
      paddingHorizontal: 20,
    },
    searchBtn: {
      position: 'absolute',
      width: 20,
      height: 20,
      backgroundColor: 'tomato',
      alignItems: 'center',
      justifyContent: 'center',
      right: 40,
      top: 80,
    },
  }),
};
export default styles;
