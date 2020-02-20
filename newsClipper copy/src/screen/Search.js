import React from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  Modal,
} from 'react-native';
import Circle from '../component/Button/Circle';
import Selector from '../component/Selector';
import ArticleList from '../component/ArticleList/List';
import LoadingFullScreen from '../component/LoadingFullScreen';
import SearchRecord from '../component/SearchRecord';
import funcFlatlist from '../helpFunc/flatlist';
import {createIconSetFromFontello} from 'react-native-vector-icons';
import fontelloConfig from '../libs/selection.json';
const Icon = createIconSetFromFontello(fontelloConfig);

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
    APIsource,
    news,

    isnew,
    pending,
  } = state.news;

  //keyword search && component Refs
  const TextInputRef = React.useRef();
  const requestNews = (keyword, p) => {
    func.getNews(keyword, p ? p : page, APIsource, mode);
  };
  const submitSearch = () => {
    if (!pending) {
      requestNews(keyword, 0);
      TextInputRef.current.clear();
    }
  };
  console.log(APIsource);
  //handle scroll event (infinite scroll)
  const handleOnscroll = nativeEvent => {
    const {isCloseToBottom} = funcFlatlist;
    if (isCloseToBottom(nativeEvent)) {
      if (!pending) {
        console.log('로드모어', keyword, page, APIsource, mode);
        func.getNews(keyword, page, APIsource, mode);
      }
    }
  };

  // is flatList footer visible?
  const isfooterVisible = () => {
    return pending;
  };

  // createSearchResultView
  const createResultView = () => {
    if (!mode) {
      return (
        <View style={{flex: 1}}>
          <Text>하하</Text>
        </View>
      );
    } else if (pending && isnew) {
      return <LoadingFullScreen />;
    } else if (mode && !news.length) {
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
      <Selector />
      <TextInput
        placeholder="검색어를 입력하세요."
        ref={TextInputRef}
        onSubmitEditing={submitSearch}
        onChangeText={t => func.setKeyword(t)}
        style={styles.searchInput}
      />
      <Icon name="toad" size={80} color="#bf1313" />
      <TouchableOpacity onPress={submitSearch} style={styles.searchBtn} />
      <SearchRecord data={searchRecord} onPress={submitSearch} />
      <View style={styles.viewContainer}>{createResultView()}</View>
      <Circle />
    </SafeAreaView>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    func: {
      getDash: page => dispatch(getDash(page)),
      getNews: (getBy, page, APIsource, mode) =>
        dispatch(newsActions.getNews(getBy, page, APIsource, mode)),
      setKeyword: keyword => dispatch(newsActions.setKeyword(keyword)),
    },
  };
};
const mapStateToProps = state => ({
  state: {
    news: state.news,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
