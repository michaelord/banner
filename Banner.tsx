import {Img} from 'components/media';
import * as Utils from 'components/libs';
import * as Types from 'components/types';
import React, {memo} from 'react';
import './Banner.scss';

type Layout = 'column' | 'stacked';

type Padding = 'none' | 'md' | 'lg' | 'xl' | '2xl' | 'screen';

export type BannerProps = {
	children?: Types.Children;
	theme?: Types.Theme;
	reverse?: Types.TrueFalse;
	contained?: Types.TrueFalse;
	//
	layout?: Layout;
	image?: Types.Image;
	pad?: Padding;
};

type MediaProps = {
	children?: Types.Children;
	className?: Types.Text;
	vAlign?: Types.vAlign;
	hAlign?: Types.hAlign;
};

export const Media = memo((props: MediaProps) => {
	const base: string = 'media';

	const {className, children, vAlign = 'center', hAlign = 'center'} = props;

	const atts: object = {
		className:
			Utils.getModifiers(base, {
				vAlign: `v-${vAlign}`,
				hAlign: `h-${hAlign}`,
			}) + `${className ? ` ${className}` : ''}`,
	};

	return <div {...atts}>{children}</div>;
});

export const Banner = memo((props: BannerProps) => {
	const {
		children,
		theme = 'inherit',
		layout = 'column',
		reverse,
		pad = 'default',
		contained = true,
		image = Utils.Placeholder.imageObj(600, 400),
	} = props;

	const base: string = 'banner';

	const atts: object = {
		className: Utils.getModifiers(base, {
			pad: `pad-${pad}`,
			layout,
			reverse,
			contained,
		}),
		'data-theme': theme,
	};

	return (
		<section {...atts}>
			<div className={`${base}__body`}>
				<div className={`${base}__main`}>
					<div className={`${base}__content`}>{children}</div>
				</div>
				<Media className={`${base}__media`}>
					<Img {...image} />
				</Media>
			</div>
		</section>
	);
});
