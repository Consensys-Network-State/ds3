import React, { useState, useRef } from "react";
import { Platform, ScrollView } from "react-native";
import { View, Input, Text, Button } from "@consensys/ds3";
import { Highlight } from "./Highlight";

export interface HighlightInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  multiline?: boolean;
  numberOfLines?: number;
  className?: string;
}

export const HighlightInput: React.FC<HighlightInputProps> = ({
  value,
  onChangeText,
  placeholder,
  multiline = true,
  numberOfLines = 6,
  className = "",
  ...otherProps
}) => {
  const [focused, setFocused] = useState(false);
  const [selection, setSelection] = useState({ start: 0, end: 0 });
  const [cursorVisible, setCursorVisible] = useState(true);
  const inputRef = React.useRef<any>(null);
  const highlightScrollRef = useRef<ScrollView>(null);
  const [scrollY, setScrollY] = useState(0);

  // Blinking cursor effect
  React.useEffect(() => {
    if (!focused) return;
    
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500); // Blink every 500ms (faster than default pulse)
    
    return () => clearInterval(interval);
  }, [focused]);

  // Hardcoded platform-specific values
  const inputFontFamily = 'monospace';
  const inputFontSize = 16;
  const inputLineHeight = 24;
  const inputPadding = Platform.OS === 'ios' ? 12 : 13;
  const inputPaddingTop = Platform.OS === 'ios' ? 8 : inputPadding;
  const inputPaddingLeft = Platform.OS === 'ios' ? 10 : inputPadding;

  const highlightFontFamily = 'monospace';
  const highlightFontSize = 16;
  const highlightLineHeight = 24;
  const highlightPadding = Platform.OS === 'ios' ? 12 : 14;

  // Calculate actual height based on content
  const lines = value.split('\n');
  const contentHeight = Math.max(
    lines.length * inputLineHeight + (inputPadding * 2),
    numberOfLines * inputLineHeight + (inputPadding * 2)
  );

  // Memoize the highlight code to prevent unnecessary re-renders
  const highlightCode = React.useMemo(() => {
    return value || placeholder || "";
  }, [value, placeholder]);

  // Memoize the Highlight component to prevent re-rendering
  const highlightedCode = React.useMemo(() => (
    <Highlight 
      code={highlightCode}
      language="tsx"
      style={{ fontFamily: highlightFontFamily, fontSize: highlightFontSize, lineHeight: highlightLineHeight }}
    />
  ), [highlightCode]);

  // Calculate cursor position more accurately with proper line calculations
  const getCursorPosition = () => {
    if (!focused) return null;
    
    let currentPos = 0;
    let cursorLine = 0;
    let cursorOffset = 0;
    
    // Find which line the cursor is on
    for (let i = 0; i < lines.length; i++) {
      const lineLength = lines[i].length;
      if (selection.start <= currentPos + lineLength) {
        cursorLine = i;
        cursorOffset = selection.start - currentPos;
        break;
      }
      currentPos += lineLength + 1; // +1 for newline
    }
    
    // Handle cursor at the very end
    if (cursorLine === 0 && cursorOffset === 0 && selection.start > 0) {
      cursorLine = lines.length - 1;
      cursorOffset = lines[lines.length - 1]?.length || 0;
    }
    
    // Calculate exact position
    const CHAR_WIDTH_FACTOR = 0.605; // Tune this if needed for your monospace font
    const charWidth = inputFontSize * CHAR_WIDTH_FACTOR;
    const x = inputPadding + (cursorOffset * charWidth);
    const y = inputPadding + (cursorLine * inputLineHeight);
    
    return {
      line: cursorLine,
      offset: cursorOffset,
      x,
      y,
    };
  };

  const cursorPos = getCursorPosition();

  const handleInputScroll = (event: any) => {
    let scrollY = 0;
    if (Platform.OS === 'web') {
      scrollY = event.target?.scrollTop ?? 0;
    } else {
      scrollY = event.nativeEvent.contentOffset.y;
    }
    setScrollY(scrollY);
    highlightScrollRef.current?.scrollTo({ y: scrollY, animated: false });
  };

  return (
    <View>
      <View className={`relative overflow-hidden ${className}`} style={{ height: contentHeight, overflow: 'hidden' }}>
        {/* Syntax Highlighted Background (static, scrolls with input) */}
        <ScrollView
          ref={highlightScrollRef}
          scrollEnabled={false}
          style={{
            position: 'absolute',
            inset: 0,
            height: contentHeight,
            width: '100%',
            zIndex: 0,
          }}
          contentContainerStyle={{
            padding: highlightPadding,
            minHeight: contentHeight,
          }}
        >
          {highlightedCode}
        </ScrollView>
        {/* Custom Cursor Indicator */}
        {focused && cursorPos && Platform.OS !== 'ios' && cursorVisible && (
          <View 
            className="absolute bg-neutral-12"
            style={{
              width: 1,
              height: inputLineHeight * 0.75,
              left: cursorPos.x,
              top: cursorPos.y + inputLineHeight * 0.125 - (Platform.OS === 'web' ? scrollY : 0),
              zIndex: 2,
            }}
          />
        )}
        {/* Editable Input (on top, with proper positioning) */}
        <Input
          ref={inputRef}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          multiline={multiline}
          numberOfLines={numberOfLines}
          style={{ 
            fontFamily: inputFontFamily,
            fontSize: inputFontSize,
            lineHeight: inputLineHeight,
            padding: inputPadding,
            paddingTop: inputPaddingTop,
            paddingLeft: inputPaddingLeft,
            backgroundColor: 'transparent',
            color: 'transparent',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            height: contentHeight,
          }}
          className="flex-1 text-transparent"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onSelectionChange={(event) => {
            const { start, end } = event.nativeEvent.selection;
            setSelection({ start, end });
          }}
          onScroll={handleInputScroll}
          scrollEnabled={true}
          autoCorrect={false}
          autoCapitalize="none"
          spellCheck={false}
          {...otherProps}
        />
      </View>
    </View>
  );
};