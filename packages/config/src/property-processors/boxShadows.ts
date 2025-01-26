import {BoxShadowConfig, ConfigBoxShadow, ConfigThemes, CssVariableRecord} from "../types";
import {generateBoxShadowValues, generateShadowCssVar} from "../utils";
import {COLOR_MODES, DEFAULT_THEME} from "../constants";
import {PropertyProcessor, TailwindPropertyConfig} from "./base";
import {name} from "lodash";

export const generateShadowCssVars = (shadows: Record<string, string>): CssVariableRecord => {
    const vars: CssVariableRecord = {};
    Object.entries(shadows).forEach(([name, value]) => {
        vars[generateShadowCssVar(name)] = value;
    });
    return vars;
};


// processors/shadows.ts
class BoxShadowProcessor implements PropertyProcessor<BoxShadowConfig, ConfigBoxShadow> {
    readonly isModeDependent = true;

    // Similar implementation for shadows
    process(boxShadows: BoxShadowConfig): ConfigBoxShadow {
        return ({
            light: generateBoxShadowValues(boxShadows),
            dark: generateBoxShadowValues(boxShadows, true)
        });
    }

    generateCssVars(boxShadows: ConfigBoxShadow): Record<string, CssVariableRecord> {
        const varsByMode: Record<string, CssVariableRecord> = {};
        [COLOR_MODES.Light, COLOR_MODES.Dark].forEach((mode) => {
            const vars: CssVariableRecord = {};
            Object.entries(boxShadows).forEach(([name, value]) => {
                vars[generateShadowCssVar(name)] = value;
            });
        });
        return varsByMode;
    }

    generateTailwindConfig(themes: ConfigThemes): TailwindPropertyConfig {
        const defaultTheme = themes[DEFAULT_THEME];
        if (!defaultTheme?.boxShadow?.light) return {};

        return Object.fromEntries(
            Object.keys(defaultTheme.boxShadow.light).map(key => [
                key,
                `var(--shadow-${key})`
            ])
        );
    }
}

export default BoxShadowProcessor;
