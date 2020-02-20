import React from 'react';
import {FlatList} from 'react-native';
import BtnUpScroll from '../Button/BtnUpScroll';
import ClipBtn from '../Button/BtnClip';
import funcFlatlist from '../../helpFunc/flatlist';
import FlatListFooter from './FlatListFooter';
import ArticleItem from './ArtcleItem';

import {setClip} from '../../redux/clip';
import {screenActions} from '../../redux/screen';
import {getTitle, getDate, getLink} from '../../helpFunc/renderArticle';
import {connect} from 'react-redux';

import styleSet from '../styles';
const styles = styleSet.List;

const List = ({footerVisible, onScroll, data, state, action}) => {
  const flatListRef = React.useRef();

  const {upScrollVisible, myClip, APIsource, screen} = state;
  const {setUpScroll} = action;
  console.log(screen);
  const handleOnScroll = ({nativeEvent}) => {
    onScroll ? onScroll(nativeEvent) : null;
    setUpScroll(funcFlatlist.isOverHeight(nativeEvent));
  };
  const handleUpButton = () => {
    return flatListRef.current.scrollToOffset({animated: true, offset: 0});
  };

  const _clipKey = item => {
    switch (APIsource) {
      case 'NAVER':
        return item.originallink;
      case 'GOOGLE':
        return item.url;
      case 'NYTIMES':
        return item.uri;
    }
  };

  const _ClipBtn = item => {
    //add for unClipped and del for clipped
    const _isClipped = item => Object.keys(myClip).indexOf(_clipKey(item)) >= 0;
    const btn = _isClipped(item) ? 'CLIP/DEL' : 'CLIP/ADD';
    return <ClipBtn item={item} btn={btn} />;
  };

  const _Source = item => {
    return screen === 'myClip' ? <ClipBtn item={item} btn="SOURCE" /> : null;
  };

  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={{alignItems: 'center'}}
        ref={flatListRef}
        keyExtractor={(item, i) => String(i)}
        data={data}
        renderItem={({item}) => (
          <ArticleItem
            rightBtn={_ClipBtn(item)}
            leftBtn={() => _Source()}
            title={getTitle(item, APIsource)}
            date={getDate(item, APIsource)}
            link={getLink(item, APIsource)}
          />
        )}
        onScroll={handleOnScroll}
        scrollEventThrottle={1500}
        ListFooterComponent={() => <FlatListFooter visible={footerVisible} />}
      />
      <BtnUpScroll onPress={handleUpButton} visible={upScrollVisible} />
    </>
  );
};

const mapToStateToProps = state => ({
  state: {
    myClip: state.clip.myClip,
    upScrollVisible: state.screen.upScroll,
    APIsource: state.news.APIsource,
    screen: state.screen.screen,
  },
});
const mapDispatchToProps = dispatch => ({
  action: {
    setClip: () => dispatch(setClip()),
    setUpScroll: bool => dispatch(screenActions.upscroll(bool)),
  },
});

export default connect(mapToStateToProps, mapDispatchToProps)(List);
