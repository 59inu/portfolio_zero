import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Search from '../screen/Search';
import MyClip from '../screen/MyClip';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {getDash, setAPIsource} from '../redux/news';
import {setClip} from '../redux/clip';
import styles from './styles';

const AppNav = ({unChecked, setClip}) => {
  // load initial data to render
  useEffect(() => {
    setClip();
  }, []);

  const Tab = createBottomTabNavigator();

  const TabBarIcon = focused => {
    return focused || !unChecked ? null : (
      <View style={styles.AppNav.badgeContainer}>
        <Text style={styles.AppNav.badgeTxt}>{unChecked}</Text>
      </View>
    );
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          tabStyle: {marginBottom: 10},
          labelStyle: {fontSize: 20},
        }}
        screenOptions={{
          tabBarIcon: ({focused}) => TabBarIcon(focused),
        }}>
        <Tab.Screen
          name="검색"
          component={Search}
          options={{
            tabBarIcon: () => null,
          }}
        />
        <Tab.Screen name="클립한 뉴스" component={MyClip} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({
  unChecked: state.clip.unChecked,
});
const mapDispatchToProps = dispatch => ({
  setClip: () => dispatch(setClip()),
  getDash: page => dispatch(getDash(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNav);
