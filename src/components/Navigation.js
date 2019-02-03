import React, { Component } from 'react';
import {
	createStackNavigator,
	createAppContainer
} from 'react-navigation';

import Dashboard from '../screens/Dashboard';
import Add from '../screens/Add';

const Navigation = createStackNavigator({
	Dashboard: { screen: Dashboard },
	Add: { screen: Add }
}, {
	headerMode: 'none',
});

export default createAppContainer(Navigation);