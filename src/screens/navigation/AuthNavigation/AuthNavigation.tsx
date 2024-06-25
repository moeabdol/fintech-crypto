import {
	createStackNavigator,
	TransitionPresets,
} from '@react-navigation/stack';
import React from 'react';
import Login from '../../auth/Login';
import Register from '../../auth/Register';
import Splash from '../../auth/Splash';
import Welcome from '../../auth/Welcome';

const Stack = createStackNavigator();

function AuthNavigation() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				animationEnabled: true,
				gestureEnabled: true,
				...TransitionPresets.SlideFromRightIOS,
				gestureDirection: 'horizontal',
			}}
		>
			<Stack.Screen name="Splash" component={Splash} />
			<Stack.Screen name="Welcome" component={Welcome} />
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Register" component={Register} />
		</Stack.Navigator>
	);
}

export default AuthNavigation;
