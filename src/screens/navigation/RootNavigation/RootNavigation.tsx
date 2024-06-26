import AuthNavigation from '@/src/screens/navigation/AuthNavigation';
import TabNavigation from '@/src/screens/navigation/TabNavigation';
import useUserStore from '@/src/store/useUserStore';
import { NavigationContainer } from '@react-navigation/native';
import {
	createStackNavigator,
	TransitionPresets,
} from '@react-navigation/stack';
import React from 'react';

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
					<Stack.Screen name="TabNavigation" component={TabNavigation} />
				) : (
					<Stack.Screen name="AuthNavigation" component={AuthNavigation} />
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default RootNavigation;
