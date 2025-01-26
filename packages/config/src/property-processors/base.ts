import {ConfigThemes, CssVariableRecord} from "../types";

export interface TailwindPropertyConfig {
    [key: string]: Record<string, any>;
}

export interface PropertyProcessor<C, P> {
    readonly isModeDependent: boolean; // Make it a property instead of a function
    process(value: C): P;
    generateCssVars(processed: P): Record<string, CssVariableRecord>;
    generateTailwindConfig(processed: ConfigThemes): TailwindPropertyConfig;
}