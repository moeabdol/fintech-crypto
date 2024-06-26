import { Text, View } from 'react-native';
import styled from 'styled-components/native';

type RegisterContainerProps = {
	height: number;
};

export const RegisterContainer = styled(View)<RegisterContainerProps>`
	height: ${props => props.height * 0.75} px;
`;

export const WelcomeText = styled(Text)`
	font-family: 'PlusJakartaSansBold';
`;

export const AccountText = styled(Text)`
	font-family: 'PlusJakartaSansMedium';
`;

export const LoginText = styled(Text)`
	font-family: 'PlusJakartaSansBold';
`;
