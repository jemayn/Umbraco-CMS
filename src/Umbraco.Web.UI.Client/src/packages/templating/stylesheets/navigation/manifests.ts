import { UMB_STYLESHEET_TREE_ALIAS } from '../tree/index.js';

export const manifests = [
	{
		type: 'menuItem',
		kind: 'tree',
		alias: 'Umb.MenuItem.Stylesheets',
		name: 'Stylesheets Menu Item',
		weight: 20,
		meta: {
			label: 'Stylesheets',
			treeAlias: UMB_STYLESHEET_TREE_ALIAS,
			menus: ['Umb.Menu.Templating'],
		},
	},
	{
		type: 'workspaceContext',
		name: 'Stylesheet Navigation Structure Workspace Context',
		alias: 'Umb.Context.Stylesheet.NavigationStructure',
		api: () => import('./stylesheet-navigation-structure.context.js'),
		conditions: [
			{
				alias: 'Umb.Condition.WorkspaceAlias',
				match: 'Umb.Workspace.Stylesheet',
			},
		],
	},
	{
		type: 'workspaceFooterApp',
		kind: 'breadcrumb',
		alias: 'Umb.WorkspaceFooterApp.Stylesheet.Breadcrumb',
		name: 'Stylesheet Breadcrumb Workspace Footer App',
		conditions: [
			{
				alias: 'Umb.Condition.WorkspaceAlias',
				match: 'Umb.Workspace.Stylesheet',
			},
		],
	},
];
