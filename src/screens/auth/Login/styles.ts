import { Text, View } from 'react-native';
import styled from 'styled-components/native';

type LoginContainerProps = {
	height: number;
};

export const LoginContainer = styled(View)<LoginContainerProps>`
	height: ${props => props.height * 0.75} px;
`;

export const WelcomeText = styled(Text)`
	font-family: 'PlusJakartaSansBold';
`;

export const AccountText = styled(Text)`
	font-family: 'PlusJakartaSansMedium';
`;

export const RegisterText = styled(Text)`
	font-family: 'PlusJakartaSansBold';
`;
