import type {
	ManifestWorkspaces,
	ManifestWorkspaceActions,
	ManifestWorkspaceViews,
} from '@umbraco-cms/backoffice/extension-registry';

import { UmbSubmitWorkspaceAction } from '@umbraco-cms/backoffice/workspace';

export const UMB_MEDIA_TYPE_WORKSPACE_ALIAS = 'Umb.Workspace.MediaType';

const workspace: ManifestWorkspaces = {
	type: 'workspace',
	kind: 'routable',
	alias: UMB_MEDIA_TYPE_WORKSPACE_ALIAS,
	name: 'Media Type Workspace',
	api: () => import('./media-type-workspace.context.js'),
	meta: {
		entityType: 'media-type',
	},
};

const workspaceViews: Array<ManifestWorkspaceViews> = [
	{
		type: 'workspaceView',
		kind: 'contentTypeDesignEditor',
		alias: 'Umb.WorkspaceView.MediaType.Design',
		name: 'Media Type Workspace Design View',
		meta: {
			label: '#general_design',
			pathname: 'design',
			icon: 'icon-document-dashed-line',
		},
		conditions: [
			{
				alias: 'Umb.Condition.WorkspaceAlias',
				match: workspace.alias,
			},
		],
	},
	{
		type: 'workspaceView',
		alias: 'Umb.WorkspaceView.MediaType.Structure',
		name: 'Media Type Workspace Structure View',
		js: () => import('./views/structure/media-type-workspace-view-structure.element.js'),
		weight: 800,
		meta: {
			label: '#contentTypeEditor_structure',
			pathname: 'structure',
			icon: 'icon-mindmap',
		},
		conditions: [
			{
				alias: 'Umb.Condition.WorkspaceAlias',
				match: workspace.alias,
			},
		],
	},
];

const workspaceActions: Array<ManifestWorkspaceActions> = [
	{
		type: 'workspaceAction',
		kind: 'default',
		alias: 'Umb.WorkspaceAction.MediaType.Save',
		name: 'Save Media Type Workspace Action',
		api: UmbSubmitWorkspaceAction,
		meta: {
			label: '#buttons_save',
			look: 'primary',
			color: 'positive',
		},
		conditions: [
			{
				alias: 'Umb.Condition.WorkspaceAlias',
				match: workspace.alias,
			},
		],
	},
];

export const manifests = [workspace, ...workspaceViews, ...workspaceActions];
