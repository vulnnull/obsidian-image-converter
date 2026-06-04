/**
 * Lightweight i18n module for Image Converter plugin.
 * Inspired by notebook-navigator's self-built i18n approach.
 *
 * - English (en.ts) is the complete baseline and type definition source.
 * - Other languages are DeepPartial overrides; missing keys fall back to English.
 * - Automatically detects Obsidian's locale via getLanguage().
 * - Exposes a singleton `strings` object for dot-notation access.
 * - Provides a `t()` helper for variable interpolation using {key} placeholders.
 */
import { getLanguage } from "obsidian";
import { en, type TranslationStrings } from "./locales/en";
import { zhCN } from "./locales/zh-CN";

// --- Types ---

/** Recursively make all properties optional and widen literal types. */
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object
        ? DeepPartial<T[P]>
        : T[P] extends string
            ? string
            : T[P];
};

// --- Language map ---

const LANGUAGE_MAP: Record<string, DeepPartial<TranslationStrings>> = {
    zh: zhCN,
    "zh-CN": zhCN,
    "zh-Hans": zhCN,
    "zh-Hans-CN": zhCN,
};

// --- Merge logic ---

function mergeTranslationValues<T extends Record<string, unknown>>(
    base: T,
    override: DeepPartial<T>
): T {
    const result = { ...base } as Record<string, unknown>;
    for (const key in override) {
        if (Object.prototype.hasOwnProperty.call(override, key)) {
            const overrideValue = override[key];
            const baseValue = (base as Record<string, unknown>)[key];
            if (
                typeof overrideValue === "object" &&
                overrideValue !== null &&
                !Array.isArray(overrideValue) &&
                typeof baseValue === "object" &&
                baseValue !== null &&
                !Array.isArray(baseValue)
            ) {
                result[key] = mergeTranslationValues(
                    baseValue as Record<string, unknown>,
                    overrideValue as DeepPartial<Record<string, unknown>>
                );
            } else if (overrideValue !== undefined) {
                result[key] = overrideValue;
            }
        }
    }
    return result as T;
}

// --- Detect and resolve ---

function detectAndMerge(): TranslationStrings {
    const locale = getLanguage();
    const partial = LANGUAGE_MAP[locale];
    if (!partial) return { ...en };
    return mergeTranslationValues(en as unknown as Record<string, unknown>, partial) as TranslationStrings;
}

// --- Public API ---

/** Resolved translation strings for the current Obsidian locale. */
export const strings: TranslationStrings = detectAndMerge();

/**
 * Simple template interpolation.
 * Replaces `{key}` placeholders with values from `params`.
 *
 * @example
 * t("Hello {name}, you have {count} items.", { name: "Alice", count: 3 })
 * // → "Hello Alice, you have 3 items."
 */
export function t(template: string, params?: Record<string, string | number>): string {
    if (!params) return template;
    let result = template;
    for (const [key, value] of Object.entries(params)) {
        result = result.replace(new RegExp(`\\{${key}\\}`, "g"), String(value));
    }
    return result;
}
