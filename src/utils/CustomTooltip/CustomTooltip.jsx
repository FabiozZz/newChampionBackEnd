import React from 'react';
import { Tooltip } from 'antd';

export const CustomTooltip = ({ color = 'light', title = '', placement = 'right', children }) => {
	const colorTooltip =
		color === 'green'
			? '#43BF41'
			: color === 'dark'
			? '#3D434A'
			: color === 'light'
			? 'white'
			: null;
	return (
		<Tooltip
			overlayClassName={`appToolTipClass${color}`}
			placement={placement}
			title={title}
			color={colorTooltip}>
			{children}
		</Tooltip>
	);
};
