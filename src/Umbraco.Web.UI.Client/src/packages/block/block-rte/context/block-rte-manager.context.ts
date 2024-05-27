import type { UmbBlockRteLayoutModel, UmbBlockRteTypeModel } from '../types.js';
import type { UmbBlockRteWorkspaceData } from '../index.js';
import type { UmbBlockDataType } from '../../block/types.js';
import type { Editor } from '@umbraco-cms/backoffice/external/tinymce';
import { UmbBlockManagerContext } from '@umbraco-cms/backoffice/block';

import '../components/block-rte-entry/index.js';

/**
 * A implementation of the Block Manager specifically for the Rich Text Editor.
 */
export class UmbBlockRteManagerContext<
	BlockLayoutType extends UmbBlockRteLayoutModel = UmbBlockRteLayoutModel,
> extends UmbBlockManagerContext<UmbBlockRteTypeModel, BlockLayoutType> {
	//
	#editor?: Editor;

	setTinyMceEditor(editor: Editor) {
		this.#editor = editor;
	}

	create(
		contentElementTypeKey: string,
		partialLayoutEntry?: Omit<BlockLayoutType, 'contentUdi'>,
		modalData?: UmbBlockRteWorkspaceData,
	) {
		const data = super.createBlockData(contentElementTypeKey, partialLayoutEntry);

		// Find block type.
		const blockType = this.getBlockTypes().find((x) => x.contentElementTypeKey === contentElementTypeKey);
		if (!blockType) {
			throw new Error(`Cannot create block, missing block type for ${contentElementTypeKey}`);
		}

		if (blockType.displayInline) {
			data.layout.displayInline = true;
		}

		return data;
	}

	insert(
		layoutEntry: BlockLayoutType,
		content: UmbBlockDataType,
		settings: UmbBlockDataType | undefined,
		modalData: UmbBlockRteWorkspaceData,
	) {
		if (!this.#editor) return false;

		this._layouts.appendOne(layoutEntry);

		this.insertBlockData(layoutEntry, content, settings, modalData);

		if (layoutEntry.displayInline) {
			this.#editor.selection.setContent(
				`<umb-rte-block-inline data-content-udi="${layoutEntry.contentUdi}"><!--Umbraco-Block--></umb-rte-block-inline>`,
			);
		} else {
			this.#editor.selection.setContent(
				`<umb-rte-block data-content-udi="${layoutEntry.contentUdi}"><!--Umbraco-Block--></umb-rte-block>`,
			);
		}

		this.#editor.fire('change');

		return true;
	}
}
