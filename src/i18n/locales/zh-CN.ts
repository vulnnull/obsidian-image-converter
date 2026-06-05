import type { DeepPartial } from "../index";
import type { TranslationStrings } from "./en";

export const zhCN: DeepPartial<TranslationStrings> = {
	// ----------------------------------------------------------------
	// 命令 (from main.ts addCommand)
	// ----------------------------------------------------------------
	commands: {
		processAllVaultImages: "处理仓库中所有图片",
		processAllImagesCurrentNote: "处理当前笔记中的所有图片",
		openImageConverterSettings: "打开图片转换器设置",
		reloadPlugin: "重新加载插件",
	},

	// ----------------------------------------------------------------
	// 提示消息 — main.ts
	// ----------------------------------------------------------------
	notices: {
		// -- 初始化 --
		failedToInitialize: "图片转换器：初始化失败，请查看控制台了解详情。",

		// -- 无活动文件 --
		noActiveFileDetected: "未检测到活动文件",

		// -- 设置 --
		unableToOpenSettings: "无法打开设置，请检查设置插件是否已启用。",

		// -- 重新加载插件 --
		ReloadingImageConverter: "正在重新加载图片转换器...",
		imageConverterReloaded: "图片转换器已重新加载！",
		failedToReloadPluginsApiUnavailable: "重新加载失败：插件 API 不可用",
		failedToReloadPluginSeeConsole: "重新加载插件失败，请查看控制台",

		// -- 确认对话框（拖放/粘贴） --
		showPresetSelectionModal: "显示预设选择窗口？",
		doYouWantToSelectPresetsForThisImage: "是否要为此图片选择预设？",
		yes: "是",

		// -- 目标路径/文件名错误 --
		failedToDetermineDestinationOrFilename: '无法确定"{fileName}"的目标路径或文件名，请查看控制台了解详情。',
		failedToCreateFolder: '无法创建文件夹"{destinationPath}"，请查看控制台了解详情。',
		errorIncrementingFilename: '为"{fileName}"递增文件名时出错，请查看控制台了解详情。',

		// -- 跳过模式 --
		skippedRenamingConversionDueToSkipPattern: '由于匹配跳过规则，已跳过图片"{fileName}"的重命名/转换。',
		skippedConversionDueToSkipPattern: '由于转换预设中的跳过规则匹配，已跳过图片"{fileName}"的转换。',

		// -- 复用/链接插入 --
		failedToInsertLinkForReusedFile: '无法为"{fileName}"插入链接，请查看控制台了解详情。',
		failedToInsertLinkForSkippedConversion: '无法为"{fileName}"插入链接，请查看控制台了解详情。',
		failedToInsertLinkForSkippedProcessing: '无法为"{fileName}"插入链接，请查看控制台了解详情。',
		failedToInsertLinkAfterProcessing: '无法为"{fileName}"插入链接，请查看控制台了解详情。',
		failedToInsertImageLink: "无法插入图片链接，请查看控制台了解详情。",

		// -- 恢复原图 --
		usingOriginalImageLessThanMinSavings: '使用"{fileName}"的原始图片，因为大小减少量不足 {minSavingsKB} KB。',

		// -- 处理错误 --
		failedToProcessImageFileAlreadyExists: '图片处理失败：文件"{newFilename}"已存在。',
		failedToProcessImageInvalidInputFileType: '图片处理失败："{fileName}"的输入文件类型无效。',
		failedToProcessImageWithMessage: '图片处理失败"{fileName}"：{errorMessage}，请查看控制台了解详情。',
		failedToProcessImageCheckConsole: '图片处理失败"{fileName}"，请查看控制台了解详情。',

		// -- 意外错误 --
		unexpectedErrorCheckConsole: "发生意外错误，请查看控制台了解详情。",
	},

	// ----------------------------------------------------------------
	// 右键菜单标题 (from ContextMenu.ts .setTitle)
	// ----------------------------------------------------------------
	contextMenu: {
		openInNewWindow: "在新窗口中打开",
		cut: "剪切",
		copyImage: "复制图片",
		copyAsBase64EncodedImage: "复制为 Base64 编码图片",
		convertCompress: "转换/压缩...",
		cropRotateFlip: "裁剪/旋转/翻转",
		annotateImage: "标注图片",
		showInNavigation: "在导航中显示",
		showInSystemExplorer: "在系统资源管理器中显示",
		deleteImageAndLink: "删除图片和链接",
		imageTools: "图片工具",
	},

	// ----------------------------------------------------------------
	// 右键菜单输入字段标签和占位符 (from ContextMenu.ts)
	// ----------------------------------------------------------------
	contextMenuLabels: {
		// -- 标签 --
		name: "名称：",
		folder: "文件夹：",
		caption: "说明：",
		size: "尺寸：",
		widthPlaceholder: "宽",
		heightPlaceholder: "高",

		// -- 占位符 --
		enterNewImageName: "输入新的图片名称",
		enterNewPathForImage: "输入新的图片路径",
		loadingCaption: "正在加载说明...",
		enterCustomCaption: "输入自定义图片说明",
	},

	// ----------------------------------------------------------------
	// 文件菜单项 (from main.ts file-menu handler)
	// ----------------------------------------------------------------
	fileMenu: {
		processImage: "处理图片",
		processAllImagesInFolder: "处理文件夹中所有图片",
		processAllImagesInNote: "处理笔记中所有图片",
		processAllImagesInCanvas: "处理画布中所有图片",
	},

	// ----------------------------------------------------------------
	// 按钮
	// ----------------------------------------------------------------
	buttons: {
		update: "更新",
		cut: "剪切",
		delete: "删除",
	},

	// ----------------------------------------------------------------
	// 确认对话框 (from ContextMenu.ts)
	// ----------------------------------------------------------------
	confirmDialogs: {
		// -- 说明和尺寸更新 --
		confirmUpdates: "确认更新",
		foundMatchingImageLinksUpdateAll: "找到 {matchCount} 个匹配的图片链接。是否全部更新？",
		failedToUpdateSeeConsole: "更新失败，请查看控制台了解详情。",

		// -- 剪切确认 --
		confirmCut: "确认剪切",
		foundMatchingImageLinksCutAll: "在当前笔记中找到 {matchCount} 个匹配的图片链接。是否全部剪切？",
		failedToCutSeeConsole: "剪切失败，请查看控制台了解详情。",

		// -- 删除确认 --
		confirmDelete: "确认删除",
		foundUniqueMatchingImageLinksDeleteAll: "在当前笔记中找到 {matchCount} 个不重复的匹配图片链接。是否全部删除？",
		failedToDeleteSeeConsole: "删除失败，请查看控制台了解详情。",
	},

	// ----------------------------------------------------------------
	// 大小比较格式 (from main.ts showSizeComparisonNotification)
	// ----------------------------------------------------------------
	sizeComparison: {
		format: "{originalSizeFormatted} -> {newSizeFormatted} ({changeSymbol}{percentChange}%)",
		bytes: "{bytes} 字节",
		kb: "{value} KB",
		mb: "{value} MB",
	},

	// ----------------------------------------------------------------
	// 右键菜单提示消息 (from ContextMenu.ts)
	// ----------------------------------------------------------------
	contextMenuNotices: {
		// -- 尺寸和说明 --
		dimensionsMustBePositiveNumbers: "尺寸必须是正数",
		failedToFindImageLinkInCurrentNote: "在当前笔记中未找到图片链接。",
		imageDimensionsUpdatedSuccessfully: "图片尺寸已成功更新。",
		imageCaptionAndDimensionsUpdatedSuccessfully: "图片说明和尺寸已成功更新。",

		// -- 重命名和移动 --
		pleaseEnterNewFileName: "请输入新的文件名。",
		pleaseEnterValidFileName: "请输入有效的文件名",
		pleaseEnterNewPath: "请输入新的路径。",
		imageNameUpdatedSuccessfully: "图片名称已成功更新",
		imagePathUpdatedCaseSensitive: "图片路径已更新（大小写变更）。",
		imagePathUpdateFailedCaseSensitive: "图片路径更新失败（大小写变更）。",
		imagePathUpdatedSuccessfully: "图片路径已成功更新",
		failedToUpdateImagePath: "无法更新图片路径",

		// -- 在新窗口中打开 --
		failedToOpenInNewWindow: "无法在新窗口中打开",

		// -- 剪切 --
		noActiveMarkdownViewFound: "未找到活动的 Markdown 视图",
		failedToFindBase64ImageLink: "未找到 Base64 图片链接",
		imageLinksCutFromNoteAndCopiedToClipboard: "图片链接已从笔记中剪切并复制到剪贴板",
		failedToCutImageCheckConsole: "剪切图片失败，请查看控制台了解详情。",

		// -- 复制图片 --
		failedToGetCanvasContext: "无法获取画布上下文",
		imageCopiedToClipboard: "图片已复制到剪贴板",
		failedToCopyImageToClipboard: "无法将图片复制到剪贴板",

		// -- 复制 Base64 --
		imageCopiedToClipboardAsBase64: "图片已以 Base64 格式复制到剪贴板",
		failedToCopyImageAsBase64: "无法以 Base64 格式复制图片",

		// -- 处理/转换 --
		noActiveMarkdownView: "没有活动的 Markdown 视图",
		noCurrentFileFound: "未找到当前文件",
		noSourceAttributeFoundOnImage: "图片上未找到源属性",
		unableToExtractFilenameFromImageSource: "无法从图片源中提取文件名",
		unableToFindImage: "无法找到图片：{filename}",
		notAValidImageFile: "不是有效的图片文件",
		errorProcessingImage: "图片处理出错",

		// -- 裁剪 --
		noSourceAttributeFound: "未找到源属性",
		unableToLocateImageFile: "无法定位图片文件",

		// -- 标注 --
		errorProcessingImagePath: "处理图片路径出错",

		// -- 在导航中显示 --
		failedToShowInNavigation: "无法在导航中显示",

		// -- 在系统资源管理器中显示 --
		failedToShowInSystemExplorer: "无法在系统资源管理器中显示",

		// -- 删除 --
		imageLinksRemovedFromNote: "图片链接已从笔记中移除",
		imageFileMovedToTrash: "图片文件已移至回收站",
		failedToFindUniqueImageLinksInCurrentNote: "在当前笔记中未找到不重复的图片链接。",
		noUniqueImageLinksFoundToDelete: "未找到要删除的不重复图片链接。",
		failedToDeleteImageCheckConsole: "删除图片失败，请查看控制台了解详情。",
	},

	// ----------------------------------------------------------------
	// 其他
	// ----------------------------------------------------------------
	misc: {
		line: "第",
	},

	// ----------------------------------------------------------------
	// 图片对齐上下文菜单 (from ImageAlignment.ts)
	// ----------------------------------------------------------------
	imageAlignment: {
		alignImage: "对齐图片",
		left: "左对齐",
		center: "居中",
		right: "右对齐",
		wrapText: "文字环绕",
	},

	// ----------------------------------------------------------------
	// 裁剪工具 (from Crop.ts)
	// ----------------------------------------------------------------
	crop: {
		errorLoadingImage: "加载图片进行裁剪时出错",
		imageSavedSuccessfully: "图片保存成功",
		errorSavingImage: "保存图片时出错：{message}",
		header: "裁剪图片",
		save: "保存",
		cancel: "取消",
		reset: "重置",
		free: "自由",
		rotation: "旋转：",
		zoom: "缩放：",
		rotate90Clockwise: "顺时针旋转 90°",
		rotate90CounterClockwise: "逆时针旋转 90°",
		flipHorizontally: "水平翻转",
		flipVertically: "垂直翻转",
	},

	// ----------------------------------------------------------------
	// 图片标注 (from ImageAnnotation/)
	// ----------------------------------------------------------------
	annotation: {
		errorLoadingImage: "加载图片时出错",
		presetSaved: "预设 {index} 已保存",
		failedToExportImage: "导出图片失败",
		imageSavedSuccessfully: "图片保存成功",
		errorSavingImage: "保存图片时出错",
	},

	// ----------------------------------------------------------------
	// 批量图片处理 (from BatchImageProcessor.ts)
	// ----------------------------------------------------------------
	batchProcessing: {
		noImagesFoundInNote: "笔记中未找到图片。",
		noProcessingNeededAllSkippedOrOriginal: "无需处理：所有图片要么在跳过列表中，要么保持原始格式且无压缩或缩放。",
		noProcessingNeededAlreadyFormat: "无需处理：所有图片要么在跳过列表中，要么已是 {format} 格式且无压缩或缩放。",
		noProcessingNeededOriginalFormat: "无需处理：选择了原始格式且无压缩或缩放。",
		noProcessingNeededAlreadyInFormat: "无需处理：所有图片已是 {format} 格式。",
		noImagesFoundNeedProcessing: "未找到需要处理的图片。",
		failedToUpdateLinks: '无法更新笔记中"{fileName}"的链接，请查看控制台了解详情。',
		errorProcessingImage: '处理图片"{fileName}"时出错：{errorMessage}',
		errorProcessingImages: "处理图片时出错：{errorMessage}",
		errorInvalidFolderPath: "错误：无效的文件夹路径。",
		noImagesFoundInFolder: "文件夹中未找到图片。",
		noImagesFoundInVault: "仓库中未找到图片。",
		noProcessingNeededAllVaultSkippedOrOriginal: "无需处理：所有仓库图片要么在跳过列表中，要么保持原始格式且无压缩或缩放。",
		noProcessingNeededAllVaultAlreadyFormat: "无需处理：所有仓库图片要么在跳过列表中，要么已是 {format} 格式且无压缩或缩放。",
		noProcessingNeededAllVaultAlreadyInFormat: "无需处理：所有仓库图片要么是 {format} 格式，要么在跳过列表中。",
		failedToUpdateLinksForImage: '无法更新"{fileName}"的链接，请查看控制台了解详情。',
		// 状态栏消息
		processingImageStatus: "正在处理第 {imageCount} 张图片，共 {totalImages} 张，已用时：{elapsedTime} 秒",
		finishedProcessingStatus: "已处理完 {imageCount} 张图片，总用时：{totalTime} 秒",
		noProcessingNeededAllVaultAlreadyInFormatSkipList: "无需处理：所有仓库图片要么是 {format} 格式，要么在跳过列表中。",
	},

	// ----------------------------------------------------------------
	// 设置UI (from ImageConverterSettings.ts)
	// ----------------------------------------------------------------
	settings: {
		rightClickMenu: "右键菜单",
		rightClickMenuInfo: "启用以显示右键上下文菜单。",
		cursorPositionAfterDropPaste: "拖放/粘贴后光标位置",
		cursorPositionAfterDropPasteInfo: "拖放或粘贴图片后光标放置的位置",
		neverProcessFilenames: "永不处理这些文件名",
		neverProcessFilenamesInfo: "逗号分隔的文件名或模式列表，插件将永不处理这些文件。支持 glob (*) 和正则表达式（用 `/`、`r/` 或 `regex:` 括起来）。例如：`old.png, /^_/, r/temp-.*\\.jpg$/`。也可以直接跳过所有猫的图片如：/cat/ 或所有 gif 图片 *.gif",
		showSizeNotification: "显示图片大小变化通知",
		showSizeNotificationInfo: "在处理图片后显示节省了多少空间的通知。",
		showWindow: "显示窗口",
		showWindowDesc: "选择在每次图片拖放/粘贴时是否显示处理选项",
		dropPastePresets: "拖放/粘贴预设",
		dropPastePresetsDesc: "快速应用一组预设组合",
		noneOption: "无",
		// 图片对齐设置
		imageAlignment: "图片对齐",
		defaultAlignmentForNewImages: "新图片的默认对齐方式",
		defaultAlignmentForNewImagesDesc: "插入新图片时自动应用此对齐方式。设置为 'none' 可禁用。",
		imageAlignmentCacheLocation: "图片对齐缓存位置",
		imageAlignmentCacheLocationDesc: "选择图片对齐缓存文件的存储位置。注意：需要重新加载应用。",
		imageAlignmentCacheLocationInfo: "如果您使用 Obsidian Sync，强烈建议在所有设备上使用相同的位置以确保行为一致。默认：Obsidian 的 config 文件夹（可同步）。",
		imageAlignmentCacheCleanupInterval: "图片对齐缓存清理间隔",
		imageAlignmentCacheCleanupIntervalDesc: "清理图片对齐缓存中冗余条目的间隔（分钟）。默认：1 小时（0 表示禁用）",
		withinConfigFolderSyncable: "在 config 文件夹内（可同步）",
		withinPluginFolderNotSyncable: "在插件文件夹内（不可同步）",
		// 拖拽和滚动缩放设置
		dragScrollResize: "拖拽和滚动缩放",
		enableDragResize: "启用拖拽缩放",
		enableDragResizeDesc: "允许通过拖拽图片边缘来调整图片大小。",
		enableDragResizeInfo: "这会在图片下方创建一个新的 <DIV> 来显示缩放手柄。但这可能会与某些主题不兼容，并导致图片跳动。",
		lockAspectRatioWhenDragging: "拖拽时锁定宽高比",
		lockAspectRatioWhenDraggingDesc: "防止拖拽缩放时意外扭曲图片宽高比",
		enableScrollWheelResize: "启用滚轮缩放",
		enableScrollWheelResizeDesc: "允许使用滚轮调整图片大小",
		scrollWheelModifierKey: "滚轮修饰键",
		scrollWheelModifierKeyDesc: "使用滚轮缩放时必须同时按住的键",
		scrollWheelResizeSensitivity: "滚轮缩放灵敏度",
		scrollWheelResizeSensitivityDesc: "调整滚轮缩放的灵敏度 (0.01-1.0)",
		disableObsidianImageSelectionOnClick: "禁用 Obsidian 点击选中图片",
		disableObsidianImageSelectionOnClickInfo: "在实时预览中点击内部图片时保持编辑器焦点，而不是显示 Obsidian 的默认轮廓/缩放角。光标位置遵循拖放/粘贴光标位置设置。",
		disableObsidianImageSelectionOnClickDesc: "在实时预览中点击内部图片时保持编辑器焦点，而不是显示 Obsidian 的默认轮廓/缩放角。光标位置遵循拖放/粘贴光标位置设置。",
		cursorPositionDuringResize: "缩放时光标位置",
		cursorPositionDuringResizeInfo: "调整图片大小时光标放置的位置。注意：'不移动光标' - 将尝试保持光标在原位，但如果您拖拽缩放完成时光标仍在图片上方，文本会被选中。",
		allowResizingInReadingMode: "允许在阅读模式下缩放",
		allowResizingInReadingModeDesc: "阅读模式下的无损缩放仅是视觉效果，如果觉得太分散注意力可以禁用。",
		// 字幕设置
		captions: "字幕",
		textAlignmentWithinCaption: "字幕文本对齐",
		textTransform: "文本转换",
		textTransformDesc: "设置文本转换方式",
		fontSize: "字体大小",
		fontSizeDesc: "设置图片字幕的字体大小（例如：12px, 1.2em）。",
		weight: "字重",
		weightDesc: "设置字体粗细（例如：normal, bold, 600）",
		color: "颜色",
		colorDesc: "选择图片字幕的颜色，例如：red, grey, white, black, hsl(50, 50%, 50%), rgb(50%, 75%, 100%)",
		fontStyle: "字体样式",
		fontStyleDesc: "设置字体样式（例如：italic, normal）。",
		backgroundColor: "背景颜色",
		backgroundColorDesc: "选择图片字幕的背景颜色（例如：transparent, #f5f5f5, rgba(255,255,255,0.8)）",
		border: "边框",
		borderDesc: "设置边框样式（例如：1px solid gray）",
		borderCornerRadius: "边框圆角",
		borderCornerRadiusDesc: "设置字幕边框圆角（例如，略微圆角：4px）",
		spaceAtTheTop: "顶部间距",
		spaceAtTheTopDesc: "设置图片与字幕之间的间距（例如：4px, 8px）",
		padding: "内边距",
		paddingDesc: "设置字幕内边距（例如：4px 8px）",
		skipCaptionExtensions: "跳过字幕的扩展名",
		skipCaptionExtensionsDesc: "逗号分隔的图片扩展名列表，排除在字幕之外（例如：PNG, JPG）。",
		// 通知消息
		contextMenuDisabled: "右键菜单已禁用。请重新加载 Obsidian 以查看更改。",
		contextMenuEnabled: "右键菜单已启用。请重新加载 Obsidian 以查看更改。",
		imageAlignmentDisabled: "图片对齐已禁用。请重新加载 Obsidian 以查看更改。",
		imageAlignmentEnabled: "图片对齐已启用。请重新加载 Obsidian 以查看更改。",
		imageResizingDisabled: "图片缩放已禁用。请重新加载 Obsidian 以查看更改。",
		imageResizingEnabled: "图片缩放已启用。请重新加载 Obsidian 以查看更改。",
		imageCaptionsDisabled: "图片字幕已禁用。请重新加载 Obsidian 以查看更改。",
		imageCaptionsEnabled: "图片字幕已启用。请重新加载 Obsidian 以查看更改。",
		// 预设表单
		presetName: "预设名称",
		presetNameCannotBeEmpty: "预设名称不能为空。",
		presetWithNameAlreadyExists: "已存在同名预设。",
		pleaseEnterPresetName: "请输入预设名称。",
		saveCurrentSelectionAsNewGlobalPreset: "将当前选择保存为新全局预设",
		deleteSelectedGlobalPreset: "删除选中的全局预设",
		confirmDeleteGlobalPreset: '确定要删除全局预设"{presetName}"吗？',
		// 选项卡标签
		tabFolder: "文件夹",
		tabFilename: "文件名",
		tabConversion: "转换",
		tabLinkFormat: "链接格式",
		tabResize: "缩放",
		// FFmpeg
		ffmpegNotFound: "未找到 FFmpeg。请尝试通过以下方式安装：Homebrew (macOS)、Chocolatey (Windows) 或 apt/snap (Linux)。然后手动设置路径。",
		ffmpegPathDetectedAndSaved: "FFmpeg 路径已检测并保存。",
		ffmpegAutoDetectionFailed: "FFmpeg 自动检测失败：{message}",
		pleaseSpecifyFfmpegPath: "请先指定 FFmpeg 可执行文件路径",
		workingEncoder: "✓ 可用编码器：{encoder}{platformHint}",
		encoderDetectionFailedUsingCached: "编码器检测失败。使用缓存的编码器：{cachedEncoder}{platformHint}",
		noWorkingAv1EncoderFound: "未找到可用的 AV1 编码器。请安装支持 AV1 的 FFmpeg。",
		errorDetectingEncoder: "检测编码器时出错：{errorMessage}",
		// 预设组描述
		folderPresetDesc: "定义转换后图片的存储位置。从预定义位置中选择或使用变量创建自定义路径。",
		filenamePresetDesc: "控制转换后图片的命名方式。使用变量如 {notename}、{timestamp}、{uuid} 或 {MD5:filename} 创建唯一文件名。",
		conversionPresetDesc: "控制转换图片的输出格式、质量和缩放选项。这可以显著减小文件大小并保持仓库体积小巧。",
		linkFormatPresetDesc: "确定图片链接如何插入到笔记中。在 Wikilinks 和 Markdown 链接之间选择，并指定文件路径的格式化方式。这允许为图片使用不同于仓库默认的链接样式，提供更好的跨应用兼容性。",
		resizePresetDesc: "配置编辑器内图片的无损缩放选项。这允许调整显示大小而不修改原始文件。",
		// 预设组标题
		folderPresets: "文件夹预设",
		filenamePresets: "文件名预设",
		conversionPresets: "转换预设",
		linkFormatPresets: "链接格式预设",
		resizePresets: "缩放预设",
		// 预设卡片操作
		edit: "编辑",
		delete: "删除",
		confirmDeletePreset: '确定要删除预设"{presetName}"吗？',
		// 窗口行为选项
		alwaysShow: "始终显示",
		neverShow: "从不显示",
		askEachTime: "每次询问",
		// 预设表单字段
		customImagename: "自定义图片名",
		ifOutputFileAlreadyExists: "如果输出文件已存在",
		ifOutputFileAlreadyExistsDesc: "选择如何处理文件名冲突",
		location: "位置",
		subfolderName: "子文件夹名称",
		subfolderNameDesc: "输入自定义子文件夹名称或路径。",
		customPath: "自定义路径",
		customPathDesc: "输入自定义路径。",
		// 转换表单字段
		outputFormat: "输出格式",
		quality: "质量",
		colorDepth: "色深",
		executablePathForPngquant: "pngquant 可执行文件路径",
		executablePathForPngquantInfo: "提供二进制文件的完整路径。可以在仓库内或文件系统中的任何位置。",
		qualityRangeForPngquant: "pngquant 质量范围",
		qualityRangeForPngquantDesc: "pngquant 的质量设置（例如：65-80）。必须提供最小值和最大值。",
		ffmpegExecutablePath: "FFmpeg 可执行文件路径",
		ffmpegExecutablePathInfo: "提供 FFmpeg 二进制文件的完整路径。AVIF 输出需要此设置。",
		encoderDetection: "编码器检测",
		encoderDetectionDesc: "通过运行测试编码来检测和验证可用的 AV1 编码器。确保硬件编码器在您的系统上实际可用。",
		ffmpegCrf: "FFmpeg CRF",
		ffmpegCrfDesc: "AVIF 的恒定速率因子（0-63，值越低质量越高）。范围因编码器而异 - 点击「检测编码器」查看具体范围。",
		ffmpegPreset: "FFmpeg 预设",
		ffmpegPresetDesc: "编码预设（速度与压缩的权衡）。",
		// 缩放表单字段
		resizeMode: "缩放模式",
		desiredWidth: "期望宽度",
		desiredHeight: "期望高度",
		desiredLongestEdge: "期望最长边",
		desiredShortestEdge: "期望最短边",
		scaleMode: "缩放模式",
		revertToOriginalIfLarger: "如果更大则还原为原始",
		minimumCompressionSavings: "最小压缩节省量（KB）",
		// 链接格式表单字段
		linkFormat: "链接格式",
		pathFormat: "路径格式",
		// 缩放预设表单字段
		resizeDimension: "缩放尺寸",
		customValue: "自定义值",
		maxWidthValue: "最大宽度值",
		maintainAspectRatio: "保持宽高比",
		respectEditorMaxWidth: "遵守编辑器最大宽度",
		// 下拉选项
		originalCompress: "原始（压缩）",
		noneNoConversion: "无（不转换/不压缩）",
		pngquantCompression: "pngquant（仅 PNG 压缩）",
		avifViaFfmpeg: "AVIF（通过 ffmpeg）",
		reuseExistingFile: "复用仓库中已存在的文件（如有）",
		addNumberSuffix: "添加数字后缀（-1, -2 等）",
		// 杂项选项
		atFrontOfLink: "在链接前面",
		atBackOfLink: "在链接后面",
		oneLineBelowImage: "图片下方 1 行",
		dontMoveCursor: "不移动光标",
		// 默认文件夹/文件名预设名称
		defaultObsidianSetting: "默认（Obsidian 设置）",
		rootFolder: "根文件夹",
		sameFolderAsCurrentNote: "与当前笔记相同的文件夹",
		keepOriginalName: "保留原始名称",
		noteNameTimestamp: "笔记名-时间戳",
	},

	// ----------------------------------------------------------------
	// 图片处理器 (from ImageProcessor.ts)
	// ----------------------------------------------------------------
	imageProcessor: {
		failedToProcessImage: '处理图片"{filename}"失败（目标格式：{format}）：{message}',
		pngquantPathNotSet: "未设置 pngquant 可执行文件路径。请在插件设置中进行配置。",
		ffmpegPathNotSet: "未设置 FFmpeg 可执行文件路径。请在插件设置中进行配置。",
		hardwareEncoderUnavailable: "硬件编码器不可用。回退到 {softwareFallback}...",
	},

	// ----------------------------------------------------------------
	// 处理窗口 (from ProcessSingleImageModal, ProcessFolderModal, ProcessCurrentNote)
	// ----------------------------------------------------------------
	processModals: {
		noProcessingNeeded: '"{fileName}" 无需处理。',
		skippedConversionDueToSkipPattern: '由于转换预设中的跳过规则匹配，已跳过图片"{fileName}"的转换。',
		usingOriginalImageLarger: '使用"{fileName}"的原始图片，因为处理后的图片更大。',
		couldNotFindRenamedFile: "错误：在 {fullPath} 找不到重命名后的文件",
		linkUpdatedIn: '"{fileName}" 中的链接已更新',
		imageProcessedButFailedToRefresh: "图片已处理，但无法刷新视图。您可能需要重新加载笔记。",
		imageProcessed: '图片"{fileName}" 已处理',
		// ProcessFolderModal
		recursive: "递归",
		directImages: "直接图片",
		linkedImages: "链接的图片",
		convertTo: "转换为 ⓘ",
		quality: "质量 ⓘ",
		skipFormats: "跳过格式 ⓘ",
		skipImagesInTargetFormat: "跳过目标格式图片 ⓘ",
		resizeMode: "缩放模式 ⓘ",
		enlargeOrReduce: "放大或缩小 ⓘ",
		// ProcessCurrentNote
		errorInvalidFolderPath: "错误：无效的文件夹路径。",
		// PresetSelectionModal
		unableToOpenSettings: "无法打开设置。",
		// --- ProcessSingleImageModal ---
		processImageTitle: "处理图片：{fileName}",
		outputFormat: "输出格式",
		qualityLabel: "质量",
		outputFormatOriginal: "原始格式（压缩）",
		outputFormatNone: "无（不转换）",
		outputFormatPngquant: "pngquant（仅 PNG）",
		outputFormatAvif: "AVIF（通过 ffmpeg）",
		colorDepth: "颜色深度",
		executablePathForPngquant: "pngquant 可执行文件路径",
		executablePathForPngquantInfo: "提供二进制文件的完整路径。可以位于仓库内或文件系统中的任何位置。",
		pngquantQualityRange: "质量最小-最大范围",
		pngquantQualityRangeInfo: "最小和最大质量，例如 65-80。值范围 0-100。",
		ffmpegExecutablePath: "FFmpeg 可执行文件路径",
		ffmpegExecutablePathInfo: "提供 ffmpeg 二进制文件的完整路径。可以位于仓库内或文件系统中的任何位置。",
		encoderDetection: "编码器检测",
		encoderDetectionInfo: "自动检测 ffmpeg 构建中可用的 AV1 编码器。",
		detectEncoder: "检测编码器",
		ffmpegCrf: "FFmpeg CRF",
		ffmpegCrfInfo: "恒定速率因子 (0-63)。值越低 = 质量越好，文件越大。默认：23。",
		ffmpegPreset: "FFmpeg 预设",
		ffmpegPresetInfo: "编码速度/质量权衡。越慢 = 压缩越好。",
		resizeModeLabel: "缩放模式",
		desiredWidth: "期望宽度",
		desiredHeight: "期望高度",
		desiredLongestEdge: "期望最长边",
		desiredShortestEdge: "期望最短边",
		enlargeOrReduceLabel: "放大/缩小",
		process: "处理",
		cancel: "取消",
		detectEncoderButton: "检测编码器",
		validating: "验证中...",
		previewNotAvailable: "此格式不支持预览。",
		generatingPreview: "正在生成预览...",
		// --- ProcessFolderModal / ProcessCurrentNote / ProcessAllVaultModal ---
		convertCompressResize: "转换、压缩和缩放",
		allImagesInFolder: "以下位置的所有图片：/{folderName}",
		warningModifiesImages: "⚠️ 这将修改所选文件夹及子文件夹（如果启用了递归）中的所有图片。请确保已备份。",
		totalImagesFound: "找到的图片总数：",
		tobeSkipped: "将跳过：",
		tobeProcessed: "将处理：",
		imageSource: "图片来源",
		general: "常规",
		skip: "跳过",
		resize: "缩放",
		sameAsOriginal: "与原始相同",
		compressionLevel: "压缩级别 (0-100)",
		enterQuality: "输入质量 (0-100)",
		skipFormatsPlaceholder: "png,gif",
		width: "宽度",
		height: "高度",
		processImagesInSubfolders: "同时处理所有子文件夹中的图片",
		imagesDirectlyInFolder: "文件夹中的直接图片",
		imagesLinkedInNotesOrCanvas: "笔记或画布中链接的图片",
		processAllImages: "处理所有图片",
		// --- ProcessCurrentNote specific ---
		convertCompressResizeSubtitle: "以下文件中链接的所有图片：{fileName}",
		skipped: "已跳过：",
		submit: "提交",
		skipFolders: "跳过文件夹 ⓘ",
		showExamples: "显示示例和匹配规则说明",
		howMatchingWorks: "匹配规则说明：",
		errorActiveFileMustBeMarkdownOrCanvas: "错误：活动文件必须是 Markdown 或画布文件。",
		// --- ProcessAllVaultModal specific ---
		convertCompressResizeAllImages: "转换、压缩和缩放所有图片",
		inTheVault: "在整个仓库中",
		warningModifiesAllVault: "⚠️ 这将修改整个仓库中的所有图片。请确保已备份。",
		processAllVaultImages: "处理所有图片",
		// --- 共享描述和工具提示 ---
		chooseOutputFormat: "选择图片的输出格式",
		chooseOutputFormatTooltip: "与原始相同：保留当前格式的同时应用压缩/缩放",
		compressionLevelTooltip: "100：无压缩（原始质量）\n75：推荐（良好平衡）\n0-50：高压缩（较低质量）",
		resizeModeDesc: "选择图片的缩放方式。注意：结果是永久性的",
		resizeModeTooltip: "Fit：在尺寸内保持宽高比\nFill：精确匹配尺寸\nLongest edge：限制最长边\nShortest edge：限制最短边\nWidth/Height：约束单个维度",
		resizeModeNone: "无",
		resizeModeFit: "Fit（在尺寸内保持宽高比）",
		resizeModeFill: "Fill（精确匹配尺寸）",
		resizeModeLongestEdge: "最长边",
		resizeModeShortestEdge: "最短边",
		resizeModeWidth: "宽度",
		resizeModeHeight: "高度",
		enlargeOrReduceDesc: "控制图片相对于目标大小的调整方式：",
		enlargeOrReduceTooltip: "• 缩小和放大：调整所有图片以适应指定尺寸\n• 仅缩小：仅缩小大于目标的图片\n• 仅放大：仅放大小于目标的图片",
		enlargeOrReduceAlways: "缩小和放大",
		enlargeOrReduceReduce: "仅缩小",
		enlargeOrReduceEnlarge: "仅放大",
		resizeDimensions: "缩放尺寸",
		enterWidthHeight: "输入期望的宽度和高度（像素）",
		enterLength: "输入期望的长度（像素）",
		enterWidth: "输入期望的宽度（像素）",
		enterHeight: "输入期望的高度（像素）",
		skipFormatsDesc: "逗号分隔列表（无点或空格，例如 png,gif）。",
		skipFormatsTooltip: "逗号分隔的要跳过的文件格式列表（例如 tif,tiff,heic）。留空以处理所有格式。",
		skipTargetFormatDesc: "如果图片已是目标格式，则跳过压缩/缩放。",
		skipTargetFormatTooltip: "如果图片已是目标格式，允许跳过其压缩、转换和缩放。仍将处理所有其他格式。",
		skipFoldersTooltip: "逗号分隔的文件夹模式，用于排除图片处理。",
		skipFoldersPlaceholder: "例如：_attachments, images/**",
		skipFormatsPlaceholderExample: "例如：tif, tiff, heic",
		// 文件夹匹配帮助文本
		helpFolderPathsNoWildcards: "不带通配符的文件夹路径会跳过该文件夹及所有子文件夹",
		helpLeadingSlash: "前导 / 是可选的",
		helpUseStar: "使用 * 仅匹配直接子项",
		helpUseDoubleStar: "使用 ** 包含子文件夹",
		helpRegexSupported: "支持正则表达式用于高级模式",
		helpExamples: "示例：",
		helpAdvancedRegex: "高级（正则表达式）：",
		selected: "已选择",
		select: "选择",
		autoDetectFfmpeg: "自动检测 FFmpeg",
		failedToProcessImageGeneric: '处理图片"{fileName}"失败（目标格式：{format}）：{message}',
	},

	// ----------------------------------------------------------------
	// 预设选择窗口 (from PresetSelectionModal.ts)
	// ----------------------------------------------------------------
	presetSelection: {
		imageConverter: "图片转换器",
		variables: "{变量}",
		showAvailableVariables: "显示可用变量",
		folder: "📂 文件夹",
		folderPlaceholder: "临时覆盖所选预设中定义的路径，例如：assets/{YYYY}/{MM}",
		filename: "📄 文件名",
		filenamePlaceholder: "例如：{imagename}-{timestamp}",
		format: "格式",
		link: "链接",
		resize: "缩放",
		quality: "质量",
		editPresets: "编辑预设",
		apply: "应用",
		none: "无",
		preview: "预览",
		noPathSpecified: "未指定路径",
		enterTemplatesToSeePreview: "输入模板以查看预览",
		errorGeneratingPreview: "生成预览时出错",
	},

	// ----------------------------------------------------------------
	// 文件夹和文件名管理 (from FolderAndFilenameManagement.ts)
	// ----------------------------------------------------------------
	folderAndFilename: {
		folderTemplateValidationFailed: "文件夹模板验证失败：{errors}",
		subfolderTemplateValidationFailed: "子文件夹模板验证失败：{errors}",
		filenameTemplateValidationFailed: "文件名模板验证失败：{errors}",
		customFolderTemplateNotDefined: "自定义文件夹模板未定义。",
		inconsistentFolderCasing: "警告：检测到文件夹大小写不一致。使用原始路径：{currentPath}",
		temporaryFileNotFoundAfterRenaming: "错误：重命名后找不到临时文件。",
		errorRenamingFile: "重命名文件时出错：{errorMessage}",
	},

	// ----------------------------------------------------------------
	// 链接格式化器 (from LinkFormatter.ts)
	// ----------------------------------------------------------------
	linkFormatter: {
		failedToLoadImageDimensions: "加载 {fileName} 的图片尺寸失败",
	},
};
