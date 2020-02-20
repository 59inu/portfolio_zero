import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import newsActions from '../redux/screen';

const ModeSelector = ({setMode, source}) => {
  return (
    <View>
      <Text>모드셀렉터</Text>
    </View>
  );
};

const mapStateToProps = state => ({
  source: state.news.source,
});

const mapDispatchToProps = dispatch => ({
  setMode: mode => dispatch(newsActions.mode(mode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModeSelector);
