import React from 'react';
import {Modal, View} from 'react-native';
import {connect} from 'react-redux';
import SourceSelector from './SourceSelector';
import ModeSelector from './ModeSelector';

const Selector = ({visible}) => {
  return (
    <Modal visible={visible}>
      <View>
        <SourceSelector />
        <ModeSelector />
      </View>
    </Modal>
  );
};

const mapStateToProps = state => ({
  visible: state.screen.selector,
});

export default connect(mapStateToProps, null)(Selector);
