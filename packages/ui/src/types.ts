import * as React from 'react';
import { NativeSyntheticEvent, GestureResponderEvent, TextInputFocusEventData, TargetedEvent } from 'react-native';

// Web Events
export type WebClickEvent = React.MouseEvent<HTMLButtonElement>;
export type WebFocusEvent = React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement>;
export type WebChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

// Native Events
export type NativePressEvent = GestureResponderEvent;
export type NativeFocusEvent = NativeSyntheticEvent<TargetedEvent>;
export type NativeChangeEvent = NativeSyntheticEvent<TextInputFocusEventData>;