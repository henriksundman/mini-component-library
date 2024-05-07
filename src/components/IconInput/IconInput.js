import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
	const iconSize = size === 'small' ? 16 : 24;
	const strokeWidth = size === 'small' ? 1 : 2;

	return (
		<Wrapper>
			<Input placeholder={placeholder} size={size} width={width} />
			<StyledIcon id={icon} size={iconSize} strokeWidth={strokeWidth} />
			<VisuallyHidden>{label}</VisuallyHidden>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: relative;
	max-width: fit-content;
`;

const Input = styled.input`
	width: ${(p) => p.width}px;
	height: ${(p) => (p.size === 'small' ? 20 : 26)}px;
	border-top: none;
	border-left: none;
	border-right: none;
	border-bottom: ${(p) => (p.size === 'small' ? '1px' : '2px')} solid black;
	font-family: 'Roboto', sans-serif;
	font-size: ${(p) => (p.size === 'small' ? '1rem' : '1.25rem')};
	font-weight: 700;
	text-indent: ${(p) => (p.size === 'small' ? 24 : 36)}px;
	color: ${COLORS.gray700};
	cursor: pointer;

	&::placeholder {
		font-weight: 400;
		color: ${COLORS.gray500};
	}

	&:hover {
		color: ${COLORS.black};
	}
`;

const StyledIcon = styled(Icon)`
	pointer-events: none;
	position: absolute;
	bottom: 2px;
	left: 2px;
`;

export default IconInput;
