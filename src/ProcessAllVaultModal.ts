// ProcessAllVaultModal.ts
import {
    App,
    Modal,
    Setting,
    ButtonComponent,
} from "obsidian";
import ImageConverterPlugin from "./main";
import { BatchImageProcessor } from "./BatchImageProcessor";
import { strings } from "./i18n";

export class ProcessAllVaultModal extends Modal {
    private enlargeReduceSettings: Setting | null = null;
    private resizeInputSettings: Setting | null = null;
    // private submitButton: ButtonComponent | null = null;
    private resizeInputsDiv: HTMLDivElement | null = null;
    private enlargeReduceDiv: HTMLDivElement | null = null;

    constructor(
        app: App,
        private plugin: ImageConverterPlugin,
        private batchImageProcessor: BatchImageProcessor
    ) {
        super(app);
        this.modalEl.addClass("image-convert-modal");
    }

    onOpen() {
        const { contentEl } = this;
        this.createUI(contentEl);
    }

    onClose() {
        // Clear nullable UI elements
        this.enlargeReduceSettings = null;
        this.resizeInputSettings = null;
        this.resizeInputsDiv = null;
        this.enlargeReduceDiv = null;
    
        const { contentEl } = this;
        contentEl.empty();
    }

    // --- UI Creation Methods ---

    private createUI(contentEl: HTMLElement) {
        this.createHeader(contentEl);
        this.createWarningMessage(contentEl);

        const settingsContainer = contentEl.createDiv({
            cls: "settings-container",
        });

        const formatQualityContainer = settingsContainer.createDiv({
            cls: "format-quality-container",
        });
        this.createGeneralSettings(formatQualityContainer);

        const resizeContainer = settingsContainer.createDiv({
            cls: "resize-container",
        });
        this.createResizeSettings(resizeContainer);

        const skipContainer = settingsContainer.createDiv({
            cls: "skip-container",
        });
        this.createSkipSettings(skipContainer);

        this.createProcessButton(settingsContainer);
    }

    private createHeader(contentEl: HTMLElement) {
        const headerContainer = contentEl.createDiv({ cls: "modal-header" });
        headerContainer.createEl("h2", {
            text: strings.processModals.convertCompressResizeAllImages,
        });
        headerContainer.createEl("h6", {
            text: strings.processModals.inTheVault,
            cls: "modal-subtitle",
        });
    }

    private createWarningMessage(contentEl: HTMLElement) {
        contentEl.createEl("p", {
            cls: "modal-warning",
            text: strings.processModals.warningModifiesAllVault,
        });
    }

    private createGeneralSettings(contentEl: HTMLElement) {
        new Setting(contentEl)
            .setName(strings.processModals.convertTo)
            .setDesc(
                strings.processModals.chooseOutputFormat
            )
            .setTooltip(
                strings.processModals.chooseOutputFormatTooltip
            )
            .addDropdown((dropdown) => {
                dropdown
                    .addOption("disabled", strings.processModals.sameAsOriginal)
                    .addOptions({
                        webp: "WebP",
                        jpg: "JPG",
                        png: "PNG",
                    })
                    .setValue(this.plugin.settings.ProcessAllVaultconvertTo)
                    .onChange(async (value) => {
                        this.plugin.settings.ProcessAllVaultconvertTo = value;
                        await this.plugin.saveSettings();
                    });
            });

        new Setting(contentEl)
            .setName(strings.processModals.quality)
            .setDesc(strings.processModals.compressionLevel)
            .setTooltip(
                strings.processModals.compressionLevelTooltip
            )
            .addText((text) => {
                text
                    .setPlaceholder(strings.processModals.enterQuality)
                    .setValue(
                        (
                            this.plugin.settings.ProcessAllVaultquality * 100
                        ).toString()
                    )
                    .onChange(async (value) => {
                        const quality = parseInt(value, 10);
                        if (
                            !isNaN(quality) &&
                            quality >= 0 &&
                            quality <= 100
                        ) {
                            this.plugin.settings.ProcessAllVaultquality =
                                quality / 100;
                            await this.plugin.saveSettings();
                        }
                    });
            });
    }

    private createResizeSettings(contentEl: HTMLElement) {
        new Setting(contentEl)
            .setName(strings.processModals.resizeMode)
            .setDesc(
                strings.processModals.resizeModeDesc
            )
            .setTooltip(
                strings.processModals.resizeModeTooltip
            )
            .addDropdown((dropdown) => {
                dropdown
                    .addOptions({
                        None: strings.processModals.resizeModeNone,
                        Fit: strings.processModals.resizeModeFit,
                        Fill: strings.processModals.resizeModeFill,
                        LongestEdge: strings.processModals.resizeModeLongestEdge,
                        ShortestEdge: strings.processModals.resizeModeShortestEdge,
                        Width: strings.processModals.resizeModeWidth,
                        Height: strings.processModals.resizeModeHeight,
                    })
                    .setValue(
                        this.plugin.settings
                            .ProcessAllVaultResizeModalresizeMode
                    )
                    .onChange(async (value) => {
                        this.plugin.settings.ProcessAllVaultResizeModalresizeMode =
                            value;
                        await this.plugin.saveSettings();
                        this.updateResizeInputVisibility(value);
                    });
            });

        this.resizeInputsDiv = contentEl.createDiv({ cls: "resize-inputs" });
        this.enlargeReduceDiv = contentEl.createDiv({
            cls: "enlarge-reduce-settings",
        });

        this.updateResizeInputVisibility(
            this.plugin.settings.ProcessAllVaultResizeModalresizeMode
        );
    }

    private createSkipSettings(contentEl: HTMLElement) {
        new Setting(contentEl)
            .setName(strings.processModals.skipFormats)
            .setDesc(
                strings.processModals.skipFormatsDesc
            )
            .setTooltip(
                strings.processModals.skipFormatsTooltip
            )
            .addText((text) => {
                text.setPlaceholder(
                    strings.processModals.skipFormatsPlaceholder
                )
                    .setValue(this.plugin.settings.ProcessAllVaultSkipFormats)
                    .onChange(async (value) => {
                        this.plugin.settings.ProcessAllVaultSkipFormats = value;
                        await this.plugin.saveSettings();
                    });
            });

        new Setting(contentEl)
            .setName(strings.processModals.skipImagesInTargetFormat)
            .setDesc(
                strings.processModals.skipTargetFormatDesc
            )
            .setTooltip(
                strings.processModals.skipTargetFormatTooltip
            )
            .addToggle((toggle) => {
                toggle
                    .setValue(
                        this.plugin.settings.ProcessAllVaultskipImagesInTargetFormat
                    )
                    .onChange(async (value) => {
                        this.plugin.settings.ProcessAllVaultskipImagesInTargetFormat =
                            value;
                        await this.plugin.saveSettings();
                    });
            });
    }

    private createProcessButton(contentEl: HTMLElement) {
        const buttonContainer = contentEl.createDiv({
            cls: "button-container",
        });
        new ButtonComponent(buttonContainer)
            .setButtonText(strings.processModals.processAllImages)
            .setCta()
            .onClick(async () => {
                this.close();
                await this.batchImageProcessor.processAllVaultImages();
            });
    }

    // --- Helper Methods for Settings ---

    private updateResizeInputVisibility(resizeMode: string): void {
        if (resizeMode === "None") {
            this.resizeInputsDiv?.empty();
            this.enlargeReduceDiv?.hide();
            this.resizeInputSettings = null;
            this.enlargeReduceSettings = null;
        } else {
            if (!this.resizeInputSettings) {
                this.createResizeInputSettings(resizeMode);
            } else {
                this.updateResizeInputSettings(resizeMode);
            }

            if (!this.enlargeReduceSettings) {
                this.createEnlargeReduceSettings();
            }
            this.enlargeReduceDiv?.show();
        }
    }

    private createEnlargeReduceSettings(): void {
        if (!this.enlargeReduceDiv) return;

        this.enlargeReduceDiv.empty();

        this.enlargeReduceSettings = new Setting(this.enlargeReduceDiv)
            .setClass("enlarge-reduce-setting")
            .setName(strings.processModals.enlargeOrReduce)
            .setDesc(
                strings.processModals.enlargeOrReduceDesc
            )
            .setTooltip(
                strings.processModals.enlargeOrReduceTooltip
            )
            .addDropdown((dropdown) => {
                dropdown
                    .addOptions({
                        Always: strings.processModals.enlargeOrReduceAlways,
                        Reduce: strings.processModals.enlargeOrReduceReduce,
                        Enlarge: strings.processModals.enlargeOrReduceEnlarge,
                    })
                    .setValue(
                        this.plugin.settings.ProcessAllVaultEnlargeOrReduce
                    )
                    .onChange(
                        async (value: "Always" | "Reduce" | "Enlarge") => {
                            this.plugin.settings.ProcessAllVaultEnlargeOrReduce =
                                value;
                            await this.plugin.saveSettings();
                        }
                    );
            });
    }

    private createResizeInputSettings(resizeMode: string): void {
        if (!this.resizeInputsDiv) return;

        this.resizeInputsDiv.empty();

        this.resizeInputSettings = new Setting(this.resizeInputsDiv).setClass(
            "resize-input-setting"
        );

        this.updateResizeInputSettings(resizeMode);
    }

    private updateResizeInputSettings(resizeMode: string): void {
        if (!this.resizeInputSettings) return;

        this.resizeInputSettings.clear();

        let name = "";
        let desc = "";

        if (["Fit", "Fill"].includes(resizeMode)) {
            name = strings.processModals.resizeDimensions;
            desc = strings.processModals.enterWidthHeight;
            this.resizeInputSettings
                .setName(name)
                .setDesc(desc)
                .addText((text) =>
                    text
                        .setPlaceholder(strings.processModals.width)
                        .setValue(
                            this.plugin.settings
                                .ProcessAllVaultResizeModaldesiredWidth
                                .toString()
                        )
                        .onChange(async (value: string) => {
                            const width = parseInt(value);
                            if (/^\d+$/.test(value) && width > 0) {
                                this.plugin.settings.ProcessAllVaultResizeModaldesiredWidth =
                                    width;
                                await this.plugin.saveSettings();
                            }
                        })
                )
                .addText((text) =>
                    text
                        .setPlaceholder(strings.processModals.height)
                        .setValue(
                            this.plugin.settings
                                .ProcessAllVaultResizeModaldesiredHeight
                                .toString()
                        )
                        .onChange(async (value: string) => {
                            const height = parseInt(value);
                            if (/^\d+$/.test(value) && height > 0) {
                                this.plugin.settings.ProcessAllVaultResizeModaldesiredHeight =
                                    height;
                                await this.plugin.saveSettings();
                            }
                        })
                );
        } else {
            switch (resizeMode) {
                case "LongestEdge":
                case "ShortestEdge":
                    name = `${resizeMode}`;
                    desc = strings.processModals.enterLength;
                    break;
                case "Width":
                    name = strings.processModals.width;
                    desc = strings.processModals.width;
                    break;
                case "Height":
                    name = strings.processModals.height;
                    desc = strings.processModals.height;
                    break;
            }

            this.resizeInputSettings
                .setName(name)
                .setDesc(desc)
                .addText((text) =>
                    text
                        .setPlaceholder("")
                        .setValue(this.getInitialValue(resizeMode).toString())
                        .onChange(async (value: string) => {
                            const length = parseInt(value);
                            if (/^\d+$/.test(value) && length > 0) {
                                await this.updateSettingValue(
                                    resizeMode,
                                    length
                                );
                            }
                        })
                );
        }
    }

    private getInitialValue(resizeMode: string): number {
        switch (resizeMode) {
            case "LongestEdge":
            case "ShortestEdge":
                return this.plugin.settings
                    .ProcessAllVaultResizeModaldesiredLength;
            case "Width":
                return this.plugin.settings
                    .ProcessAllVaultResizeModaldesiredWidth;
            case "Height":
                return this.plugin.settings
                    .ProcessAllVaultResizeModaldesiredHeight;
            default:
                return 0;
        }
    }

    private async updateSettingValue(
        resizeMode: string,
        value: number
    ): Promise<void> {
        switch (resizeMode) {
            case "LongestEdge":
            case "ShortestEdge":
                this.plugin.settings.ProcessAllVaultResizeModaldesiredLength =
                    value;
                break;
            case "Width":
                this.plugin.settings.ProcessAllVaultResizeModaldesiredWidth =
                    value;
                break;
            case "Height":
                this.plugin.settings.ProcessAllVaultResizeModaldesiredHeight =
                    value;
                break;
        }
        await this.plugin.saveSettings();
    }
}