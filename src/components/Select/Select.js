import React from 'react';
import styled from 'styled-components';

import VisuallyHidden from '../VisuallyHidden';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
	const [textWidth, setTextWidth] = React.useState();
	const displayedValue = getDisplayedValue(value, children);

	React.useEffect(() => {
		const test = document.getElementById('text-width');
		test.style.fontFamily = 'Roboto';
		test.style.fontSize = 16;
		test.innerText = displayedValue;

		setTextWidth(test.clientWidth + 70 + 'px');
	}, [displayedValue]);

	const styles = {
		width: textWidth,
	};

	return (
		<Wrapper style={styles}>
			<SelectBox value={value} onChange={onChange} style={styles}>
				{children}
			</SelectBox>
			<IconWrapper>
				<Icon id="chevron-down" size={24} />
			</IconWrapper>
			<TextWidth id="text-width"></TextWidth>
			<VisuallyHidden>Select to sort. {children}</VisuallyHidden>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: relative;
`;

const SelectBox = styled.select`
	appearance: none;
	font-size: 16px;
	padding: 12px 52px 12px 16px;
	background-color: ${COLORS.transparentGray15};
	border: none;
	border-radius: 8px;
	color: ${COLORS.gray700};
	cursor: pointer;

	&:hover {
		color: ${COLORS.black};
	}
`;

const IconWrapper = styled.div`
	pointer-events: none;
	position: absolute;
	right: 10px;
	top: 10px;
	cursor: pointer;
`;

const TextWidth = styled.div`
	position: absolute;
	visibility: hidden;
	height: auto;
	width: auto;
	white-space: nowrap;
`;

export default Select;
