/**
 * Creator Name: The Umbraco community
 * Creator Link: https://docs.umbraco.com/umbraco-cms/extending/language-files
 *
 * Language Alias: zh_tw
 * Language Int Name: Chinese (TW)
 * Language Local Name: 中文（正體，台灣）
 * Language LCID: 0404
 * Language Culture: zh-TW
 */
import type { UmbLocalizationDictionary } from '@umbraco-cms/backoffice/localization-api';
export default {
	actions: {
		assigndomain: '管理主機名稱',
		auditTrail: '跟蹤審計',
		browse: '流覽節點',
		changeDocType: '改變文檔類型',
		copy: '複製',
		create: '創建',
		createPackage: '創建擴展包',
		delete: '刪除',
		disable: '禁用',
		emptyrecyclebin: '清空回收站',
		exportDocumentType: '匯出文檔類型',
		importdocumenttype: '導入文檔類型',
		importPackage: '導入擴展包',
		liveEdit: '即時編輯模式',
		logout: '退出',
		move: '移動',
		notify: '提醒',
		protect: '公眾存取權限',
		publish: '發佈',
		unpublish: '取消發佈',
		refreshNode: '重新載入節點',
		republish: '重新發佈整站',
		restore: '回復',
		rights: '許可權',
		rollback: '回滾',
		sendtopublish: '提交至發佈者',
		sendToTranslate: '發送給翻譯',
		sort: '排序',
		translate: '翻譯',
		update: '更新',
		defaultValue: '預設值',
	},
	assignDomain: {
		permissionDenied: '禁止訪問',
		addNew: '添加功能變數名稱',
		remove: '移除',
		invalidNode: '錯誤的節點',
		invalidDomain: '功能變數名稱錯誤',
		duplicateDomain: '功能變數名稱重複',
		language: '語言',
		domain: '功能變數名稱',
		domainCreated: "新功能變數名稱 '%0%' 已創建",
		domainDeleted: "功能變數名稱 '%0%' 已刪除",
		domainExists: "功能變數名稱 '%0%' 已使用",
		domainUpdated: "功能變數名稱 '%0%' 已更新",
		orEdit: '編輯當前功能變數名稱',
		inherit: '繼承',
		setLanguage: '語言',
		setLanguageHelp:
			'改變目前節點以下其餘節點的文化設定，<br />或從父節點繼承文化設定。<br />\n    也會改變目前節點設定，除非下方網域有其他項目。',
		setDomains: '功能變數名稱',
	},
	auditTrails: {
		atViewingFor: '查看',
	},
	buttons: {
		clearSelection: '清除選擇',
		select: '選擇',
		somethingElse: '做別的事情',
		bold: '粗體',
		deindent: '取消段落縮進',
		formFieldInsert: '插入表單字段',
		graphicHeadline: '插入圖片標題',
		htmlEdit: '編輯Html',
		indent: '段落縮進',
		italic: '斜體',
		justifyCenter: '居中',
		justifyLeft: '左對齊',
		justifyRight: '右對齊',
		linkInsert: '插入連結',
		linkLocal: '插入本地連結（錨點）',
		listBullet: '圓點列表',
		listNumeric: '數字清單',
		macroInsert: '插入巨集',
		pictureInsert: '插入圖片',
		relations: '編輯關聯',
		returnToList: '回到清單',
		save: '保存',
		saveAndPublish: '保存並發佈',
		saveToPublish: '保存並提交審核',
		saveListView: '保存清單檢視',
		saveAndPreview: '預覽',
		showPageDisabled: '因未設置範本無法預覽',
		styleChoose: '選擇樣式',
		styleShow: '顯示樣式',
		tableInsert: '插入表格',
	},
	content: {
		isPublished: '已發表',
		about: '關於本頁',
		alias: '別名',
		alternativeTextHelp: '（圖片的替代文本）',
		alternativeUrls: '替代連結',
		clickToEdit: '點擊編輯',
		createBy: '創建者',
		createByDesc: '創建者',
		updatedBy: '更新者',
		createDate: '創建時間',
		createDateDesc: '此文件創建的日期時間',
		documentType: '文檔類型',
		editing: '編輯',
		expireDate: '過期於',
		itemChanged: '該項發佈之後有更改',
		itemNotPublished: '該項沒有發佈',
		lastPublished: '最近發佈',
		noItemsToShow: '沒有可供顯示的項目',
		listViewNoItems: '此列表中沒有可供顯示的項目',
		mediatype: '媒體類型',
		mediaLinks: '媒體連結位址',
		membergroup: '會員組',
		memberrole: '角色',
		membertype: '會員類型',
		noDate: '沒有選擇時間',
		nodeName: '頁標題',
		otherElements: '屬性',
		parentNotPublished: "該文檔不可見，因為其上級 '%0%' 未發佈。",
		parentNotPublishedAnomaly: '糟糕：該文檔已發佈，但是沒有更新至緩存（內部錯誤）',
		getUrlException: '糟糕：沒辦法連結到此網址（內部錯誤-請參見記錄）',
		routeError: '糟糕：此文件已經發表，但是網址和其他內容相衝 %0%',
		publish: '發佈',
		publishStatus: '發佈狀態',
		releaseDate: '發佈於',
		unpublishDate: '取消發表於',
		removeDate: '清空時間',
		sortDone: '排序完成',
		sortHelp: '拖拽項目或按一下列頭即可排序，可以按住Shift多選。',
		statistics: '統計',
		titleOptional: '標題（可選）',
		altTextOptional: '其他說明文字（可選）',
		type: '類型',
		unpublish: '取消發佈',
		updateDate: '最近編輯',
		updateDateDesc: '本文件修改時間',
		uploadClear: '移除文件',
		urls: '連結到文檔',
		memberof: '會員組成員',
		notmemberof: '非會員組成員',
		childItems: '子項目',
		target: '目標',
		scheduledPublishServerTime: '預計發表的時間（伺服器端）',
		scheduledPublishDocumentation:
			'<a href="https://docs.umbraco.com/umbraco-cms/fundamentals/data/scheduled-publishing#timezones" target="_blank" rel="noopener">這是什麼意思？</a>',
	},
	media: {
		clickToUpload: '點選以便上傳',
		orClickHereToUpload: '或按這裡選擇檔案',
		maxFileSize: '檔案大小上限為',
	},
	member: {
		createNewMember: '新增一位會員',
		allMembers: '所有會員',
	},
	create: {
		chooseNode: '您想在哪裡創建 %0%',
		createUnder: '創建在',
		updateData: '選擇類型和標題',
		noDocumentTypes: '此處沒有被允許的文檔類型。請至設定中的 <strong>"文檔類型"</strong>處變更。',
		noMediaTypes: '此處沒有被允許的媒體類型。請至設定中的 <strong>"媒體類型"</strong>處變更。',
		documentTypeWithoutTemplate: '文檔類型沒有相關範本',
		newFolder: '沒有資料夾',
		newDataType: '新資料類別',
	},
	dashboard: {
		browser: '流覽您的網站',
		dontShowAgain: '- 隱藏',
		nothinghappens: '如果Umbraco沒有打開，您可能需要允許彈出式視窗。',
		openinnew: '已經在新視窗中打開',
		restart: '重啟',
		visit: '訪問',
		welcome: '歡迎',
	},
	prompt: {
		stay: '留下',
		discardChanges: '放棄變更',
		unsavedChanges: '您有未存檔的變更',
		unsavedChangesWarning: '您確定要離開本頁？ - 您有未存檔的變更',
	},
	bulk: {
		done: '完成',
		deletedItem: '刪除 %0% 個項目',
		deletedItems: '刪除 %0% 個項目',
		deletedItemOfItem: '刪除 %1% 個中的 %0% 個項目',
		deletedItemOfItems: '刪除 %1% 個中的 %0% 個項目',
		publishedItem: '已發佈 %0% 個項目',
		publishedItems: '已發佈 %0% 個項目',
		publishedItemOfItem: '已發佈 %1% 個中的 %0% 個項目',
		publishedItemOfItems: '已發佈 %1% 個中的 %0% 個項目',
		unpublishedItem: '取消發佈 %0% 個項目',
		unpublishedItems: '取消發佈 %0% 個項目',
		unpublishedItemOfItem: '取消發佈 %1 個中的 %0% 個項目',
		unpublishedItemOfItems: '取消發佈 %1 個中的 %0% 個項目',
		movedItem: '移動 %0% 個項目',
		movedItems: '移動 %0% 個項目',
		movedItemOfItem: '移動 %1 個中的 %0% 個項目',
		movedItemOfItems: '移動 %1 個中的 %0% 個項目',
		copiedItem: '複製 %0% 個項目',
		copiedItems: '複製 %0% 個項目',
		copiedItemOfItem: '複製 %1 個中的 %0% 個項目',
		copiedItemOfItems: '複製 %1 個中的 %0% 個項目',
	},
	defaultdialogs: {
		anchorInsert: '錨點名稱',
		assignDomain: '管理主機名稱',
		closeThisWindow: '關閉窗口',
		confirmdelete: '您確定要刪除嗎',
		confirmdisable: '您確定要禁用嗎',
		confirmlogout: '您確定嗎?',
		confirmSure: '您確定嗎？',
		cut: '剪切',
		editDictionary: '編輯字典項',
		editLanguage: '編輯語言',
		insertAnchor: '插入本地連結',
		insertCharacter: '插入字元',
		insertgraphicheadline: '插入圖片標題',
		insertimage: '插入圖片',
		insertlink: '插入連結',
		insertMacro: '插入巨集',
		inserttable: '插入表格',
		lastEdited: '最近編輯',
		link: '連結',
		linkinternal: '內部連結：',
		linklocaltip: '本地連結請用“#”號開頭',
		linknewwindow: '在新視窗中打開？',
		macroDoesNotHaveProperties: '本巨集沒有包含您可以編輯的屬性',
		paste: '粘貼',
		permissionsEdit: '編輯許可權',
		recycleBinDeleting: '正在清空回收站，請不要關閉窗口。',
		recycleBinIsEmpty: '回收站已清空',
		recycleBinWarning: '從回收站刪除的項目將不可恢復',
		regexSearchError:
			"<a target='_blank' rel='noopener' href='http://regexlib.com'>regexlib.com</a>的網站服務目前出現些狀況，而我們無能為力。我們對此不便感到十分抱歉。",
		regexSearchHelp: "查找規則運算式來驗證輸入，如: 'email、'zip-code'、'URL'。",
		removeMacro: '移除巨集',
		requiredField: '必填項目',
		sitereindexed: '網站已重建索引',
		siterepublished: '網站緩存已刷新，所有已發佈的內容更新生效。',
		siterepublishHelp: '網站緩存將會刷新，所有已發佈的內容將會更新。',
		tableColumns: '表格列數',
		tableRows: '表格行數',
		thumbnailimageclickfororiginal: '點擊圖片查看完整大小',
		treepicker: '拾取項',
		viewCacheItem: '查看緩存項',
		relateToOriginalLabel: '與原本相關',
		theFriendliestCommunity: '最友善的社群',
		linkToPage: '頁面連結',
		openInNewWindow: '打開此連結文檔至新視窗或標籤頁',
		linkToMedia: '媒體連結',
		selectMedia: '選擇媒體',
		selectIcon: '選擇圖示',
		selectItem: '選擇項目',
		selectLink: '選擇連結',
		selectMacro: '選擇巨集',
		selectContent: '選擇內容',
		selectMember: '選擇會員',
		selectMemberGroup: '選擇會員群組',
		noIconsFound: '沒有找到任何圖示',
		noMacroParams: '本巨集沒有需要參數',
		externalLoginProviders: '外部登入提供者',
		exceptionDetail: '例外細節',
		stacktrace: '詳細記錄',
		innerException: '內部例外',
		linkYour: '連結您的',
		unLinkYour: '取消連結您的',
		account: '帳戶',
		selectEditor: '選擇編輯器',
	},
	dictionaryItem: {
		description:
			"\n      為此字典項目 '<em>%0%</em>' 編輯不同語言版本，<br />您可以在左方選單「語言」中增添新的語言\n   ",
		displayName: '語言名稱',
	},
	placeholders: {
		username: '輸入您的使用者名稱',
		password: '輸入您的密碼',
		confirmPassword: '確認您的密碼',
		nameentity: '命名此 %0%...',
		entername: '輸入一個名稱',
		label: '標籤...',
		enterDescription: '輸入一段描述...',
		search: '搜尋請輸入...',
		filter: '過濾請輸入...',
		enterTags: '增加標籤（每個標籤後請按輸入鍵）...',
		email: '輸入您的電子郵件',
	},
	editcontenttype: {
		createListView: '新增自訂清單檢視',
		removeListView: '移除自訂清單檢視',
	},
	editdatatype: {
		addPrevalue: '添加預設值',
		dataBaseDatatype: '資料庫資料類型',
		guid: '資料類型唯一標識',
		renderControl: '渲染控制項',
		rteButtons: '按鈕',
		rteEnableAdvancedSettings: '允許高級設置',
		rteEnableContextMenu: '允許快顯功能表',
		rteMaximumDefaultImgSize: '插入圖片預設最大',
		rteRelatedStylesheets: '關聯的樣式表',
		rteShowLabel: '顯示標籤',
		rteWidthAndHeight: '寬和高',
	},
	errorHandling: {
		errorButDataWasSaved: '資料已保存，但是發佈前您需要修正一些錯誤：',
		errorChangingProviderPassword: '當前成員提供程式不支援修改密碼(EnablePasswordRetrieval的值應該為true)',
		errorExistsWithoutTab: '%0% 已存在',
		errorHeader: '發現錯誤：',
		errorHeaderWithoutTab: '發現錯誤：',
		errorInPasswordFormat: '密碼最少%0%位元，且至少包含%1%位元非字母數位記號',
		errorIntegerWithoutTab: '%0% 必須是整數',
		errorMandatory: '%1% 中的 %0% 欄位是必填項',
		errorMandatoryWithoutTab: '%0% 是必填項',
		errorRegExp: '%1% 中的 %0% 格式不正確',
		errorRegExpWithoutTab: '%0% 格式不正確',
	},
	errors: {
		receivedErrorFromServer: '收到伺服器傳來的錯誤',
		dissallowedMediaType: '該檔案類型已被管理員禁用',
		codemirroriewarning: '注意，儘管配置中允許CodeMirror，但是它在IE上不夠穩定，所以無法在IE運行。',
		contentTypeAliasAndNameNotNull: '請為新的屬性類型填寫名稱和別名！',
		filePermissionsError: '許可權有問題，訪問指定文檔或資料夾失敗！',
		macroErrorLoadingPartialView: '讀取片段視圖腳本錯誤（檔案：%0%）',
		missingTitle: '請輸入標題',
		missingType: '請選擇類型',
		pictureResizeBiggerThanOrg: '圖片尺寸大於原始尺寸不會提高圖片品質，您確定要把圖片尺寸變大嗎?',
		startNodeDoesNotExists: '預設打開頁面不存在，請聯繫管理員',
		stylesMustMarkBeforeSelect: '請先選擇內容，再設置樣式。',
		stylesNoStylesOnPage: '沒有可用的樣式',
		tableColMergeLeft: '請把游標放在您要合併的兩個儲存格中的左邊儲存格',
		tableSplitNotSplittable: '非合併儲存格不能分離。',
	},
	general: {
		about: '關於',
		action: '操作',
		actions: '操作',
		add: '添加',
		alias: '別名',
		all: '所有',
		areyousure: '您確定嗎？',
		back: '回去',
		border: '邊框',
		by: '或',
		cancel: '取消',
		cellMargin: '儲存格邊距',
		choose: '選擇',
		close: '關閉',
		closewindow: '關閉窗口',
		comment: '備註',
		confirm: '確認',
		constrainProportions: '強制屬性',
		continue: '繼續',
		copy: '複製',
		create: '創建',
		database: '資料庫',
		date: '時間',
		default: '默認',
		delete: '刪除',
		deleted: '已刪除',
		deleting: '正在刪除…',
		design: '設計',
		dimensions: '規格',
		down: '下',
		download: '下載',
		edit: '編輯',
		edited: '已編輯',
		elements: '元素',
		email: '郵箱',
		error: '錯誤',
		findDocument: '查找文檔',
		height: '高',
		help: '幫助',
		icon: '圖示',
		import: '導入',
		innerMargin: '內邊距',
		insert: '插入',
		install: '安裝',
		invalid: '不合格',
		justify: '對齊',
		language: '語言',
		layout: '佈局',
		loading: '載入中',
		locked: '鎖定',
		login: '登入',
		logoff: '退出',
		logout: '登出',
		macro: '巨集',
		mandatory: '必要',
		move: '移動',
		name: '名稱',
		new: '新的',
		next: '下一步',
		no: '否',
		of: '屬於',
		ok: '確定',
		open: '打開',
		or: '或',
		password: '密碼',
		path: '路徑',
		pleasewait: '請稍候…',
		previous: '上一步',
		properties: '屬性',
		reciept: '接收資料郵箱',
		recycleBin: '回收站',
		remaining: '保持狀態中',
		rename: '重命名',
		renew: '更新',
		required: '必要',
		retry: '重試',
		rights: '許可權',
		search: '搜索',
		server: '伺服器',
		show: '顯示',
		showPageOnSend: '在發送時預覽',
		size: '大小',
		sort: '排序',
		submit: '送出',
		type: '類型',
		typeToSearch: '輸入內容開始搜尋…',
		up: '上',
		update: '更新',
		upgrade: '更新',
		upload: '上傳',
		url: '連結位址',
		user: '用戶',
		username: '用戶名',
		value: '值',
		view: '查看',
		welcome: '歡迎…',
		width: '寬',
		yes: '是',
		folder: '資料夾',
		searchResults: '搜尋結果',
		reorder: '重新排列',
		reorderDone: '我已經完成排列',
		preview: '預覽',
		changePassword: '更改密碼',
		to: '到',
		listView: '清單檢視',
		saving: '存檔中...',
		current: '目前',
		embed: '內嵌',
		selected: '選取的',
	},
	colors: {
		blue: '藍',
	},
	shortcuts: {
		addGroup: '增加標籤頁',
		addProperty: '增加屬性',
		addEditor: '增加編輯器',
		addTemplate: '增加範本',
		addChildNode: '增加子節點',
		addChild: '增加子項目',
		editDataType: '編輯資料類別',
		navigateSections: '瀏覽區塊',
		shortcut: '捷徑',
		showShortcuts: '顯示捷徑',
		toggleListView: '開關清單檢視',
		toggleAllowAsRoot: '開關是否允許為根項目',
	},
	graphicheadline: {
		backgroundcolor: '背景色',
		bold: '粗體',
		color: '前景色',
		font: '字體',
		text: '文本',
	},
	headers: {
		page: '頁面',
	},
	installer: {
		databaseErrorCannotConnect: '無法連接到資料庫。',
		databaseFound: '發現資料庫',
		databaseHeader: '資料庫配置',
		databaseInstall: '\n      請按 <strong>安裝</strong> 按鈕來安裝Umbraco資料庫 %0%\n    ',
		databaseInstallDone: 'Umbraco %0% 已經複製到您的資料庫了。請按<strong>下一步</strong>繼續。',
		databaseText:
			'要完成此步驟，您必須瞭解連結資料庫伺服器的重要資訊("connection string")。<br />\n        若需要時，請聯繫您的網路公司。如果您在本地機器或伺服器安裝的話，您也許需要聯絡系統管理者。',
		databaseUpgrade:
			'\n      <p>\n      點選<strong>升級</strong>按鈕來升級Umbraco資料庫 %0%</p>\n      <p>\n      請別擔心 - 不會刪除任何資料而且馬上就會繼續運作！\n      </p>\n      ',
		databaseUpgradeDone: '您的資料庫已經升級至最新版本%0%。<br />點選<strong>下一步</strong>繼續。',
		databaseUpToDate: '目前資料庫是最新的！點選<strong>下一步</strong>繼續設定精靈。',
		defaultUserChangePass: '<strong>預設使用者的密碼必須更改！</strong>',
		defaultUserDisabled:
			'<strong>預設使用者已經被暫停或沒有Umbraco的使用權！</strong></p><p>不需更多的操作步驟。點選<strong>下一步</strong>繼續。',
		defaultUserPassChanged:
			'<strong>安裝後預設使用者的密碼已經成功修改！</strong></p><p>不需更多的操作步驟。點選<strong>下一步</strong>繼續。',
		defaultUserPasswordChanged: '密碼已更改',
		greatStart: '作為入門者，從視頻教程開始吧！',
		None: '安裝失敗。',
		permissionsAffectedFolders: '受影響的檔和資料夾',
		permissionsAffectedFoldersMoreInfo: '此處查看更多資訊',
		permissionsAffectedFoldersText: '您需要對以下檔和資料夾授於ASP.NET用戶修改許可權',
		permissionsAlmostPerfect:
			'<strong>您的權限設定幾近完美！</strong><br /><br />\n        您可以正常執行Umbraco沒有任何問題，只差您將沒有辦法安裝那些建議需要全部許可權的插件。',
		permissionsHowtoResolve: '如何解決',
		permissionsHowtoResolveLink: '點擊閱讀文字版',
		permissionsHowtoResolveText: '觀賞我們的<strong>影片教學</strong>來瞭解如何設定Umbraco的資料夾權限或閱讀文字版本。',
		permissionsMaybeAnIssue:
			'<strong>您的權限可能有點小問題！</strong>\n      <br/><br />\n      您可以正常執行Umbraco沒有任何問題，然而您將無法新增資料夾或安裝那些可以讓Umbraco發揮全力的插件。',
		permissionsNotReady:
			'<strong>您的權限設定尚未未完成！</strong>\n          <br /><br />\n         您需要更新權限設定才能執行Umbraco。',
		permissionsPerfect:
			'<strong>您的權限設定完美無瑕！</strong><br /><br />\n              您已經準備好執行Umbraco和安裝插件！',
		permissionsResolveFolderIssues: '解決資料夾問題',
		permissionsResolveFolderIssuesLink: '點此查看ASP.NET和創建資料夾的問題解決方案',
		permissionsSettingUpPermissions: '設置資料夾許可權',
		permissionsText:
			'\n      Umbraco需要某些資料夾的寫和修改權限來儲存檔案，好比圖片或文檔。\n      它也需要儲存暫時性資料（快取暫存）來增強網站的表現。\n    ',
		runwayFromScratch: '我要從頭開始',
		runwayFromScratchText:
			'\n        您的網站目前完全沒有資料，所以如果您想要從頭開始並增添您自己的文檔種類和範本，現在正是絕佳時機。\n        (<a href="https://umbraco.tv/documentation/videos/for-site-builders/foundation/document-types">學習該怎麼做</a>)\n        您晚點仍可以選擇安裝Runway，請至開發者區域選擇安裝。\n      ',
		runwayHeader: '您剛剛安裝了一個乾淨的系統，要繼續嗎？',
		runwayInstalled: '“Runway”已安裝',
		runwayInstalledText:
			'\n      您已經有了良好的基礎。請選擇您想要在其上安裝哪些模組。<br />\n      這是我們的模組推薦清單，選取您想要安裝的項目，或者至 <a href="#" onclick="toggleModules(); return false;" id="toggleModuleList"> 查詢完整清單</a>。\n      ',
		runwayOnlyProUsers: '僅推薦高級用戶使用',
		runwaySimpleSite: '給我一個簡單的網站',
		runwaySimpleSiteText:
			'\n      <p>\n      "Runway"是一個提供基本檔案類別和範本的簡單網站。安裝程式會自動幫您設定Runway，\n      但你仍可輕易編輯，擴充或移除它。它並非必要項目而且您可以在沒它的情況下完美執行Umbraco。然而，\n      Runway提供一個輕鬆簡便但基於寶貴經驗的平台讓您可以更快開始。\n      如果您安裝Runway，您還可以選擇名為「Runway模組」的基本區塊來加強Runway頁面。\n        </p>\n        <small>\n        <em>內含於Runway：</em> 首頁，準備開始頁面，模組安裝頁面。<br />\n        <em>可選模組：</em> 上方瀏覽列，網站地圖，聯絡，藝廊。\n        </small>\n      ',
		runwayWhatIsRunway: '“Runway”是什麼？',
		step1: '步驟 1/5：接受授權合約',
		step2: '步驟 2/5：資料庫配置',
		step3: '步驟 3/5：文件許可權驗證',
		step4: '步驟 4/5：系統安全性',
		step5: '步驟 5/5：一切就緒，可以開始使用系統。',
		thankYou: '感謝選擇我們的產品',
		theEndBrowseSite: '<h3>參觀您的新網站</h3>\n您剛安裝好Runway，何不瞧瞧它的模樣。',
		theEndFurtherHelp:
			'<h3>更多的幫忙與資訊</h3>\n從我們獲獎的社群得到幫助，瀏覽文件，或觀看免費影片來瞭解如何輕鬆架設網站，如何使用插件，和瞭解Umbraco項目名稱的快速上手指引。',
		theEndHeader: '系統 %0% 安裝完畢',
		theEndInstallSuccess:
			'您可以點選下方按鈕「啟動Umbraco」來獲得<strong>快速開始指引</strong>。<br />如果您是<strong>Umbraco的新成員</strong>，\n您可以在其中找到相當多的資源。',
		theEndOpenUmbraco:
			'<h3>啟動Umbraco</h3>\n想要管理您的網站時，只需開啟Umbraco後台便可增加內容，更新範本和樣式表，或增添新功能。',
		Unavailable: '無法連接到資料庫。',
		Version3: '系統版本 3',
		Version4: '系統版本 4',
		watch: '觀看',
		welcomeIntro:
			'精靈會指引您完成設定Umbraco的過程，以便重新開始或升級到3.0。<br /><br />\n                               點選<strong>"下一步"</strong>來啟動精靈。',
	},
	language: {
		cultureCode: '語言代碼',
		displayName: '語言名稱',
	},
	lockout: {
		lockoutWillOccur: '使用者在空閒狀態下將會自動登出',
		renewSession: '已更新，繼續工作。',
	},
	login: {
		greeting0: '歡迎',
		greeting1: '歡迎',
		greeting2: '歡迎',
		greeting3: '歡迎',
		greeting4: '歡迎',
		greeting5: '歡迎',
		greeting6: '歡迎',
		instruction: '下方登入',
		signInWith: '登入使用',
		timeout: '連線時間過了',
		bottomText:
			'<p style="text-align:right;">&copy; 2001 - %0% <br /><a href="https://umbraco.com" style="text-decoration: none" target="_blank" rel="noopener">Umbraco.com</a></p> ',
		forgottenPassword: '忘記密碼？',
		forgottenPasswordInstruction: '一封內有重設密碼連結的電子郵件已經寄出給您',
		requestPasswordResetConfirmation: '一封內有重設密碼連結的電子郵件已經寄到此信箱',
		returnToLogin: '回到登入畫面',
		setPasswordInstruction: '請輸入新密碼',
		setPasswordConfirmation: '您的密碼已經更新',
		resetCodeExpired: '您點選的連結是無效或過期的',
		resetPasswordEmailCopySubject: 'Umbraco：重設密碼',
		resetPasswordEmailCopyFormat:
			'<p>您登入到後台的使用者名稱是：<strong>%0%</strong></p><p>點選<a href="%1%"><strong>這裡</strong></a>來重設您的密碼或將此連結複製/貼上到您的瀏覽器：</p><p><em>%1%</em></p>',
	},
	main: {
		dashboard: '儀錶板',
		sections: '區域',
		tree: '內容',
	},
	moveOrCopy: {
		choose: '選擇上面的頁面…',
		copyDone: '%0% 被複製到 %1%',
		copyTo: '將 %0% 複製到',
		moveDone: '%0% 已被移動到 %1%',
		moveTo: '將 %0% 移動到',
		nodeSelected: '作為內容的根結點，點“確定”。',
		noNodeSelected: '尚未選擇節點，請選擇一個節點點擊“確定”。',
		notAllowedByContentType: '類型不符不允許選擇',
		notAllowedByPath: '該項不能移到其子項',
		notAllowedAtRoot: '當前節點不能建在根節點下',
		notValid: '您在子項的許可權不夠，不允許該操作。',
		relateToOriginal: '複本和原本建立關聯',
	},
	notifications: {
		editNotifications: '為 %0% 編寫通知',
		notificationsSavedFor: '通知已經為 %0% 保存',
		notifications: '通知',
	},
	packager: {
		chooseLocalPackageText:
			'\n      要從您的電腦上選擇擴展包，請按瀏覽<br />\n         按鈕並點選該檔案。Umbraco擴展包通常有「.zip」的副檔名。\n      ',
		packageAuthor: '作者',
		packageDocumentation: '文檔',
		packageMetaData: '中繼資料',
		packageName: '名稱',
		packageNoItemsHeader: '擴展包不含任何項',
		packageNoItemsText:
			'這個擴展包檔案裡面沒有任何移除項目資訊。<br/><br/>\n      您可以點選下方「移除擴展包」來安全地移除此項目。',
		packageOptions: '選項',
		packageReadme: '說明',
		packageRepository: '程式庫',
		packageUninstallConfirm: '確認卸載',
		packageUninstalledHeader: '已卸載',
		packageUninstalledText: '擴展包卸載成功',
		packageUninstallHeader: '卸載',
		packageUninstallText:
			'您可以取消選取任何不想要現在移除的項目。當您點選「確認移除」按鈕後，所有點選項目將被移除。<br />\n      <span style="color: Red; font-weight: bold;">注意：</span> 任何文檔，媒體或需要這些項目才能運作的物件將會停止運作，並可能使得系統不穩定，\n      請小心移除。若有疑慮，請聯絡擴展包作者。',
		packageVersion: '版本',
	},
	paste: {
		doNothing: '帶格式粘貼（不推薦）',
		errorMessage: '您所粘貼的文本含有特殊字元或格式，Umbraco將清除以適應網頁。',
		removeAll: '無格式粘貼',
		removeSpecialFormattering: '粘貼並移除格式（推薦）',
	},
	publicAccess: {
		paAdvanced: '基於角色的保護',
		paAdvancedHelp: '如果您希望使用角色來控制登入訪問權限，<br /> 請使用Umbraco的會員群組。',
		paAdvancedNoGroups: '使用基於角色的授權需要首先建立會員組。',
		paErrorPage: '錯誤頁',
		paErrorPageHelp: '當用戶登錄後訪問沒有許可權的頁時顯示該頁',
		paHowWould: '選擇限制訪問此頁的方式',
		paIsProtected: '%0% 現在處於受保護狀態',
		paIsRemoved: '%0% 的保護被取消 ',
		paLoginPage: '登錄頁',
		paLoginPageHelp: '選擇公開的登錄入口',
		paRemoveProtection: '取消保護',
		paSelectPages: '選擇一個包含登錄表單和提示資訊的頁',
		paSelectRoles: '選擇訪問該頁的角色類型',
		paSetLogin: '為此頁設置帳號和密碼',
		paSimple: '單用戶保護',
		paSimpleHelp: '如果您只希望提供一個用戶名和密碼就能訪問',
	},
	publish: {
		contentPublishedFailedAwaitingRelease: '\n      %0% 無法現在發佈，因為它已經設定發佈時程。\n    ',
		contentPublishedFailedExpired: '\n      %0% 無法發佈，因為已經過期。\n    ',
		contentPublishedFailedInvalid: '\n      %0% 無法發佈，因為屬性：%1% 沒有通過驗證規則。\n    ',
		contentPublishedFailedByEvent: '\n      %0% 無法發佈，因為第三方擴充元件取消這項操作。\n    ',
		contentPublishedFailedByParent: '\n      %0% 無法發佈，因為父頁面並沒有發佈。\n    ',
		includeUnpublished: '包含未發佈的子項',
		inProgress: '正在發佈，請稍候…',
		inProgressCounter: '%0% 中的 %1% 頁面已發佈…',
		nodePublish: '%0% 已發佈',
		nodePublishAll: '%0% 及其子項已發佈',
		publishAll: '發佈 %0% 及其子項',
		publishHelp:
			'點選<em>發佈</em>按鈕來將<strong>%0%</strong>的內容設定為公開。<br/><br />\n      您可以同時發佈本頁以及其子項目若您點選下面的<em>包含子頁</em>。\n      ',
	},
	colorpicker: {
		noColors: '您尚未設定任何許可顏色',
	},
	relatedlinks: {
		enterExternal: '輸入外部連結',
		chooseInternal: '選擇內部連結',
		caption: '標題',
		link: '連結',
		newWindow: '新視窗',
		captionPlaceholder: '輸入新標題',
		externalLinkPlaceholder: '輸入連結',
	},
	imagecropper: {
		reset: '重設',
	},
	rollback: {
		diffHelp:
			'這顯示目前版本以及所選版本的差異。<br /><del>紅色</del> 文字將不會顯示於所選版本，而<ins>綠色</ins>表示增加部分。',
		documentRolledBack: '文檔已回滾',
		htmlHelp: '這顯示所選版本的HTML格式，如果您想要比較兩版本的差異，請使用比較檢視',
		rollbackTo: '回滾至',
		selectVersion: '選擇版本',
		view: '查看',
	},
	scripts: {
		editscript: '編輯腳本',
	},
	sections: {
		concierge: 'Concierge',
		content: '內容',
		courier: 'Courier',
		developer: '開發',
		installer: '設定精靈',
		media: '媒體',
		member: '會員',
		newsletters: '消息',
		settings: '設置',
		statistics: '統計',
		translation: '翻譯',
		users: '用戶',
		help: '說明',
		forms: '表單',
	},
	help: {
		theBestUmbracoVideoTutorials: '最好的Umbraco影片教學',
	},
	settings: {
		defaulttemplate: '預設範本',
		importDocumentTypeHelp:
			'要導入文檔類型，請點擊“流覽”按鈕，再點擊“導入”，然後在您電腦上查找 ".udt"檔導入（下一頁中需要您再次確認）',
		newtabname: '新建選項卡標題',
		nodetype: '節點類型',
		objecttype: '類型',
		stylesheet: '樣式表',
		script: '腳本',
		tab: '選項卡',
		tabname: '選項卡標題',
		tabs: '選項卡',
		contentTypeEnabled: '主控文件類型啟動',
		contentTypeUses: '該文檔類型使用',
		noPropertiesDefinedOnTab: '沒有欄位設置在該標籤頁',
		addIcon: '增加圖示',
	},
	sort: {
		sortOrder: '排列順序',
		sortCreationDate: '增添時間',
		sortDone: '排序完成。',
		sortHelp: '上下拖拽項目或按一下列頭進行排序',
		sortPleaseWait: ' 請稍後。項目正在排序，這需要一點時間。',
	},
	speechBubbles: {
		validationFailedHeader: '驗證',
		validationFailedMessage: '驗證錯誤一定要修正才能儲存項目',
		operationFailedHeader: '失敗',
		invalidUserPermissionsText: '使用者權限不足，無法完成操作',
		operationCancelledHeader: '已取消',
		operationCancelledText: '操作被協力廠商外掛程式取消',
		contentPublishedFailedByEvent: '發佈被協力廠商外掛程式取消',
		contentTypeDublicatePropertyType: '屬性類型已存在',
		contentTypePropertyTypeCreated: '屬性類型已創建',
		contentTypePropertyTypeCreatedText: '名稱：%0% <br />資料類別：%1%',
		contentTypePropertyTypeDeleted: '屬性類型已刪除',
		contentTypeSavedHeader: '內容類別型已保存',
		contentTypeTabCreated: '選項卡已創建',
		contentTypeTabDeleted: '選項卡已刪除',
		contentTypeTabDeletedText: 'id為%0%的選項卡已刪除',
		cssErrorHeader: '樣式表未保存',
		cssSavedHeader: '樣式表已保存',
		cssSavedText: '樣式表保存，無錯誤。',
		dataTypeSaved: '資料類型已保存',
		dictionaryItemSaved: '字典項已保存',
		editContentPublishedFailedByParent: '因為上級頁面未發佈導致發佈失敗！',
		editContentPublishedHeader: '內容已發佈',
		editContentPublishedText: '公眾可見',
		editContentSavedHeader: '內容已保存',
		editContentSavedText: '請發佈以使更改生效',
		editContentSendToPublish: '提交審核',
		editContentSendToPublishText: '更改已提交審核',
		editMediaSaved: '媒體已保存',
		editMediaSavedText: '媒體已保存',
		editMemberSaved: '會員已保存',
		editStylesheetPropertySaved: '樣式表屬性已保存',
		editStylesheetSaved: '樣式表已保存',
		editTemplateSaved: '範本已保存',
		editUserError: '保存使用者出錯（請查看日誌）',
		editUserSaved: '用戶已保存',
		editUserTypeSaved: '用戶類型已保存',
		fileErrorHeader: '檔未保存',
		fileErrorText: '檔無法保存，請檢查許可權。',
		fileSavedHeader: '檔保存',
		fileSavedText: '檔保存，無錯誤。',
		languageSaved: '語言已保存',
		mediaTypeSavedHeader: '媒體類別已儲存',
		memberTypeSavedHeader: '會員類別已儲存',
		templateErrorHeader: '範本未保存',
		templateErrorText: '範本別名相同',
		templateSavedHeader: '範本已保存',
		templateSavedText: '範本保存，無錯誤。',
		contentUnpublished: '內容已取消發佈',
		partialViewSavedHeader: '片段視圖已保存',
		partialViewSavedText: '片段視圖保存，無錯誤。',
		partialViewErrorHeader: '片段視圖未保存',
		partialViewErrorText: '片段視圖因為錯誤未能保存',
	},
	stylesheet: {
		aliasHelp: '使用CSS語法，如：h1、.redHeader、.blueTex。',
		editstylesheet: '編輯樣式表',
		editstylesheetproperty: '編輯樣式屬性',
		nameHelp: '編輯器中的樣式屬性名 ',
		preview: '預覽',
		styles: '樣式',
	},
	template: {
		edittemplate: '編輯範本',
		insertContentArea: '插入內容區',
		insertContentAreaPlaceHolder: '插入內容預留位置',
		insertDictionaryItem: '插入字典項',
		insertMacro: '插入巨集',
		insertPageField: '插入頁欄位',
		mastertemplate: '母版',
		quickGuide: '範本標籤快速指南',
		template: '範本',
	},
	grid: {
		media: 'Image',
		macro: 'Macro',
		insertControl: '選擇內容類別',
		chooseLayout: '選擇排列方式',
		addRows: '新增一行',
		addElement: '新增內容',
		dropElement: '放棄內容',
		settingsApplied: '設定已儲存',
		contentNotAllowed: '此處不允許有內容',
		contentAllowed: '此處允許有內容',
		clickToEmbed: '點選來內嵌',
		clickToInsertImage: '點選來插入圖片',
		placeholderWriteHere: '在此填寫...',
		gridLayouts: '網格排列方式',
		gridLayoutsDetail: '排列是指網格編輯器的整體工作區域，通常您只需要一種或兩種排列方式',
		addGridLayout: '增加網格排列方式',
		addGridLayoutDetail: '藉由設定列寬以及增加新的區域來調整排列方式',
		rowConfigurations: '行設定',
		rowConfigurationsDetail: '行是預先水平排列的格子',
		addRowConfiguration: '增加行設定',
		addRowConfigurationDetail: '藉由設定小格寬度和增添小格來調整此行',
		columns: '列',
		columnsDetails: '網格排列方式的列總數',
		settings: '設定',
		settingsDetails: '調整設定編輯器可以改變的項目',
		styles: '樣式',
		stylesDetails: '調整樣式編輯器可以改變的項目',
		allowAllEditors: '允許所有編輯器',
		allowAllRowConfigurations: '允許所有行設定',
		setAsDefault: '定為預設',
		chooseExtra: '選擇額外',
		chooseDefault: '選擇預設',
		areAdded: '已增加',
	},
	contentTypeEditor: {
		compositions: '組合',
		noGroups: '您沒有增加任何選項卡',
		inheritedFrom: '繼承的表格',
		addProperty: '增加屬性',
		requiredLabel: '必要標籤',
		enableListViewHeading: '允許清單檢視',
		enableListViewDescription: '允許內容項目顯示成可以排列及搜尋的清單，子項目不會被顯示',
		allowedTemplatesHeading: '允許的範本',
		allowedTemplatesDescription: '選擇哪些範本編輯器可以使用於此類別的內容',
		allowAsRootHeading: '允許為根項目',
		allowAsRootDescription: '允許編輯器新增此類別的內容為根項目',
		childNodesHeading: '允許子節點種類',
		childNodesDescription: '允許某些特定種類能夠成為此種類內容的子項目',
		chooseChildNode: '選擇子節點',
		compositionsDescription:
			'從已存在的文檔類別中繼承選項卡以及屬性。新選項卡將被新增至目前文檔種類或合併至已存在同名的選項卡中。',
		compositionInUse: '此內容種類已經用於集合中，因此不能重複添加本身。',
		noAvailableCompositions: '沒有可用於集合的內容種類。',
		availableEditors: '可用的編輯器',
		reuse: '重複使用',
		editorSettings: '編輯器設定',
		configuration: '設定',
		yesDelete: '是，刪除',
		movedUnderneath: '已移至下層',
		copiedUnderneath: '已複製至下層',
		folderToMove: '選擇要移動的資料夾',
		folderToCopy: '選擇要複製的資料夾',
		structureBelow: '至下方樹狀結構',
		allDocumentTypes: '所有文檔種類',
		allDocuments: '所有文檔',
		allMediaItems: '所有媒體項目',
		usingThisDocument: '使用此文檔種類的將被永久刪除，請確認您也想要將它們刪除。',
		usingThisMedia: '使用此媒體種類的將被永久刪除，請確認您也想要將它們刪除。',
		usingThisMember: '使用此會員種類的將被永久刪除，請確認您也想要將它們刪除。',
		andAllDocuments: '以及所有使用此種類的文件項目',
		andAllMediaItems: '以及所有使用此種類的媒體項目',
		andAllMembers: '以及所有使用此種類的會員項目',
		memberCanEdit: '會員可以編輯',
		showOnMemberProfile: '顯示於會員資料',
	},
	templateEditor: {
		alternativeField: '替代欄位',
		alternativeText: '替代文本',
		casing: '大小寫',
		encoding: '編碼',
		chooseField: '選取欄位',
		convertLineBreaks: '轉換分行符號',
		convertLineBreaksHelp: '將換行符號取代成為HTML標籤 &lt;br&gt;',
		customFields: '自訂欄位',
		dateOnly: '是，僅日期',
		formatAsDate: '格式化時間',
		htmlEncode: 'HTML編碼',
		htmlEncodeHelp: '將替換HTML中的特殊字元',
		insertedAfter: '將在欄位值後插入',
		insertedBefore: '將在欄位值前插入',
		lowercase: '小寫',
		none: '無',
		postContent: '欄位後插入',
		preContent: '欄位前插入',
		recursive: '遞迴',
		standardFields: '標準欄位',
		uppercase: '大寫',
		urlEncode: 'URL編碼',
		urlEncodeHelp: '將格式化URL中的特殊字元',
		usedIfAllEmpty: '當上面欄位值為空時使用',
		usedIfEmpty: '該欄位僅在主欄位為空時使用',
		withTime: '是，含時間，分隔符號為： ',
	},
	translation: {
		details: '翻譯詳情',
		DownloadXmlDTD: '下載 XML DTD',
		fields: '欄位',
		includeSubpages: '包含子頁',
		mailBody:
			'\n      哈嘍 %0%\n\n      這是一封自動產生的郵件通知您文檔 %1%\n      已經被 %2 要求翻譯成 %5%\n\n      請移至此網址來編輯： http://%3%/translation/details.aspx?id=%4%\n\n      或登入系統以獲取您的翻譯任務簡報。\n\n      http://%3%\n\n      祝您有美好的一天\n\n      Umbraco機器人 謹上\n    ',
		noTranslators: '沒有翻譯員，請創建翻譯員角色的用戶。',
		pageHasBeenSendToTranslation: "頁面'%0%'已經發送給翻譯",
		sendToTranslate: "發送頁面'%0%'以便翻譯",
		totalWords: '總字數',
		translateTo: '翻譯到',
		translationDone: '翻譯完成。',
		translationDoneHelp: '您可以流覽剛翻譯的頁面，如果原始頁存在，您將得到兩者的比較。',
		translationFailed: '翻譯失敗，XML可能損壞了。',
		translationOptions: '翻譯選項',
		translator: '翻譯員',
		uploadTranslationXml: '上傳翻譯的xml',
	},
	treeHeaders: {
		cacheBrowser: '緩存流覽',
		contentRecycleBin: '回收站',
		createdPackages: '創建擴展包',
		dataTypes: '資料類型',
		dictionary: '字典',
		installedPackages: '已安裝的擴展包',
		installSkin: '安裝皮膚',
		installStarterKit: '安裝新手套件',
		languages: '語言',
		localPackage: '安裝本地擴展包',
		macros: '巨集',
		mediaTypes: '媒體類型',
		member: '會員',
		memberGroups: '會員組',
		memberRoles: '角色',
		memberTypes: '會員類型',
		documentTypes: '文檔類型',
		relationTypes: '相關類型',
		packager: '擴展包',
		packages: '擴展包',
		repositories: '從線上程式庫安裝',
		runway: '安裝Runway',
		runwayModules: 'Runway模組',
		scripting: 'Scripting文件',
		scripts: '腳本',
		stylesheets: '樣式表',
		templates: '範本',
	},
	update: {
		updateAvailable: '有可用更新',
		updateDownloadText: '%0%已就緒，點擊這裡下載',
		updateNoServer: '無到伺服器的連接',
		updateNoServerError: '檢查更新失敗',
	},
	user: {
		administrators: '管理員',
		categoryField: '分類欄位',
		changePassword: '更改密碼',
		newPassword: '更改密碼',
		confirmNewPassword: '確認新密碼',
		changePasswordDescription: '要改變密碼，請在框中輸入新密碼，然後按一下“更改密碼”。',
		contentChannel: '內容頻道',
		descriptionField: '描述欄位',
		disabled: '禁用用戶',
		documentType: '文檔類型',
		editors: '編輯',
		excerptField: '排除欄位',
		language: '語言',
		loginname: '登錄',
		mediastartnode: '默認打開媒體項',
		modules: '區域',
		noConsole: '禁用後臺管理介面',
		oldPassword: '舊的密碼',
		password: '密碼',
		resetPassword: '重設密碼',
		passwordChanged: '您的密碼已更改！',
		passwordConfirm: '重輸密碼',
		passwordEnterNew: '輸入新密碼',
		passwordIsBlank: '新密碼不能為空！',
		passwordCurrent: '當前密碼',
		passwordInvalid: '密碼錯誤',
		passwordIsDifferent: '新密碼和重輸入的密碼不一致，請重試！',
		passwordMismatch: '重輸的密碼和原密碼不一致！',
		permissionReplaceChildren: '替換子項許可權設置',
		permissionSelectedPages: '您正在修改存取權限的頁面：',
		permissionSelectPages: '選擇要修改許可權的頁',
		searchAllChildren: '搜索子物件',
		startnode: '預設打開內容項',
		username: '用戶名',
		userPermissions: '用戶許可權',
		writer: '撰稿人',
		change: '改變',
		yourProfile: '您的個人檔案',
		yourHistory: '您的歷程記錄',
		sessionExpires: '連線到期於',
	},
	validation: {
		validation: '驗證',
		validateAsEmail: '以電子郵件驗證',
		validateAsNumber: '以數字驗證',
		validateAsUrl: '以網址驗證',
		enterCustomValidation: '...或輸入自訂驗證',
		fieldIsMandatory: '必要欄位',
	},
	healthcheck: {
		checkSuccessMessage: '數值已設為推薦值：%0%',
		checkErrorMessageDifferentExpectedValue: '在設定檔 %3% 中XPath %2% 的預期值設為 %1% ，但卻是 %0%。',
		checkErrorMessageUnexpectedValue: '在設定檔 %3% 中XPath %2% 的值為非預期值 %0%。',
		macroErrorModeCheckSuccessMessage: '巨集錯誤設為 %0%',
		macroErrorModeCheckErrorMessage:
			'巨集錯誤設為 %0%，如此一來，當巨集有任何錯誤時會阻止某些或全部頁面正常載入。改正會將此設定 %1%。',
		httpsCheckInvalidCertificate: '憑證驗證錯誤：%0%',
		healthCheckInvalidUrl: "網址探查錯誤：%0% - '%1%'",
		httpsCheckIsCurrentSchemeHttps: '您目前使用HTTPS瀏覽本站：%0%',
		compilationDebugCheckSuccessMessage: '偵錯編輯模式關閉。',
		compilationDebugCheckErrorMessage: '偵錯編輯模式目前已開啟。上線前建議將其關閉。',
		clickJackingCheckHeaderFound:
			'標頭或meta-tag的 <strong>X-Frame-Options</strong> 設定能控制網站是否可以被其他人IFRAMEd已找到。',
		clickJackingCheckHeaderNotFound:
			'標頭或meta-tag的 <strong>X-Frame-Options</strong> 設定能控制網站是否可以被其他人IFRAMEd沒有找到。',
		excessiveHeadersFound: '在標頭中有找到揭露網站技術的資訊：<strong>%0%</strong>。',
		excessiveHeadersNotFound: '在標頭中沒有找到揭露網站技術的資訊。',
		smtpMailSettingsConnectionSuccess: 'SMTP設定正確，而且服務正常運作。',
		notificationEmailsCheckSuccessMessage: '提醒郵件已經設為 <strong>%0%</strong>。',
		notificationEmailsCheckErrorMessage: '提醒郵件仍為預設值<strong>%0%</strong>。',
	},
	redirectUrls: {
		disableUrlTracker: '停止網址追蹤器',
		enableUrlTracker: '啟動網址追蹤器',
		originalUrl: '原本網址',
		redirectedTo: '轉址成',
		noRedirects: '沒有任何轉址',
		noRedirectsDescription: '當發佈後的頁面改名或移動時，會自動轉址至新網頁。',
		redirectRemoved: '轉址已移除。',
		redirectRemoveError: '移除轉址錯誤。\n',
		confirmDisable: '您確定要停止轉址追蹤器？',
		disabledConfirm: '轉址追蹤器已停止。',
		disableError: '停止轉址追蹤器錯誤，更多資訊請參閱您的紀錄檔。',
		enabledConfirm: '轉址追蹤器已開啟。',
		enableError: '啟動轉址追蹤器錯誤，更多資訊請參閱您的紀錄檔。',
	},
	logViewer: {
		selectAllLogLevelFilters: '全選',
		deselectAllLogLevelFilters: '取消全選',
	},
} as UmbLocalizationDictionary;
