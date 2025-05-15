import * as React from 'react';
import { NativeSyntheticEvent, GestureResponderEvent, TextInputFocusEventData } from 'react-native';

// Web Events
export type WebClickEvent = React.MouseEvent<HTMLButtonElement>;
export type WebFocusEvent = React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement>;
export type WebChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

// Native Events
export type NativePressEvent = NativeSyntheticEvent<GestureResponderEvent>;
export type NativeFocusEvent = NativeSyntheticEvent<TextInputFocusEventData>;
export type NativeChangeEvent = NativeSyntheticEvent<TextInputFocusEventData>;