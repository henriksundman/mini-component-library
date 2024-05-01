/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
	small: {
		'--wrapper-height': '8px',
		'--bar-height': '8px',
		'--top': '0',
		'--left': '0',
	},
	medium: {
		'--wrapper-height': '12px',
		'--bar-height': '12px',
		'--top': '0',
		'--left': '0',
	},
	large: {
		'--wrapper-height': '24px',
		'--bar-height': '16px',
		'--top': '4px',
		'--left': '4px',
	},
};

const ProgressBar = ({
	value,
	size,
	width = 370,
	ariaLabel = 'Progress bar',
}) => {
	if (value < 0) {
		value = 0;
	}

	if (value > 100) {
		value = 100;
	}

	const styles = SIZES[size];

	const rightRadius = value > 99.9 ? '4px' : value > 99.5 ? '2px' : '0';

	const barWidth = size === 'large' ? width - 8 : width;

	return (
		<Wrapper
			aria-valuenow={value}
			aria-label={ariaLabel}
			width={width}
			style={styles}
			role="progressbar"
		>
			<Bar
				value={value}
				style={{
					borderTopRightRadius: rightRadius,
					borderBottomRightRadius: rightRadius,
					styles,
				}}
				barWidth={barWidth}
			></Bar>
			<VisuallyHidden>
				{ariaLabel}. Current value {value}
			</VisuallyHidden>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: relative;
	width: ${(p) => p.width + 'px'};
	height: var(--wrapper-height);
	border-radius: 8px;
	background-color: ${COLORS.transparentGray15};
	box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const Bar = styled.div`
	position: absolute;
	width: calc(${(p) => p.barWidth} / 100 * ${(p) => p.value}px);
	height: var(--bar-height);
	top: var(--top);
	left: var(--left);
	border-top-left-radius: 4px;
	border-bottom-left-radius: 4px;
	background-color: ${COLORS.primary};
`;

export default ProgressBar;
