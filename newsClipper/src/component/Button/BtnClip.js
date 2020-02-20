import React from 'react';
import {Button} from 'react-native';
import {connect} from 'react-redux';
import {addClip, delClip} from '../../redux/clip';

const BtnClip = ({btn, item, action, state}) => {
  const {myClip, unChecked, APIsource} = state;
  console.log('BTNCLIP', item.searchEG ? item.searchEG : '');
  //create button option prop
  let [title, color] = ['', ''];
  switch (btn) {
    case 'CLIP/ADD':
      [title, color] = ['클립', ''];
      break;
    case 'CLIP/DEL':
      [title, color] = ['언클립', 'red'];
      break;
    case 'SOURCE':
      [title, color] = [item.searchEG ? item.searchEG : '', 'navy'];
  }
  //create onPress event func
  const onPress = {
    'CLIP/ADD': item => {
      action.addClip(item, myClip, unChecked, APIsource);
    },
    'CLIP/DEL': item => {
      action.delClip(item, myClip, unChecked, APIsource);
    },
    SOURCE: () => {},
  };

  return (
    <Button title={title} color={color} onPress={() => onPress[btn](item)} />
  );
};
const mapDispatchToProps = dispatch => ({
  action: {
    addClip: (item, myClip, unChecked, APIsource) =>
      dispatch(addClip(item, myClip, unChecked, APIsource)),
    delClip: (item, myClip, unChecked, APIsource) =>
      dispatch(delClip(item, myClip, unChecked, APIsource)),
  },
});

const mapStateToProps = state => ({
  state: {
    myClip: state.clip.myClip,
    unChecked: state.clip.unChecked,
    APIsource: state.news.APIsource,
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(BtnClip);
