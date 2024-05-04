import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
	const displayedValue = getDisplayedValue(value, children);

	const styles = {
		width: [...displayedValue].length + 'em',
	};

	console.log(styles);
	return (
		<Wrapper style={styles}>
			<SelectBox value={value} onChange={onChange} style={styles}>
				{children}
			</SelectBox>
			<IconWrapper>
				<Icon id="chevron-down" size={24} />
			</IconWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: relative;
`;

const SelectBox = styled.select`
	appearance: none;
	width: var(--current-width);
	font-size: 16px;
	padding: 12px 52px 12px 16px;
	background-color: ${COLORS.transparentGray15};
	border: none;
	border-radius: 8px;
	color: ;
	cursor: pointer;
`;

const IconWrapper = styled.div`
	z-index: -1;
	position: absolute;
	right: 10px;
	top: 10px;
	cursor: pointer;
`;

export default Select;
