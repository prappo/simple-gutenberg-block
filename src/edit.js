/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import {__} from '@wordpress/i18n';

import {FontSizePicker, RangeControl} from '@wordpress/components';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
// import {TextControl ,PanelBody} from '@wordpress/components';
const {TextControl, PanelBody} = wp.components;

const {InspectorControls, ColorPalette, RichText} = wp.editor;
const {PanelColorSettings} = wp.blockEditor;
const {Fragment} = wp.element;
// const { PanelBody } = wp.components;

// const { InspectorControls } = wp.editor;
// const { InspectorControls } = '@wordpress/editor';

// const { PanelBody } = wp.components;

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes, className, setAttributes}) {

	const onChangeAlignment = (newAlignment) => {
		props.setAttributes({alignment: newAlignment === undefined ? 'none' : newAlignment});
	};


	return (
		<div>

			<InspectorControls>

				<PanelBody title={'Card Settings'}>
					<strong>Color</strong>
					<ColorPalette
						value={attributes.cardColor}
						onChange={(cardColor) => setAttributes({cardColor: cardColor})}
						colors={
							[
								{name: 'Red', color: '#f00'},
								{name: 'White', color: '#fff'},
								{name: 'Custom Red', color: '#ff613a'},
							]
						}
					>

					</ColorPalette>

					<strong>Width</strong>
					<RangeControl
						value={attributes.cardWidth}
						min={10}
						max={700}
						onChange={(value) => setAttributes({cardWidth: value})}
					/>
					<strong>Padding</strong>
					<RangeControl
						value={attributes.cardPadding}
						min={0}
						max={50}
						onChange={(value) => setAttributes({cardPadding: value})}
					/>

					<strong>Margin</strong>
					<RangeControl
						value={attributes.cardMargin}
						min={0}
						max={50}
						onChange={(value) => setAttributes({cardMargin: value})}
					/>

				</PanelBody>
				<PanelBody title={'Title Settings'}>
					<strong>Color</strong>
					<ColorPalette
						value={attributes.titleColor}
						onChange={(titleColor) => setAttributes({titleColor: titleColor})}
					>


					</ColorPalette>


				</PanelBody>

				<PanelBody title={'Details Colors'}>
					<ColorPalette
						value={attributes.detailsColor}
						onChange={(detailsColor) => setAttributes({detailsColor: detailsColor})}
					>

					</ColorPalette>

				</PanelBody>


			</InspectorControls>
			<div style={{
				backgroundColor: attributes.cardColor,
				width: attributes.cardWidth,
				padding: attributes.cardPadding,
				margin: attributes.cardMargin,
			}} id="wp-block-practice-card">

				<h1>
					<RichText
						label={__('Title', 'ppcard-block')}
						value={attributes.title}
						style={{color: attributes.titleColor}}
						onChange={(val) => setAttributes({title: val})}
					/>
				</h1>
				<p>
					<RichText
						label={__('Details', 'ppcard-block')}
						value={attributes.details}
						style={{color: attributes.detailsColor}}
						onChange={(val) => setAttributes({details: val})}
					/>
				</p>
			</div>
		</div>
	);
}
