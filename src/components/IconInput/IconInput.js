import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
	return (
		<Wrapper>
			<Icon
				id={icon}
				size={20}
				style={{
					isolation: 'isolate',
					display: 'inline-block',
					marginBottom: '-3px',
				}}
			/>
			<Input placeholder={placeholder} />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	max-width: fit-content;
`;

const Input = styled.input`
	z-index: -1;
	margin-left: -16px;
	border-top: none;
	border-left: none;
	border-right: none;
	text-align: center;
`;

export default IconInput;
