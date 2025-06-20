export const copyExamples = {
  "input": {
    name: "Input Clipboard",
    jsx: `<View className="flex flex-row flex-wrap gap-4">
  <InputClipboard variant="soft" color="primary" value="Click to copy this text" />
  <InputClipboard variant="outline" color="secondary" value="Click to copy this text" />
  <InputClipboard variant="underline" color="success" value="Click to copy this text" />
  <InputClipboard variant="ghost" color="error" value="Click to copy this text" />
</View>`
  },
  "textarea": {
    name: "TextArea Clipboard",
    jsx: `<InputClipboard 
  variant="soft" 
  color="primary" 
  multiline 
  numberOfLines={4} 
  value="This is a read only text area with multiple lines of content. You can select and copy this text, but you cannot edit it." 
/>`
  }
}; 