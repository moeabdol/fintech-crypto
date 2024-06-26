import blurhash from '@/src/constants/blurhash';
import type { SplashNavigationProps } from '@/src/types/navigation';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import React, { useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { CryptoText, FintechText } from './styles';

function Splash() {
	const { color, toggleColorScheme } = useColorScheme();
	const { navigate }: NavigationProp<SplashNavigationProps> = useNavigation();

	useEffect(() => {
		setTimeout(() => {
			navigate('Welcome');
		}, 2000);
	}, []);

	return (
		<SafeAreaView className="flex-1 justify-center items-center bg-white">
			<StatusBar style="auto" />
			<View className="w-full px-4 items-center">
				<Animated.View
					className="flex-row justify-center items-center"
					entering={FadeInRight.duration(100).delay(200).springify()}
				>
					<View className="w-20 h-20 overflow-hidden">
						<Image
							source={require('../../../../assets/images/logo.png')}
							placeholder={blurhash}
							contentFit="cover"
							transition={1000}
							className="w-full h-full"
						/>
					</View>
				</Animated.View>
				<Animated.View
					className="flex-row justify-center items-center"
					entering={FadeInRight.duration(100).delay(200).springify()}
				>
					<FintechText className="text-neutral-600 text-xl leading-[60px] pl-1">
						FINTECH
					</FintechText>
					<CryptoText className="text-[#31aca3] text-xl leading-[60px] pl-1">
						CRYPTO
					</CryptoText>
				</Animated.View>
			</View>
		</SafeAreaView>
	);
}

export default Splash;
