import Breaker from '@/src/components/Breaker';
import Button from '@/src/components/Button';
import ButtonOutline from '@/src/components/ButtonOutline';
import type { AuthNavigationProps } from '@/src/types/navigation';
import { AntDesign } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';
import { WelcomeText } from './styles';

const blurhash = 'LGFFaXYk^6#M@-5c,1J5@[or[Q6.';

function Welcome() {
	const { navigate }: NavigationProp<AuthNavigationProps> = useNavigation();

	return (
		<SafeAreaView className="flex-1 justify-between items-center bg-white">
			<StatusBar style="auto" />
			<View className="w-full h-full px-4 items-center justify-center space-y-6">
				<View className="w-full px-4 items-center">
					<Animated.View
						className="flex-row justify-center items-center"
						entering={FadeInRight.duration(100).springify()}
					>
						<View>
							<View className="w-20 h-20 overflow-hidden">
								<Image
									className="w-full h-full flex-1"
									source={require('../../../../assets/images/logo.png')}
									placeholder={blurhash}
									contentFit="cover"
									transition={1000}
								/>
							</View>
						</View>
					</Animated.View>
				</View>

				<View className="justify-center items-center">
					<WelcomeText
						className="text-neutral-800 text-3xl font-medium leading-[60p x]"
						entering={FadeInDown.duration(100).delay(100).springify()}
					>
						Welcome
					</WelcomeText>
				</View>

				<View className="w-full justify-start">
					<Animated.View
						className="pb-6"
						entering={FadeInDown.duration(100).delay(300).springify()}
					>
						<Button title="Login" action={() => navigate('Login')} />
					</Animated.View>
					<Animated.View
						entering={FadeInDown.duration(100).delay(300).springify()}
					>
						<ButtonOutline
							title="Sign Up"
							action={() => navigate('Register')}
						/>
					</Animated.View>
				</View>

				<View>
					<Breaker />
				</View>

				<View className="w-full justify-normal">
					<Animated.View
						className="pb-4"
						entering={FadeInDown.duration(100).delay(600).springify()}
					>
						<ButtonOutline title="Continue with Google">
							<AntDesign name="google" size={20} color="gray" />
						</ButtonOutline>
					</Animated.View>
					<Animated.View
						className="pb-4"
						entering={FadeInDown.duration(100).delay(700).springify()}
					>
						<ButtonOutline title="Continue with Apple">
							<AntDesign name="apple1" size={20} color="gray" />
						</ButtonOutline>
					</Animated.View>
				</View>
			</View>
		</SafeAreaView>
	);
}

export default Welcome;
