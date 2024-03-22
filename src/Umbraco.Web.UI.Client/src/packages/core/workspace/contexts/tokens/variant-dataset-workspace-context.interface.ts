import type { UmbWorkspaceSplitViewManager } from '../../controllers/workspace-split-view-manager.controller.js';
import type { UmbPropertyDatasetContext } from '../../../property/property-dataset/property-dataset-context.interface.js';
import type { UmbSaveableWorkspaceContext } from './saveable-workspace-context.interface.js';
import type { Observable } from '@umbraco-cms/backoffice/external/rxjs';
import type { UmbVariantId, UmbVariantModel, UmbVariantOptionModel } from '@umbraco-cms/backoffice/variant';
import type { UmbControllerHost } from '@umbraco-cms/backoffice/controller-api';

export interface UmbVariantDatasetWorkspaceContext<VariantType extends UmbVariantModel = UmbVariantModel>
	extends UmbSaveableWorkspaceContext {
	// Name:
	getName(variantId?: UmbVariantId): string | undefined;
	setName(name: string, variantId?: UmbVariantId): void;

	// Variant:
	variants: Observable<Array<UmbVariantModel>>;
	variantOptions: Observable<Array<UmbVariantOptionModel<VariantType>>>;
	splitView: UmbWorkspaceSplitViewManager;
	getVariant(variantId: UmbVariantId): UmbVariantModel | undefined;

	// Property:
	// This one is async cause it needs to structure to provide this data: [NL]
	propertyValueByAlias<ReturnValue = unknown>(
		alias: string,
		variantId?: UmbVariantId,
	): Promise<Observable<ReturnValue | undefined> | undefined>;
	getPropertyValue<ReturnValue = unknown>(alias: string, variantId?: UmbVariantId): ReturnValue | undefined;
	setPropertyValue(alias: string, value: unknown, variantId?: UmbVariantId): Promise<void>;

	createPropertyDatasetContext(host: UmbControllerHost, variantId?: UmbVariantId): UmbPropertyDatasetContext;
}

/**
 * @deprecated Use UmbVariantWorkspaceContextInterface instead — Will be removed before RC.
 * TODO: Delete before RC.
 */
export interface UmbVariantableWorkspaceContextInterface extends UmbVariantDatasetWorkspaceContext {}
