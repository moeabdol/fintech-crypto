import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

function useCachedResources() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				SplashScreen.preventAutoHideAsync();

				await Font.loadAsync({
					PlusJakartaSansRegular: require('../../assets/fonts/PlusJakartaSans-Regular.ttf'),
					PlusJakartaSansExtraBold: require('../../assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
					PlusJakartaSansBold: require('../../assets/fonts/PlusJakartaSans-Bold.ttf'),
					PlusJakartaSansBoldItalic: require('../../assets/fonts/PlusJakartaSans-BoldItalic.ttf'),
					PlusJakartaSansMedium: require('../../assets/fonts/PlusJakartaSans-Medium.ttf'),
					PlusJakartaSansMediumItalic: require('../../assets/fonts/PlusJakartaSans-MediumItalic.ttf'),
					...FontAwesome.font,
				});
			} catch (error) {
				alert(error);
			} finally {
				setIsLoading(false);
				SplashScreen.hideAsync();
			}
		}
		loadResourcesAndDataAsync();
	}, []);

	return { isLoading };
}

export default useCachedResources;
