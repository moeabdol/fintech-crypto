import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import useCachedResources from './hooks/useCachedResources';
import RootNavigation from './screens/navigation/RootNavigation';
import useUserStore from './store/useUserStore';

function App() {
	const { isLoading } = useCachedResources();
	const { user, session } = useUserStore();

	useEffect(() => {
		console.log('user', user);
		console.log('session', session);
	}, [user, session]);

	if (isLoading) return null;

	return (
		<Container>
			<StatusBar style="auto" />
			<RootNavigation />
		</Container>
	);
}

const Container = styled(View)`
	flex: 1;
`;

export default App;
