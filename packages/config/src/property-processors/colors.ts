// processors/colors.ts
import {PropertyProcessor, TailwindPropertyConfig} from "./base";
import {
    ConfigColorModes,
    ConfigTheme,
    ConfigThemes,
    CssVariableRecord,
    UserConfigColor,
    UserConfigColors
} from "../types";
import {generateColorCssVars, generateColorValues, generateCssVar} from "../utils";
import {COLOR_MODES} from "../constants";
import _ from "lodash";

const getThemeColorKeys = (themes: ConfigThemes): string[] => {
    return _.uniq(_.flatMap(Object.values(themes), (theme: ConfigTheme) => {
        const colors = theme.colors;

        const mergedTheme = _.merge(
            {},
            _.omit(colors, [COLOR_MODES.Light, COLOR_MODES.Dark]),
            colors[COLOR_MODES.Light] || {},
            colors[COLOR_MODES.Dark] || {}
        );
        return Object.keys(mergedTheme);
    }));
};

class ColorProcessor implements PropertyProcessor<UserConfigColors, ConfigColorModes> {
    readonly isModeDependent = true;

    process(colors: UserConfigColors): ConfigColorModes {
        // Process Radix colors
        const lightColors = (colors.light || colors) as UserConfigColor;
        const darkColors = (colors.dark || {}) as UserConfigColor;

        return ({
            light: generateColorValues(lightColors),
            dark: Object.keys(darkColors).length > 0
                ? generateColorValues(darkColors, true)
                : generateColorValues(lightColors, true)
        });
    }

    generateCssVars(colorModes: ConfigColorModes): Record<string, CssVariableRecord> {
        // Generate color CSS vars
        const varsByMode: Record<string, CssVariableRecord> = {};
        [COLOR_MODES.Light, COLOR_MODES.Dark].forEach((mode) => {
            const vars: CssVariableRecord = {};
            Object.entries(colorModes[mode]).forEach(([color, shades]) => {
                Object.entries(shades).forEach(([index, shade]) => {
                    Object.assign(vars, {
                        [`${generateCssVar(color, index)}`]: shade,
                    });
                });
            });
            varsByMode[`.${mode}`] = vars;
        })
        return varsByMode;
    }

    generateTailwindConfig(themes: ConfigThemes): TailwindPropertyConfig {
        // Generate Tailwind color config
        console.log(getThemeColorKeys(themes));
        return Object.fromEntries(
            getThemeColorKeys(themes).map(key => [key, generateColorCssVars(key)])
        );
    }
}

export default ColorProcessor;
