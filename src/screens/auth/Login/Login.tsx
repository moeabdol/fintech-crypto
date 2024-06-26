import Breaker from '@/src/components/Breaker';
import Button from '@/src/components/Button';
import ButtonOutline from '@/src/components/ButtonOutline';
import type { AuthNavigationProps } from '@/src/types/navigation';
import { AntDesign } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
	ActivityIndicator,
	Dimensions,
	Pressable,
	Text,
	TextInput,
	View,
} from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import {
	AccountText,
	LoginContainer,
	RegisterText,
	WelcomeText,
} from './styles';

const { height } = Dimensions.get('window');

function Login() {
	const [email, setEmail] = useState<string>();
	const [password, setPassword] = useState<string>();
	const { navigate }: NavigationProp<AuthNavigationProps> = useNavigation();

	return (
		<View className="flex-1">
			{false && (
				<View className="absolute z-50 h-full w-full justify-center items-center">
					<View className="h-full w-full justify-center items-center bg-black opacity-[0.45]"></View>
					<View className="absolute">
						<ActivityIndicator size="large" color="white" />
					</View>
				</View>
			)}

			<View className="justify-center items-center relative flex-1">
				<LoginContainer
					height={height}
					className="justify-center w-full px-4 space-y-4"
				>
					<Animated.View
						className="justify-center items-center"
						entering={FadeInDown.duration(100).springify()}
					>
						<WelcomeText className="text-neutral-800 text-2xl leading-[60px]">
							Welcome Back
						</WelcomeText>
						<Text className="text-neutral-500 text-sm font-medium">
							Welcome back! Please enter your details.
						</Text>
					</Animated.View>

					<Animated.View
						className="py-8 space-y-8"
						entering={FadeInDown.duration(100).delay(200).springify()}
					>
						<View className="border-2 border-gray-400 rounded-lg ">
							<TextInput
								className="p-4"
								value={email}
								onChangeText={text => setEmail(text)}
								placeholder="Email"
								autoCapitalize="none"
							/>
						</View>

						<View className="border-2 border-gray-400 rounded-lg ">
							<TextInput
								className="p-4"
								value={password}
								onChangeText={text => setPassword(text)}
								placeholder="Password"
								autoCapitalize="none"
							/>
						</View>
					</Animated.View>

					<Animated.View
						className="w-full justify-start"
						entering={FadeInDown.duration(100).delay(300).springify()}
					>
						<View className="pb-6">
							<Button title="Login" />
						</View>
					</Animated.View>

					<View>
						<Breaker />
					</View>

					<Animated.View
						className="pb-4"
						entering={FadeInDown.duration(100).delay(600).springify()}
					>
						<ButtonOutline title="Continue with Google">
							<AntDesign name="google" size={20} color="gray" />
						</ButtonOutline>
					</Animated.View>

					<Animated.View
						className="flex-row justify-center items-center"
						entering={FadeInDown.duration(100).delay(700).springify()}
					>
						<AccountText className="text-neutral-500 text-lg font-medium leading-[38px] text-center">
							Don't have an account?{' '}
						</AccountText>
						<Pressable onPress={() => navigate('Register')}>
							<RegisterText className="text-neutral-800 text-lg font-medium leading-[38px] text-center">
								Register
							</RegisterText>
						</Pressable>
					</Animated.View>
				</LoginContainer>
			</View>
		</View>
	);
}

export default Login;
