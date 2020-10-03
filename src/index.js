/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import {registerBlockType} from '@wordpress/blocks';
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import {__} from '@wordpress/i18n';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';
/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';



registerBlockType('create-block/practice-block', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __('My Card', 'practice-block'),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Simple Card block',
		'ppcard-block'
	),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: 'widgets',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: <svg id="Layer_1" enable-background="new 0 0 464 464" viewBox="0 0 464 464" xmlns="http://www.w3.org/2000/svg"><path d="m464 95v274c0 17.7-14.3 32-32 32h-400c-17.7 0-32-14.3-32-32v-274c0-17.7 14.3-32 32-32h400c17.7 0 32 14.3 32 32z" fill="#fe4f60"/><path d="m464 95v24.8c0 9.4-8 16-15.2 16-168 8.3-299.2 108.9-354.1 254.9-2.3 6.2-8.3 10.4-15 10.4h-47.7c-17.7 0-32-14.3-32-32v-274.1c0-17.7 14.3-32 32-32h400c17.7 0 32 14.3 32 32z" fill="#ff6d7a"/><path d="m0 135h464v68h-464z" fill="#42434d"/><path d="m453 135c-9.9 3.2-108.6-1.7-211.3 67.8-.4.3 10.9.2-241.7.2v-68z" fill="#4d4e59"/><g fill="#fff"><path d="m132 286h-67c-4.4 0-8-3.6-8-8s3.6-8 8-8h67c4.4 0 8 3.6 8 8s-3.6 8-8 8z"/><path d="m132 336h-67c-4.4 0-8-3.6-8-8s3.6-8 8-8h67c4.4 0 8 3.6 8 8s-3.6 8-8 8z"/></g></svg>,

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	attributes: {
		title: {
			type: 'string',
			default: 'Hello world'
		},
		details: {
			type: 'string',
			default: 'Content details here',
		},
		alignment: {
			type: 'string',
			default: 'none',
		},
		titleColor: {
			type: 'string',
			default:'#000000',
		},
		detailsColor: {
			type: 'string',
			default: '#000000',
		},
		cardColor : {
			type: 'string',
			default: '#ff613a',
		},
		cardWidth:{
			type:'number',
			default: 500,
		},
		cardPadding:{
			type:'number',
			default:30,
		},
		cardMargin:{
			type:'number',
			default: 0,
		},
		titleFontSize:{
			type:'number',
			default:16,
		}
	},

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});
