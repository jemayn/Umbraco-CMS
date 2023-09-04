import {
	CreatePartialViewRequestModel,
	CreateScriptRequestModel,
	CreateTextFileViewModelBaseModel,
	PartialViewItemResponseModel,
	ScriptResource,
	ScriptResponseModel,
	UpdatePartialViewRequestModel,
	UpdateScriptRequestModel,
} from '@umbraco-cms/backoffice/backend-api';
import type { UmbControllerHostElement } from '@umbraco-cms/backoffice/controller-api';
import { DataSourceResponse, UmbDataSource } from '@umbraco-cms/backoffice/repository';
import { tryExecuteAndNotify } from '@umbraco-cms/backoffice/resources';

export class UmbScriptsServerDataSource
	implements UmbDataSource<CreateScriptRequestModel, string, UpdateScriptRequestModel, ScriptResponseModel, string>
{
	#host: UmbControllerHostElement;

	constructor(host: UmbControllerHostElement) {
		this.#host = host;
	}
	createScaffold(
		parentId: string | null,
		preset?: string | Partial<CreateTextFileViewModelBaseModel> | undefined,
	): Promise<DataSourceResponse<CreateTextFileViewModelBaseModel>> {
		throw new Error('Method not implemented.');
	}

	/**
	 * Fetches a partial view with the given path from the server
	 * @param {string} path
	 * @return {*}
	 * @memberof UmbStylesheetServerDataSource
	 */
	get(path: string): Promise<DataSourceResponse<ScriptResponseModel>> {
		if (!path) throw new Error('Path is missing');
		return tryExecuteAndNotify(this.#host, ScriptResource.getScript({ path }));
	}
	/**
	 * Creates a new partial view
	 *
	 * @param {CreatePartialViewRequestModel} requestBody
	 * @return {*}  {Promise<DataSourceResponse<string>>}
	 * @memberof UmbPartialViewDetailServerDataSource
	 */
	insert(requestBody: CreatePartialViewRequestModel): Promise<DataSourceResponse<string>> {
		return tryExecuteAndNotify(this.#host, ScriptResource.postScript({ requestBody }));
	}

	//TODO the parameters here are bit ugly, since unique is already in the request body parameter, but it has to be done to marry the UmbDataSource interface an backend API together... maybe come up with some nicer solution
	/**
	 * Updates a partial view
	 *
	 * @param {string} [unique='']
	 * @param {UpdatePartialViewRequestModel} requestBody
	 * @return {*}  {Promise<DataSourceResponse<any>>}
	 * @memberof UmbPartialViewDetailServerDataSource
	 */
	update(unique = '', requestBody: UpdatePartialViewRequestModel): Promise<DataSourceResponse<any>> {
		return tryExecuteAndNotify(this.#host, ScriptResource.putScript({ requestBody }));
	}
	/**
	 * Deletes a partial view
	 *
	 * @param {string} path
	 * @return {*}  {Promise<DataSourceResponse>}
	 * @memberof UmbPartialViewDetailServerDataSource
	 */
	delete(path: string): Promise<DataSourceResponse> {
		return tryExecuteAndNotify(this.#host, ScriptResource.deleteScript({ path }));
	}

	getItems(keys: Array<string>): Promise<DataSourceResponse<PartialViewItemResponseModel[]>> {
		return tryExecuteAndNotify(this.#host, ScriptResource.getScriptItem({ path: keys }));
	}
}
