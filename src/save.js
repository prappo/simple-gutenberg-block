/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	return (

		<div style={ { background: attributes.cardColor }} id="wp-block-practice-card">
			<h1 style={{ color: attributes.titleColor }} dangerouslySetInnerHTML={{__html: attributes.title}}></h1>
			<p style={ { color: attributes.detailsColor }} dangerouslySetInnerHTML={{__html: attributes.details}}></p>
		</div>

	);
}
