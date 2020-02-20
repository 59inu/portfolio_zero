import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import newsActions from '../redux/screen';

const SourceSelector = ({setMode}) => {
  return (
    <View>
      <Text>소스셀렉터</Text>
    </View>
  );
};

const mapStateToProps = state => ({
  visible: state.screen.selector,
});

const mapDispatchToProps = dispatch => ({
  setMode: mode => dispatch(newsActions.mode(mode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SourceSelector);
