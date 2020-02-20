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

  const {upScrollVisible, myClip, APIsource} = state;
  const {setUpScroll} = action;

  const handleOnScroll = ({nativeEvent}) => {
    onScroll ? onScroll(nativeEvent) : null;
    setUpScroll(funcFlatlist.isOverHeight(nativeEvent));
  };
  const handleUpButton = () => {
    return flatListRef.current.scrollToOffset({animated: true, offset: 0});
  };

  const _ClipBtn = item => {
    //add for unClipped and del for clipped
    const _isClipped = item => Object.keys(myClip).indexOf(item.uri) >= 0;
    const btn = _isClipped(item) ? 'CLIP/DEL' : 'CLIP/ADD';
    return <ClipBtn item={item} btn={btn} />;
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
  },
});
const mapDispatchToProps = dispatch => ({
  action: {
    setClip: () => dispatch(setClip()),
    setUpScroll: bool => dispatch(screenActions.upscroll(bool)),
  },
});

export default connect(mapToStateToProps, mapDispatchToProps)(List);
