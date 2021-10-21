import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { CustomTooltip } from '../../../utils/CustomTooltip/CustomTooltip';
import Tooltip from 'antd/lib/tooltip';

const data = [
	{
		id: 'france',
		color: 'hsl(150, 70%, 50%)',
		data: [
			{
				x: 0,
				y: 11,
			},
			{
				x: 1,
				y: 167,
			},
			{
				x: 2,
				y: 193,
			},
			{
				x: 3,
				y: 118,
			},
			{
				x: 4,
				y: 80,
			},
			{
				x: 5,
				y: 127,
			},
			{
				x: 6,
				y: 58,
			},
			{
				x: 7,
				y: 267,
			},
			{
				x: 8,
				y: 288,
			},
			{
				x: 9,
				y: 123,
			},
			{
				x: 10,
				y: 55,
			},
			{
				x: 11,
				y: 63,
			},
			{
				x: 12,
				y: 115,
			},
			{
				x: 13,
				y: 2,
			},
			{
				x: 14,
				y: 123,
			},
			{
				x: 15,
				y: 157,
			},
			{
				x: 16,
				y: 235,
			},
			{
				x: 17,
				y: 130,
			},
			{
				x: 18,
				y: 146,
			},
			{
				x: 19,
				y: 41,
			},
			{
				x: 20,
				y: 129,
			},
			{
				x: 21,
				y: 176,
			},
			{
				x: 22,
				y: 283,
			},
			{
				x: 23,
				y: 224,
			},
			{
				x: 24,
				y: 55,
			},
			{
				x: 25,
				y: 132,
			},
			{
				x: 26,
				y: 130,
			},
			{
				x: 27,
				y: 160,
			},
			{
				x: 28,
				y: 134,
			},
			{
				x: 29,
				y: 227,
			},
			{
				x: 30,
				y: 106,
			},
			{
				x: 31,
				y: 93,
			},
			{
				x: 32,
				y: 188,
			},
			{
				x: 33,
				y: 157,
			},
			{
				x: 34,
				y: 196,
			},
			{
				x: 35,
				y: 206,
			},
			{
				x: 36,
				y: 150,
			},
			{
				x: 37,
				y: 27,
			},
			{
				x: 38,
				y: 55,
			},
		],
	},
];

export const ReportsVisit = () => {
	return (
		<div style={{ gridColumn: '1/12', height: '300px', width: '100%' }}>
			<ResponsiveLine
				data={data}
				margin={{ top: 50, right: 0, bottom: 50, left: 60 }}
				xScale={{ type: 'linear', max: 40 }}
				yScale={{ type: 'linear', stacked: true, min: 0, max: 1000 }}
				yFormat=" >-.2f"
				curve="cardinal"
				axisTop={null}
				axisRight={null}
				axisBottom={{
					tickValues: [0, 20, 40, 60, 80, 100, 120],
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					format: '.2f',
					legendOffset: 36,
					legendPosition: 'middle',
				}}
				axisLeft={{
					tickValues: [0, 500, 1000, 1500, 2000, 2500, 3000],
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					format: '.2s',
					legendOffset: -40,
					legendPosition: 'middle',
				}}
				sliceTooltip={e => <CustomTooltip>asd</CustomTooltip>}
				enableSlices={'x'}
				colors={{ scheme: 'spectral' }}
				lineWidth={1}
				pointSize={4}
				pointColor={{ theme: 'background' }}
				pointBorderWidth={1}
				pointBorderColor={{ from: 'color', modifiers: [] }}
				pointLabelYOffset={-12}
				enableArea={true}
				areaOpacity={0.05}
				useMesh={true}
				gridXValues={[0, 20, 40, 60, 80, 100, 120]}
				gridYValues={[0, 500, 1000, 1500, 2000, 2500, 3000]}
			/>
		</div>
	);
};
