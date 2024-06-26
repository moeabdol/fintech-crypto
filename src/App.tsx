import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import useCachedResources from './hooks/useCachedResources';
import RootNavigation from './screens/navigation/RootNavigation';

function App() {
	const { isLoading } = useCachedResources();

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
