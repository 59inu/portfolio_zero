import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;

export default {
  SearchRecord: StyleSheet.create({
    container: {
      height: 40,
      marginBottom: 10,
    },
    flatContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: width * 0.9,
    },
    item: {
      padding: 10,
      marginHorizontal: 5,
      backgroundColor: 'lightblue',
      borderRadius: 40,
    },
  }),
  LoadingFullScreen: StyleSheet.create({
    container: {
      flex: 1,
      width: width * 0.9,
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
  BtnUpScroll: StyleSheet.create({
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
  ArticleItem: StyleSheet.create({
    container: {
      height: 120,
      width: width * 0.9,
      padding: 15,
      marginBottom: 15,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'lightblue',
      borderWidth: 1,
      display: 'flex',
    },
    itemTitle: {
      flex: 3,
    },
    itemTitleTxt: {
      fontSize: 20,
      textAlign: 'center',
      fontWeight: '500',
    },
    itemDate: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    rightBtn: {position: 'absolute', right: 10, bottom: 10},
    leftBtn: {
      position: 'absolute',
      left: 10,
      bottom: 10,
      backgroundColor: 'lightblue',
      borderRadius: 100,
    },
    leftBtnTxt: {
      color: '#fff',
      fontSize: 13,
    },
  }),
  List: StyleSheet.create({
    container: {flex: 1, width: width * 0.9},
  }),
};
