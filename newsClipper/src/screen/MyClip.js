import React, {useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {SafeAreaView, View, Text} from 'react-native';
import ArticleList from '../component/ArticleList/List';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {check} from '../redux/clip';
import {screenActions} from '../redux/screen';
import {connect} from 'react-redux';
import styleSet from './styles';
const styles = styleSet.MyClip;

const MyClip = ({state, check, setScreen}) => {
  const {data} = state;

  const isFocused = useIsFocused();
  useEffect(() => {
    isFocused || data.length ? check() : null;
    isFocused ? setScreen('search') : null;
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        {data.length > 0 ? (
          <ArticleList data={data} />
        ) : (
          <>
            <Icon
              name="folder-open"
              icon
              size={50}
              color="black"
              style={{marginBottom: 10}}
              regular
            />
            <Text>클립한 뉴스가 없어요.</Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setScreen: () => dispatch(screenActions.screen('myClip')),
    check: () => dispatch(check()),
  };
};
const mapStateToProps = state => ({
  state: {
    data: Object.keys(state.clip.myClip).map(id => state.clip.myClip[id]),
    pending: state.clip.pending,
    myClip: state.clip.myClip,
    dash: state.news.dash,
    keyword: state.news.keyword,
    isnew: state.news.isnew,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyClip);
