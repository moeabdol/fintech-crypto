import HomeNavigation from '@/src/screens/navigation/TabNavigation/HomeNavigation';
import MarketNavigation from '@/src/screens/navigation/TabNavigation/MarketNavigation';
import NewsNavigation from '@/src/screens/navigation/TabNavigation/NewsNavigation';
import ProfileNavigation from '@/src/screens/navigation/TabNavigation/ProfileNavigation';
import SearchNavigation from '@/src/screens/navigation/TabNavigation/SearchNavigation';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TransitionPresets } from '@react-navigation/stack';
import React from 'react';

const Tab = createBottomTabNavigator();

type IoniconName = React.ComponentProps<typeof Ionicons>['name'];

function TabNavigation() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarIcon: ({ focused }) => {
					const iconSize = 25;
					let iconName: IoniconName;
					if (route.name === 'Home') iconName = 'home';
					else if (route.name === 'Market') iconName = 'stats-chart-outline';
					else if (route.name === 'Search') iconName = 'search-outline';
					else if (route.name === 'News') iconName = 'newspaper-outline';
					else if (route.name === 'Profile') iconName = 'person-outline';
					return (
						<Ionicons
							name={iconName!}
							size={iconSize}
							color={focused ? '#164b48' : 'gray'}
						/>
					);
				},
				tabBarActiveTintColor: '#164b48',
				tabBarInactiveTintColor: 'gray',
				tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
				...TransitionPresets.SlideFromRightIOS,
				animationEnabled: true,
				gestureEnabled: true,
				gestureDirection: 'horizontal',
			})}
		>
			<Tab.Screen name="Home" component={HomeNavigation} />
			<Tab.Screen name="Market" component={MarketNavigation} />
			<Tab.Screen name="Search" component={SearchNavigation} />
			<Tab.Screen name="News" component={NewsNavigation} />
			<Tab.Screen name="Profile" component={ProfileNavigation} />
		</Tab.Navigator>
	);
}

export default TabNavigation;
