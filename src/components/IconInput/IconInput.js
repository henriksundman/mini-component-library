import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
	const iconStyles = {};
	iconStyles.display = 'inline-block';
	iconStyles.marginBottom = size === 'small' ? '-5.2px' : '-6.8px';
	iconStyles.borderBottom =
		size === 'small' ? '1px solid black' : '2px solid black';

	const iconSize = size === 'small' ? 16 : 24;

	return (
		<Wrapper>
			<Icon id={icon} size={iconSize} style={iconStyles} />
			<Input placeholder={placeholder} size={size} width={width} />
			<VisuallyHidden>{label}</VisuallyHidden>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	max-width: fit-content;
`;

const Input = styled.input`
	width: ${(p) => p.width}px;
	border-top: none;
	border-left: none;
	border-right: none;
	border-bottom: ${(p) => (p.size === 'small' ? '1px' : '2px')} solid black;
	font-family: 'Roboto', sans-serif;
	font-size: ${(p) => (p.size === 'small' ? '.75rem' : '1rem')};
	font-weight: 700;
	text-indent: 8px;
	color: ${COLORS.gray700};

	&::placeholder {
		text-indent: 8px;
		font-weight: 400;
		color: ${COLORS.gray500};
	}

	&:hover {
		color: ${COLORS.black};
	}
`;

export default IconInput;
