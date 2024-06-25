import { NavigationContainer } from '@react-navigation/native';
import {
	createStackNavigator,
	TransitionPresets,
} from '@react-navigation/stack';
import React, { useState } from 'react';
import AuthNavigation from '../AuthNavigation';
import HomeNavigation from '../TabNavigation/HomeNavigation';

const Stack = createStackNavigator();

function RootNavigation() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					animationEnabled: true,
					gestureEnabled: true,
					...TransitionPresets.SlideFromRightIOS,
					gestureDirection: 'horizontal',
				}}
			>
				{isLoggedIn ? (
					<Stack.Screen name="HomeNavigation" component={HomeNavigation} />
				) : (
					<Stack.Screen name="AuthNavigation" component={AuthNavigation} />
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default RootNavigation;
