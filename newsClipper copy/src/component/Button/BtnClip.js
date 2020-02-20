import React from 'react';
import {Button} from 'react-native';
import {connect} from 'react-redux';
import {addClip, delClip} from '../../redux/clip';

const BtnClip = ({btn, item, action, state}) => {
  //create button option prop
  let [title, color] = ['', ''];
  switch (btn) {
    case 'CLIP/ADD':
      [title, color] = ['클립', ''];
      break;
    case 'CLIP/DEL':
      [title, color] = ['언클립', 'red'];
      break;
  }
  //create onPress event func
  const onPress = {
    'CLIP/ADD': item => {
      action.addClip(item, state.myClip, state.unChecked);
    },
    'CLIP/DEL': item => {
      action.delClip(item, state.myClip, state.unChecked);
    },
  };

  return (
    <Button title={title} color={color} onPress={() => onPress[btn](item)} />
  );
};
const mapDispatchToProps = dispatch => ({
  action: {
    addClip: (item, myClip, unChecked) =>
      dispatch(addClip(item, myClip, unChecked)),
    delClip: (item, myClip, unChecked) =>
      dispatch(delClip(item, myClip, unChecked)),
  },
});

const mapStateToProps = state => ({
  state: {
    myClip: state.clip.myClip,
    unChecked: state.clip.unChecked,
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(BtnClip);
