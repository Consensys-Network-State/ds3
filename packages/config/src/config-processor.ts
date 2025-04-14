import {
    ConfigTheme,
    ConfigThemes,
    CssVariableRecord,
    UserConfig
} from "./types";
import { Config as TailwindConfig } from 'tailwindcss';
import _ from "lodash";
import defaultConfig from "./default-config";
import rnrPreset from "./rnr.config";
import {COLOR_MODES, DEFAULT_THEME} from "./constants";
import tailwindcssAnimate from 'tailwindcss-animate';
import plugin from 'tailwindcss/plugin';
import type { CSSRuleObject } from 'tailwindcss/types/config';
import ColorProcessor from "./property-processors/colors";
import BoxShadowProcessor from "./property-processors/boxShadows";
import {PropertyProcessor} from "./property-processors/base";

interface ConfigProcessor {
    process(userConfig: UserConfig): TailwindConfig;
}
const pxToRem = (px: number, base: number = 16) => `${px / base}rem`;

export class Ds3ConfigProcessor implements ConfigProcessor {
    private processors: Map<string, PropertyProcessor<any, any>>;

    constructor() {
        this.processors = new Map([
            ['colors', new ColorProcessor()],
            ['boxShadow', new BoxShadowProcessor()],
            // ['spacing', new SpacingProcessor()]
        ]);
    }

    private generateThemes(config: UserConfig): ConfigThemes {
        const { themes } = config;
        if (!themes) return {};

        const processedThemes: ConfigThemes = {};

        Object.entries(themes).forEach(([themeName, theme]) => {
            const processedTheme = {};
            this.processors.entries().forEach(([propertyName, PropertyProcessor]) => {
                processedTheme[propertyName] = PropertyProcessor.process(theme[propertyName]);
            });
            processedThemes[themeName] = processedTheme as ConfigTheme;
        });

        return processedThemes;
    }

    private defineCssVars(themes: ConfigThemes) {
        return plugin(({addBase}) => {
            const vars: Record<string, CssVariableRecord> = {};

            Object.entries(themes).forEach(([themeName, theme]) => {
                const themeClassPrefix = themeName === DEFAULT_THEME ? '' : `.${themeName}`;

                this.processors.entries().forEach(([propertyName, PropertyProcessor]) => {
                    const newVars = PropertyProcessor.generateCssVars(theme[propertyName]);
                    // TODO: Account for mode agnostic settings
                    Object.entries(newVars).forEach(([key, value]) => {
                        const namespace = `${themeClassPrefix}${key}`;
                        if (!!namespace) {
                            vars[namespace] = value;
                        } else {
                            Object.assign(vars, value);
                        }
                    });
                });
            });

            // Convert the vars record into a CSSRuleObject
            const cssRules: CSSRuleObject = Object.entries(vars).reduce((acc, [selector, variables]) => ({
                ...acc,
                [selector]: variables
            }), {});

            addBase(cssRules);
        });
    }
    process(userConfig: UserConfig): TailwindConfig {
        // Merge with defaults
        // TODO: Should defaults be defined in the property processors themselves?
        const blueprint = _.merge(defaultConfig, userConfig || {});

        // Run process foreach property for each theme in userConfig
        const config = {
            blueprint,
            themes: this.generateThemes(blueprint),
        }

        // Generate the CSS Vars (creating the tailwind plugin)
        const ds3BaseStylesPlugin = this.defineCssVars(config.themes);

        // Generate and return the TailwindConfig
        const extensions = {
            spacing: {
                0: '0rem',
                '0.5': '0.125rem',
                1: '0.25rem',
                '1.5': '0.375rem',
                2: '0.5rem',
                '2.5': '0.625rem',
                3: '0.75rem',
                '3.5': '0.875rem',
                4: '1rem',
                5: '1.25rem',
                6: '1.5rem',
                7: '1.75rem',
                8: '2rem',
                10: '2.5rem',
                12: '3rem',
                14: '3.5rem',
                16: '4rem',
                18: '4.5rem',
                20: '5rem',
                24: '6rem',
                28: '7rem',
                32: '8rem',
                36: '9rem',
                40: '10rem',
            },
            borderRadius: {
                0: '0',
                1: pxToRem(2),
                2: pxToRem(4),
                3: pxToRem(6),
                4: pxToRem(8),
                5: pxToRem(10),
                6: pxToRem(12),
                7: pxToRem(14),
                8: pxToRem(16),
                'full': '9999px',
            },
            fontFamily: {
                inter: ['"Inter"', 'sans-serif'],
                roboto: ['"Roboto"', 'sans-serif'],
                robotoCondensed: ['"Roboto Condensed"', 'sans-serif'],
                robotoSlab: ['"Roboto Slab"', 'serif'],
                libreFranklin: ['"Libre Franklin"', 'sans-serif'],
            },
            fontWeight: {
                light: '300',
                regular: '400',
                medium: '500',
                bold: '700',
            },
            lineHeight: {
                'tight': '1.25',
                'normal': '1.5',
                'loose': '2',
            },
            fontSize: {
                // font
                2: '0.5rem',
                '2.5': '0.625rem',
                3: '0.75rem',
                '3.5': '0.875rem',
                4: '1rem',
                '4.5': '1.125rem',
                5: '1.25rem',
                '5.5': '1.375rem',
                6: '1.5rem',
                7: '1.75rem',
                8: '2rem',
                10: '2.5rem',
                12: '3rem',
                14: '3.5rem',
                16: '4rem',

                // text
                'xl': ['1.25rem', { lineHeight: '1.875rem', fontWeight: '400' }],
                'lg': ['1.125rem', { lineHeight: '1.6875rem', fontWeight: '400' }],
                'base': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],
                'sm': ['0.875rem', { lineHeight: '1.3125rem', fontWeight: '400' }],
                'xs': ['0.75rem', { lineHeight: '1.125rem', fontWeight: '400' }],

                // heading
                'h1': ['4rem', { lineHeight: '5rem', fontWeight: '700' }],
                'h2': ['3rem', { lineHeight: '3.75rem', fontWeight: '700' }],
                'h3': ['2rem', { lineHeight: '2.5rem', fontWeight: '700' }],
                'h4': ['1.75rem', { lineHeight: '2.1875rem', fontWeight: '700' }],
                'h5': ['1.5rem', { lineHeight: '1.875rem', fontWeight: '700' }],
                'h6': ['1.25rem', { lineHeight: '1.5625rem', fontWeight: '700' }],
            },
        };

        this.processors.entries().forEach(([propertyName, PropertyProcessor]) => {
            Object.assign(extensions, { [propertyName]: PropertyProcessor.generateTailwindConfig(config.themes) });
        });

        return {
            darkMode: 'class',
            content: [],
            presets: [
                rnrPreset,
            ],
            plugins: [
                ds3BaseStylesPlugin,
                tailwindcssAnimate,
            ],
            theme: {
                extend: extensions
            },
            safelist: [
                ...Object.values(COLOR_MODES),
                ...Object.keys(config.themes),
            ],
        }
    }
}