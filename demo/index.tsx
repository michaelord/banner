import {Banner} from 'components/banner';
import {ContentBlock} from 'components/content';
import {Playground} from 'components/styleguide';
import React from 'react';
import {BannerProps} from '../Banner';

export const BannerData: BannerProps = {};

export const BannerDemo = () => (
	<Playground
		fullwidth
		fields={[
			{
				name: 'reverse',
				label: 'Reverse',
				value: false,
				type: 'switch',
			},
			{
				name: 'layout',
				label: 'Layout',
				type: 'radio',
				value: 'column',
				layout: 'boxed',
				options: [
					{
						label: 'Column',
						value: 'column',
					},
					{
						label: 'Stacked',
						value: 'stacked',
					},
				],
			},
			{
				name: 'align',
				label: 'Align',
				type: 'radio',
				value: 'left',
				layout: 'boxed',
				options: [
					{
						label: 'Left',
						value: 'left',
					},
					{
						label: 'Center',
						value: 'center',
					},
					{
						label: 'Right',
						value: 'right',
					},
				],
			},
		]}
	>
		{values => {
			const {align, ...rest} = values;
			return (
				<Banner theme="dark" {...rest}>
					<ContentBlock
						overline="This is a label"
						title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
						href="#"
						titlePriority={1}
						content={`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim</p>`}
						align={align}
						cta={[
							{label: 'Download', href: '#', priority: 'primary'},
							{label: 'Learn more', href: '#'},
						]}
					/>
				</Banner>
			);
		}}
	</Playground>
);
