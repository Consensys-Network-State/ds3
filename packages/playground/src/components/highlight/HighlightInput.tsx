import React, { useState } from "react";
import { TextInput, Platform } from "react-native";
import { View } from "@consensys/ds3";
import { Highlight } from "./Highlight";

// Custom Syntax Highlighted Input Component
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
  className = ""
}) => {
  const [focused, setFocused] = useState(false);
  const [selection, setSelection] = useState({ start: 0, end: 0 });
  const [cursorVisible, setCursorVisible] = useState(true);
  const inputRef = React.useRef<TextInput>(null);

  // Blinking cursor effect
  React.useEffect(() => {
    if (!focused) return;
    
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500); // Blink every 500ms (faster than default pulse)
    
    return () => clearInterval(interval);
  }, [focused]);

  // Handle tab indentation
  const handleKeyPress = (event: any) => {
    if (event.nativeEvent.key === 'Tab') {
      event.preventDefault();
      
      const lines = value.split('\n');
      const { start, end } = selection;
      
      // Find start line and position within that line
      let startLine = 0;
      let startPos = 0;
      
      for (let i = 0; i < lines.length; i++) {
        const lineLength = lines[i].length;
        if (start <= startPos + lineLength) {
          startLine = i;
          break;
        }
        startPos += lineLength + 1; // +1 for newline
      }
      
      // Find end line
      let endLine = startLine;
      let endPos = startPos;
      
      for (let i = startLine; i < lines.length; i++) {
        const lineLength = lines[i].length;
        if (end <= endPos + lineLength) {
          endLine = i;
          break;
        }
        endPos += lineLength + 1; // +1 for newline
      }
      
      const startLineStartPos = startPos;
      const positionInStartLine = start - startLineStartPos;
      
      if (event.nativeEvent.shiftKey) {
        // Shift+Tab: Outdent
        let totalOutdented = 0;
        
        if (start === end) {
          // Single cursor: outdent current line
          const currentLineText = lines[startLine];
          if (currentLineText.startsWith('  ')) {
            lines[startLine] = currentLineText.substring(2);
            totalOutdented = 2;
          }
        } else {
          // Multiple lines selected: outdent all selected lines
          for (let i = startLine; i <= endLine; i++) {
            const lineText = lines[i];
            if (lineText.startsWith('  ')) {
              lines[i] = lineText.substring(2);
              totalOutdented += 2;
            }
          }
        }
        
        if (totalOutdented > 0) {
          const newValue = lines.join('\n');
          const newStart = Math.max(0, start - (start === end ? totalOutdented : 2));
          const newEnd = Math.max(0, end - totalOutdented);
          
          onChangeText(newValue);
          setSelection({ start: newStart, end: newEnd });
        }
      } else {
        // Tab: Indent
        const spaces = '  '; // 2 spaces for indentation
        
        if (start === end) {
          // Single cursor: insert spaces at cursor position
          const currentLineText = lines[startLine];
          const newLineText = currentLineText.slice(0, positionInStartLine) + spaces + currentLineText.slice(positionInStartLine);
          lines[startLine] = newLineText;
          
          const newValue = lines.join('\n');
          const newStart = start + spaces.length;
          const newEnd = newStart;
          
          onChangeText(newValue);
          setSelection({ start: newStart, end: newEnd });
        } else {
          // Multiple lines selected: indent all selected lines
          for (let i = startLine; i <= endLine; i++) {
            lines[i] = spaces + lines[i];
          }
          
          const newValue = lines.join('\n');
          const newStart = start + spaces.length;
          const newEnd = end + (endLine - startLine + 1) * spaces.length;
          
          onChangeText(newValue);
          setSelection({ start: newStart, end: newEnd });
        }
      }
    }
  };

  // Font metrics - match exactly with the TextInput
  const fontSize = 14;
  const lineHeight = 20;
  const fontFamily = 'monospace';
  const verticalPadding = 16; // matches padding: 16
  
  // Calculate actual height based on content
  const lines = value.split('\n');
  const contentHeight = Math.max(
    lines.length * lineHeight + (verticalPadding * 2), // Height based on actual content
    numberOfLines * lineHeight + (verticalPadding * 2)  // Minimum height based on numberOfLines
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
      style={{ fontFamily, fontSize, lineHeight }}
    />
  ), [highlightCode, fontFamily, fontSize, lineHeight]);

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
    const charWidth = 8.4; // Approximate character width - fine-tuned
    const x = verticalPadding + (cursorOffset * charWidth);
    const y = verticalPadding + (cursorLine * lineHeight);
    
    return {
      line: cursorLine,
      offset: cursorOffset,
      x,
      y,
    };
  };

  const cursorPos = getCursorPosition();

  return (
    <View className={`relative overflow-hidden ${className}`} style={{ height: contentHeight, overflow: 'hidden' }}>
      {/* Syntax Highlighted Background (static) */}
      <View 
        className="absolute inset-0"
        style={{ 
          padding: verticalPadding,
          overflow: 'hidden',
        }}
      >
        {highlightedCode}
      </View>
      
      {/* Custom Cursor Indicator */}
      {focused && cursorPos && Platform.OS !== 'ios' && cursorVisible && (
        <View 
          className="absolute bg-neutral-12"
          style={{
            width: 1,
            height: lineHeight, // Match the exact line height
            left: cursorPos.x,
            top: cursorPos.y,
            zIndex: 2,
          }}
        />
      )}
      
      {/* Editable Input (on top, with proper positioning) */}
      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        multiline={multiline}
        style={{ 
          textAlignVertical: multiline ? 'top' : 'center',
          fontFamily,
          fontSize,
          lineHeight,
          padding: verticalPadding,
          backgroundColor: 'transparent',
          position: 'relative',
          zIndex: 1,
          height: contentHeight, // Height matches the actual content
          overflow: 'hidden',
        }}
        className="flex-1 outline-none text-transparent"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onSelectionChange={(event) => {
          const { start, end } = event.nativeEvent.selection;
          setSelection({ start, end });
        }}
        onKeyPress={handleKeyPress}
        scrollEnabled={false}
      />
    </View>
  );
};