export const en = {
	// ----------------------------------------------------------------
	// Commands (from main.ts addCommand)
	// ----------------------------------------------------------------
	commands: {
		processAllVaultImages: "Process all vault images",
		processAllImagesCurrentNote: "Process all images in current note",
		openImageConverterSettings: "Open Image Converter Settings",
		reloadPlugin: "Reload plugin",
	},

	// ----------------------------------------------------------------
	// Notices — main.ts
	// ----------------------------------------------------------------
	notices: {
		// -- Initialization --
		failedToInitialize: "Image Converter: Failed to initialize. Check console for details.",

		// -- No active file --
		noActiveFileDetected: "No active file detected",

		// -- Settings --
		unableToOpenSettings: "Unable to open settings. Please check if the settings plugin is enabled.",

		// -- Reload plugin --
		ReloadingImageConverter: "Reloading Image Converter...",
		imageConverterReloaded: "Image Converter reloaded!",
		failedToReloadPluginsApiUnavailable: "Failed to reload: plugins API unavailable",
		failedToReloadPluginSeeConsole: "Failed to reload plugin, see console",

		// -- Confirm dialog (drop/paste) --
		showPresetSelectionModal: "Show Preset Selection Modal?",
		doYouWantToSelectPresetsForThisImage: "Do you want to select presets for this image?",
		yes: "Yes",

		// -- Destination / filename errors --
		failedToDetermineDestinationOrFilename: 'Failed to determine destination or filename for "{fileName}". Check console for details.',
		failedToCreateFolder: 'Failed to create folder "{destinationPath}". Check console for details.',
		errorIncrementingFilename: 'Error incrementing filename for "{fileName}". Check console for details.',

		// -- Skip patterns --
		skippedRenamingConversionDueToSkipPattern: 'Skipped renaming/conversion of image "{fileName}" due to skip pattern match.',
		skippedConversionDueToSkipPattern: 'Skipped conversion of image "{fileName}" due to skip pattern match in the conversion preset.',

		// -- Reuse / link insertion --
		failedToInsertLinkForReusedFile: 'Failed to insert link for "{fileName}". Check console for details.',
		failedToInsertLinkForSkippedConversion: 'Failed to insert link for "{fileName}". Check console for details.',
		failedToInsertLinkForSkippedProcessing: 'Failed to insert link for "{fileName}". Check console for details.',
		failedToInsertLinkAfterProcessing: 'Failed to insert link for "{fileName}". Check console for details.',
		failedToInsertImageLink: "Failed to insert image link. Check console for details.",

		// -- Original image revert --
		usingOriginalImageLessThanMinSavings: 'Using original image for "{fileName}" because size reduction was less than {minSavingsKB} KB.',

		// -- Processing errors --
		failedToProcessImageFileAlreadyExists: 'Failed to process image: File "{newFilename}" already exists.',
		failedToProcessImageInvalidInputFileType: 'Failed to process image: Invalid input file type for "{fileName}".',
		failedToProcessImageWithMessage: 'Failed to process image "{fileName}": {errorMessage}. Check console for details.',
		failedToProcessImageCheckConsole: 'Failed to process image "{fileName}". Check console for details.',

		// -- Unexpected error --
		unexpectedErrorCheckConsole: "An unexpected error occurred. Check console for details.",
	},

	// ----------------------------------------------------------------
	// Context menu titles (from ContextMenu.ts .setTitle)
	// ----------------------------------------------------------------
	contextMenu: {
		openInNewWindow: "Open in new window",
		cut: "Cut",
		copyImage: "Copy image",
		copyAsBase64EncodedImage: "Copy as Base64 encoded image",
		convertCompress: "Convert/compress...",
		cropRotateFlip: "Crop/rotate/flip",
		annotateImage: "Annotate image",
		showInNavigation: "Show in navigation",
		showInSystemExplorer: "Show in system explorer",
		deleteImageAndLink: "Delete image and link",
		imageTools: "Image tools",
	},

	// ----------------------------------------------------------------
	// Context menu input field labels & placeholders (from ContextMenu.ts)
	// ----------------------------------------------------------------
	contextMenuLabels: {
		// -- Labels --
		name: "Name:",
		folder: "Folder:",
		caption: "Caption:",
		size: "Size:",
		widthPlaceholder: "W",
		heightPlaceholder: "H",

		// -- Placeholders --
		enterNewImageName: "Enter a new image name",
		enterNewPathForImage: "Enter a new path for the image",
		loadingCaption: "Loading caption...",
		enterCustomCaption: "Enter a custom caption",
	},

	// ----------------------------------------------------------------
	// File menu items (from main.ts file-menu handler)
	// ----------------------------------------------------------------
	fileMenu: {
		processImage: "Process image",
		processAllImagesInFolder: "Process all images in Folder",
		processAllImagesInNote: "Process all images in note",
		processAllImagesInCanvas: "Process all images in canvas",
	},

	// ----------------------------------------------------------------
	// Buttons
	// ----------------------------------------------------------------
	buttons: {
		update: "Update",
		cut: "Cut",
		delete: "Delete",
	},

	// ----------------------------------------------------------------
	// Confirm dialogs (from ContextMenu.ts)
	// ----------------------------------------------------------------
	confirmDialogs: {
		// -- Caption & dimensions update --
		confirmUpdates: "Confirm Updates",
		foundMatchingImageLinksUpdateAll: "Found {matchCount} matching image links. Update all?",
		failedToUpdateSeeConsole: "Failed to update. See console for details.",

		// -- Cut confirmation --
		confirmCut: "Confirm Cut",
		foundMatchingImageLinksCutAll: "Found {matchCount} matching image links inside current note. Do you want to cut all of them?",
		failedToCutSeeConsole: "Failed to cut. See console for details.",

		// -- Delete confirmation --
		confirmDelete: "Confirm Delete",
		foundUniqueMatchingImageLinksDeleteAll: "Found {matchCount} unique matching image links inside current note. Do you want to delete all of them?",
		failedToDeleteSeeConsole: "Failed to delete. See console for details.",
	},

	// ----------------------------------------------------------------
	// Size comparison format (from main.ts showSizeComparisonNotification)
	// ----------------------------------------------------------------
	sizeComparison: {
		format: "{originalSizeFormatted} -> {newSizeFormatted} ({changeSymbol}{percentChange}%)",
		bytes: "{bytes} bytes",
		kb: "{value} KB",
		mb: "{value} MB",
	},

	// ----------------------------------------------------------------
	// Context menu notices (from ContextMenu.ts)
	// ----------------------------------------------------------------
	contextMenuNotices: {
		// -- Dimensions & caption --
		dimensionsMustBePositiveNumbers: "Dimensions must be positive numbers",
		failedToFindImageLinkInCurrentNote: "Failed to find image link in the current note.",
		imageDimensionsUpdatedSuccessfully: "Image dimensions updated successfully.",
		imageCaptionAndDimensionsUpdatedSuccessfully: "Image caption and dimensions updated successfully.",

		// -- Rename & move --
		pleaseEnterNewFileName: "Please enter a new file name.",
		pleaseEnterValidFileName: "Please enter a valid file name",
		pleaseEnterNewPath: "Please enter a new path.",
		imageNameUpdatedSuccessfully: "Image name updated successfully",
		imagePathUpdatedCaseSensitive: "Image path updated (case-sensitive change).",
		imagePathUpdateFailedCaseSensitive: "Image path update failed (case-sensitive change).",
		imagePathUpdatedSuccessfully: "Image path updated successfully",
		failedToUpdateImagePath: "Failed to update image path",

		// -- Open in new window --
		failedToOpenInNewWindow: "Failed to open in new window",

		// -- Cut --
		noActiveMarkdownViewFound: "No active Markdown view found",
		failedToFindBase64ImageLink: "Failed to find Base64 image link",
		imageLinksCutFromNoteAndCopiedToClipboard: "Image link(s) cut from note and copied to clipboard",
		failedToCutImageCheckConsole: "Failed to cut image. Check console for details.",

		// -- Copy image --
		failedToGetCanvasContext: "Failed to get canvas context",
		imageCopiedToClipboard: "Image copied to clipboard",
		failedToCopyImageToClipboard: "Failed to copy image to clipboard",

		// -- Copy Base64 --
		imageCopiedToClipboardAsBase64: "Image copied to clipboard as Base64",
		failedToCopyImageAsBase64: "Failed to copy image as Base64",

		// -- Process / convert --
		noActiveMarkdownView: "No active Markdown view",
		noCurrentFileFound: "No current file found",
		noSourceAttributeFoundOnImage: "No source attribute found on the image",
		unableToExtractFilenameFromImageSource: "Unable to extract filename from the image source",
		unableToFindImage: "Unable to find image: {filename}",
		notAValidImageFile: "Not a valid image file",
		errorProcessingImage: "Error processing image",

		// -- Crop --
		noSourceAttributeFound: "No source attribute found",
		unableToLocateImageFile: "Unable to locate image file",

		// -- Annotate --
		errorProcessingImagePath: "Error processing image path",

		// -- Show in navigation --
		failedToShowInNavigation: "Failed to show in navigation",

		// -- Show in system explorer --
		failedToShowInSystemExplorer: "Failed to show in system explorer",

		// -- Delete --
		imageLinksRemovedFromNote: "Image link(s) removed from note",
		imageFileMovedToTrash: "Image file moved to trash",
		failedToFindUniqueImageLinksInCurrentNote: "Failed to find unique image links in the current note.",
		noUniqueImageLinksFoundToDelete: "No unique image links found to delete.",
		failedToDeleteImageCheckConsole: "Failed to delete image. Check console for details.",
	},

	// ----------------------------------------------------------------
	// Misc
	// ----------------------------------------------------------------
	misc: {
		line: "Line",
	},

	// ----------------------------------------------------------------
	// Image alignment context menu (from ImageAlignment.ts)
	// ----------------------------------------------------------------
	imageAlignment: {
		alignImage: "Align image",
		left: "Left",
		center: "Center",
		right: "Right",
		wrapText: "Wrap text",
	},

	// ----------------------------------------------------------------
	// Crop tool (from Crop.ts)
	// ----------------------------------------------------------------
	crop: {
		errorLoadingImage: "Error loading image for cropping",
		imageSavedSuccessfully: "Image saved successfully",
		errorSavingImage: "Error saving image: {message}",
	},

	// ----------------------------------------------------------------
	// Image Annotation (from ImageAnnotation/)
	// ----------------------------------------------------------------
	annotation: {
		errorLoadingImage: "Error loading image",
		presetSaved: "Preset {index} saved",
		failedToExportImage: "Failed to export image",
		imageSavedSuccessfully: "Image saved successfully",
		errorSavingImage: "Error saving image",
	},

	// ----------------------------------------------------------------
	// Batch image processing (from BatchImageProcessor.ts)
	// ----------------------------------------------------------------
	batchProcessing: {
		noImagesFoundInNote: "No images found in the note.",
		noProcessingNeededAllSkippedOrOriginal: "No processing needed: all images are either in skip list or kept in original format with no compression or resizing.",
		noProcessingNeededAlreadyFormat: "No processing needed: All images are either in skip list or already in {format} format with no compression or resizing.",
		noProcessingNeededOriginalFormat: "No processing needed: original format selected with no compression or resizing.",
		noProcessingNeededAlreadyInFormat: "No processing needed: All images are already in {format} format.",
		noImagesFoundNeedProcessing: "No images found that need processing.",
		failedToUpdateLinks: 'Failed to update links in note for "{fileName}". Check console for details.',
		errorProcessingImage: 'Error processing image "{fileName}": {errorMessage}',
		errorProcessingImages: "Error processing images: {errorMessage}",
		errorInvalidFolderPath: "Error: invalid folder path.",
		noImagesFoundInFolder: "No images found in the folder.",
		noImagesFoundInVault: "No images found in the vault.",
		noProcessingNeededAllVaultSkippedOrOriginal: "No processing needed: all vault images are either in skip list or kept in original format with no compression or resizing.",
		noProcessingNeededAllVaultAlreadyFormat: "No processing needed: all vault images are either in skip list or already in {format} format with no compression or resizing.",
		noProcessingNeededAllVaultAlreadyInFormat: "No processing needed: All vault images are either in {format} format or in skip list.",
		failedToUpdateLinksForImage: 'Failed to update links for "{fileName}". Check console for details.',
	},

	// ----------------------------------------------------------------
	// Settings UI (from ImageConverterSettings.ts)
	// ----------------------------------------------------------------
	settings: {
		rightClickMenu: "Right-click menu",
		rightClickMenuInfo: "Enable to show a right-click context menu.",
		cursorPositionAfterDropPaste: "Cursor position after drop/paste",
		cursorPositionAfterDropPasteInfo: "Where to place the cursor after dropping or pasting the image",
		neverProcessFilenames: "Never process these filenames",
		neverProcessFilenamesInfo: 'A comma-separated list of file names or patterns that the plugin should never process. Supports glob (*) and regex (enclosed in `/` or `r/` or `regex:`). E.g., `old.png, /^_/, r/temp-.*\\.jpg$/` . Or simply skip all cat images e.g.: /cat/ or all gif images *.gif',
		showSizeNotification: "Show notification for image size changes",
		showSizeNotificationInfo: "Display a notification showing how much space was saved after processing an image.",
		showWindow: "Show window",
		showWindowDesc: "Choose whether to show processing options on each image drop/paste",
		dropPastePresets: "Drop/paste presets",
		dropPastePresetsDesc: "Quickly apply a combination of presets",
		noneOption: "None",
		// Image alignment settings
		imageAlignment: "Image alignment",
		defaultAlignmentForNewImages: "Default alignment for new images",
		defaultAlignmentForNewImagesDesc: "Automatically apply this alignment when inserting new images. Set to 'none' to disable.",
		imageAlignmentCacheLocation: "Image alignment cache location",
		imageAlignmentCacheLocationDesc: "Choose where to store the cache file for image alignments. Note: App reload required.",
		imageAlignmentCacheLocationInfo: "If you use Obsidian Sync, it is strongly recommended to use the SAME location on all your devices to ensure consistent behavior. Default: Obsidian's config folder (syncable).",
		imageAlignmentCacheCleanupInterval: "Image alignment cache cleanup interval",
		imageAlignmentCacheCleanupIntervalDesc: "Interval (in minutes) to clean up redundant entries from image alignment cache. Default: 1 hour (0 to disable)",
		withinConfigFolderSyncable: "Within config folder (syncable)",
		withinPluginFolderNotSyncable: "Within plugin folder (not syncable)",
		// Drag & scroll resize settings
		dragScrollResize: "Drag & scroll resize",
		enableDragResize: "Enable drag resize",
		enableDragResizeDesc: "Allow resizing images by dragging edges of the image.",
		enableDragResizeInfo: "This creates a new <DIV> under the image to show resizing HANDLES. But this might cause some incompatibility with certain themes and cause images to jump around.",
		lockAspectRatioWhenDragging: "Lock the aspect ratio when dragging",
		lockAspectRatioWhenDraggingDesc: "Prevent accidental distortions of image aspect ratio when dragging to resize",
		enableScrollWheelResize: "Enable scroll-wheel resize",
		enableScrollWheelResizeDesc: "Allow resizing images using the scroll wheel",
		scrollWheelModifierKey: "Scroll-wheel modifier key",
		scrollWheelModifierKeyDesc: "Key that must be held while using scroll-wheel to resize",
		scrollWheelResizeSensitivity: "Scroll-wheel resize sensitivity",
		scrollWheelResizeSensitivityDesc: "Adjust how sensitive the scroll-wheel resize is (0.01-1.0)",
		disableObsidianImageSelectionOnClick: "Disable Obsidian image selection on click",
		disableObsidianImageSelectionOnClickInfo: "Keep focus in the editor when clicking an internal image in live preview instead of showing Obsidian's default outline/resize corner. Cursor placement follows the drop/paste cursor position setting.",
		disableObsidianImageSelectionOnClickDesc: "Keep focus in the editor when clicking an internal image in live preview instead of showing Obsidian's default outline/resize corner. Cursor placement follows the drop/paste cursor position setting.",
		cursorPositionDuringResize: "Cursor position during resize",
		cursorPositionDuringResizeInfo: "Where to place the cursor when resizing an image. Note: 'don't move cursor' - will try to keep your existing cursor in place but if you DRAG-RESIZE and cursor is still over the image when you finish resizing, it will get the text selected.",
		allowResizingInReadingMode: "Allow resizing in reading mode",
		allowResizingInReadingModeDesc: "Non-destructive resizing in reading mode is only visual, thus if it is too distractive you can disable it.",
		// Captions settings
		captions: "Captions",
		textAlignmentWithinCaption: "Text alignment within caption",
		textTransform: "Text transform",
		textTransformDesc: "Set text transformation",
		fontSize: "Font size",
		fontSizeDesc: "Set the font size for image captions (e.g., 12px, 1.2em).",
		weight: "Weight",
		weightDesc: "Set font weight (e.g., normal, bold, 600)",
		color: "Color",
		colorDesc: "Choose a color for image captions e.g.: red, grey, white, black, hsl(50, 50%, 50%), rgb(50%, 75%, 100%)",
		fontStyle: "Font style",
		fontStyleDesc: "Set the font style (e.g., italic, normal).",
		backgroundColor: "Background color",
		backgroundColorDesc: "Choose a background color for image captions (e.g.: transparent, #f5f5f5, rgba(255,255,255,0.8))",
		border: "Border",
		borderDesc: "Set border style (e.g., 1px solid gray)",
		borderCornerRadius: "Border corner radius",
		borderCornerRadiusDesc: "Set border radius for caption (e.g., make it slightly rounded: 4px)",
		spaceAtTheTop: "Space at the top",
		spaceAtTheTopDesc: "Set space between image and caption (e.g., 4px, 8px)",
		padding: "Padding",
		paddingDesc: "Set padding around caption (e.g., 4px 8px)",
		skipCaptionExtensions: "Skip caption extensions",
		skipCaptionExtensionsDesc: "Comma-separated list of image extensions to exclude from captions (e.g., PNG, JPG).",
		// Notification messages
		contextMenuDisabled: "Context menu disabled. Reload Obsidian to see changes.",
		contextMenuEnabled: "Context menu enabled. Reload Obsidian to see changes.",
		imageAlignmentDisabled: "Image alignment disabled. Reload Obsidian to see changes.",
		imageAlignmentEnabled: "Image alignment enabled. Reload Obsidian to see changes.",
		imageResizingDisabled: "Image resizing disabled. Reload Obsidian to see changes.",
		imageResizingEnabled: "Image resizing enabled. Reload Obsidian to see changes.",
		imageCaptionsDisabled: "Image captions disabled. Reload Obsidian to see changes.",
		imageCaptionsEnabled: "Image captions enabled. Reload Obsidian to see changes.",
		// Preset form
		presetName: "Preset name",
		presetNameCannotBeEmpty: "Preset name cannot be empty.",
		presetWithNameAlreadyExists: "A preset with this name already exists.",
		pleaseEnterPresetName: "Please enter a preset name.",
		saveCurrentSelectionAsNewGlobalPreset: "Save current selection as a new global preset",
		deleteSelectedGlobalPreset: "Delete selected global preset",
		confirmDeleteGlobalPreset: 'Are you sure you want to delete the global preset "{presetName}"?',
		// Tab labels
		tabFolder: "Folder",
		tabFilename: "Filename",
		tabConversion: "Conversion",
		tabLinkFormat: "Link format",
		tabResize: "Resize",
		// FFmpeg
		ffmpegNotFound: "FFmpeg not found. Try installing via: Homebrew (macOS), Chocolatey (Windows), or apt/snap (Linux). Then set the path manually.",
		ffmpegPathDetectedAndSaved: "FFmpeg path detected and saved.",
		ffmpegAutoDetectionFailed: "FFmpeg auto-detection failed: {message}",
		pleaseSpecifyFfmpegPath: "Please specify FFmpeg executable path first",
		workingEncoder: "✓ Working encoder: {encoder}{platformHint}",
		encoderDetectionFailedUsingCached: "Encoder detection failed. Using cached encoder: {cachedEncoder}{platformHint}",
		noWorkingAv1EncoderFound: "No working AV1 encoder found. Install FFmpeg with AV1 support.",
		errorDetectingEncoder: "Error detecting encoder: {errorMessage}",
		// Folder preset descriptions
		folderPresetDesc: "Define where converted images will be stored. Choose from predefined locations or create custom paths using variables.",
		filenamePresetDesc: "Control how converted images are named. Use variables like {notename}, {timestamp}, {uuid}, or {MD5:filename} to create unique filenames.",
		conversionPresetDesc: "Control the output format, quality, and resizing options for converted images. This allows to significantly reduce file size and keep vault size small.",
		linkFormatPresetDesc: "Determine how image links are inserted into notes. Choose between Wikilinks and Markdown links, and specify how the file path should be formatted. This allows to use a different link style for images than your vault's default, offering better cross-compatibility with other applications.",
		resizePresetDesc: "Configure non-destructive resizing options for images directly within the editor. This allows to adjust the display size without altering the original file.",
	},

	// ----------------------------------------------------------------
	// Image processor (from ImageProcessor.ts)
	// ----------------------------------------------------------------
	imageProcessor: {
		failedToProcessImage: 'Failed to process image "{filename}" (target: {format}): {message}',
		pngquantPathNotSet: "The pngquant executable path is not set. Please configure it in the plugin settings.",
		ffmpegPathNotSet: "FFmpeg executable path is not set. Please configure it in the plugin settings.",
		hardwareEncoderUnavailable: "Hardware encoder unavailable. Falling back to {softwareFallback}...",
	},

	// ----------------------------------------------------------------
	// Process modals (from ProcessSingleImageModal, ProcessFolderModal, ProcessCurrentNote)
	// ----------------------------------------------------------------
	processModals: {
		noProcessingNeeded: 'No processing needed for "{fileName}".',
		skippedConversionDueToSkipPattern: 'Skipped conversion of image "{fileName}" due to skip pattern match in the conversion preset.',
		usingOriginalImageLarger: 'Using original image for "{fileName}" as processed image is larger.',
		couldNotFindRenamedFile: "Error: Could not find renamed file at {fullPath}",
		linkUpdatedIn: 'Link updated in "{fileName}"',
		imageProcessedButFailedToRefresh: "Image processed, but failed to refresh view. You may need to reload the note.",
		imageProcessed: 'Image "{fileName}" processed',
		// ProcessFolderModal
		recursive: "Recursive",
		directImages: "Direct images",
		linkedImages: "Linked images",
		convertTo: "Convert to ⓘ",
		quality: "Quality ⓘ",
		skipFormats: "Skip formats ⓘ",
		skipImagesInTargetFormat: "Skip images in target format ⓘ",
		resizeMode: "Resize mode ⓘ",
		enlargeOrReduce: "Enlarge or reduce ⓘ",
		// ProcessCurrentNote
		errorInvalidFolderPath: "Error: Invalid folder path.",
		// PresetSelectionModal
		unableToOpenSettings: "Unable to open settings.",
	},

	// ----------------------------------------------------------------
	// Folder and filename management (from FolderAndFilenameManagement.ts)
	// ----------------------------------------------------------------
	folderAndFilename: {
		folderTemplateValidationFailed: "Folder template validation failed: {errors}",
		subfolderTemplateValidationFailed: "Subfolder template validation failed: {errors}",
		filenameTemplateValidationFailed: "Filename template validation failed: {errors}",
		customFolderTemplateNotDefined: "Custom folder template is not defined.",
		inconsistentFolderCasing: "Warning: Inconsistent folder casing detected. Using original path: {currentPath}",
		temporaryFileNotFoundAfterRenaming: "Error: temporary file not found after renaming.",
		errorRenamingFile: "Error renaming file: {errorMessage}",
	},

	// ----------------------------------------------------------------
	// Link formatter (from LinkFormatter.ts)
	// ----------------------------------------------------------------
	linkFormatter: {
		failedToLoadImageDimensions: "Failed to load image dimensions for {fileName}",
	},
} as const;

export type TranslationStrings = typeof en;
