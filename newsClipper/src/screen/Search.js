import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import Home from './Home';
import Circle from '../component/Button/Circle';
import Selector from '../component/Selector';
import ArticleList from '../component/ArticleList/List';
import LoadingFullScreen from '../component/LoadingFullScreen';
import SearchRecord from '../component/SearchRecord';
import funcFlatlist from '../helpFunc/flatlist';
import IconMaker from '../component/Button/IconMaker';

import {newsActions} from '../redux/news';
import {connect} from 'react-redux';
import styleSet from './styles';
const styles = styleSet.Search;

const Search = ({func, state}) => {
  //destructure prop storeState
  const {
    mode,

    category,
    keyword,
    page,
    searchRecord,
    news,

    isnew,
    pending,
  } = state.news;
  const [APIsource, setSource] = useState('GOOGLE');
  //keyword search && component Refs
  const TextInputRef = React.useRef();
  const requestNews = (keyword, p) => {
    func.getNews(keyword, p !== undefined ? p + 1 : page, APIsource, mode);
  };
  const submitSearch = ({searchRecord}) => {
    const getBy = searchRecord ? searchRecord : keyword;
    if (!pending) {
      func.setAPI(APIsource);
      requestNews(getBy, 0);
      TextInputRef.current.clear();
    }
  };
  //handle scroll event (infinite scroll)
  const handleOnscroll = nativeEvent => {
    const {isCloseToBottom} = funcFlatlist;
    if (isCloseToBottom(nativeEvent)) {
      if (!pending) {
        func.getNews(keyword, page + 1, APIsource, mode);
      }
    }
  };

  // is flatList footer visible?
  const isfooterVisible = () => {
    return pending;
  };

  // createSearchResultView
  const createResultView = () => {
    if (mode === 'home' || !(keyword && news.length)) {
      return <Home />;
    } else if (pending && isnew) {
      return <LoadingFullScreen />;
    } else if (!news.length) {
      return <Text>검색 결과가 없습니다.</Text>;
    } else {
      return (
        <ArticleList
          footerVisible={isfooterVisible()}
          onScroll={handleOnscroll}
          data={news}
        />
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="검색어를 입력하세요."
        ref={TextInputRef}
        onFocus={() => func.setMode('search')}
        onSubmitEditing={submitSearch}
        onChangeText={t => func.setKeyword(t)}
        style={styles.searchInput}
      />
      <View style={styles.searchFrom}>
        <IconMaker
          icon={{name: APIsource, size: 30, color: '#2036b3cc'}}
          onPress={() => {}}
        />
      </View>
      <TouchableOpacity onPress={submitSearch} style={styles.searchBtn} />
      <SearchRecord data={searchRecord} onPress={submitSearch} />
      <View style={styles.viewContainer}>{createResultView()}</View>
      <Circle setSource={setSource} />
    </SafeAreaView>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    func: {
      getNews: (getBy, page, APIsource, mode) =>
        dispatch(newsActions.getNews(getBy, page, APIsource, mode)),
      setKeyword: keyword => dispatch(newsActions.setKeyword(keyword)),
      setMode: mode => dispatch(newsActions.setMode(mode)),
      setAPI: source => dispatch(newsActions.setAPIsource(source)),
    },
  };
};
const mapStateToProps = state => ({
  state: {
    news: state.news,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
