import useUserStore from '@/src/store/useUserStore';
import { NavigationContainer } from '@react-navigation/native';
import {
	createStackNavigator,
	TransitionPresets,
} from '@react-navigation/stack';
import React from 'react';
import AuthNavigation from '../AuthNavigation';
import HomeNavigation from '../TabNavigation/HomeNavigation';

const Stack = createStackNavigator();

function RootNavigation() {
	const { session } = useUserStore();

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
				{session && session.user ? (
					<Stack.Screen name="HomeNavigation" component={HomeNavigation} />
				) : (
					<Stack.Screen name="AuthNavigation" component={AuthNavigation} />
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default RootNavigation;
