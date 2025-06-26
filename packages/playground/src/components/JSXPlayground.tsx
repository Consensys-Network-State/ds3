import React, { useState, useCallback } from "react";
import { ScrollView } from "react-native";
import { 
  Text, 
  Button, 
  Icon, 
  Highlight, 
  Input, 
  View, 
  IconButton, 
  Textarea, 
  Checkbox,
  Switch,
  Spinner,
  Field,
  InputField,
  CheckboxField,
  SwitchField,
  Alert,
  AlertDescription
} from "@consensys/ds3";
import {
  BookOpen,
  Heart,
  Star,
  Zap,
  Settings,
  RotateCcw,
  Edit3,
  Figma,
  LoaderPinwheel,
  Loader,
  Search,
  Eye,
  Mail,
  Lock,
  Minus,
  Check,
  X,
  LoaderCircle,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  AlertTriangle,
  User,
  ChevronRight,
  Shield,
  SearchCode
} from "lucide-react-native";
import { useForm, Controller } from 'react-hook-form';
import { LivePreview } from "./LivePreview";
import { HighlightInput } from "./HighlightInput";
import { ReactHookForm } from "./ReactHookForm";
import { codeExamples } from "../data";

const defaultCode = { category: "design", subcategory: "colors", example: "semantic-colors" };

// Generic checkbox state manager
const useCheckboxState = () => {
  const [checkboxStates, setCheckboxStates] = useState<Record<string, boolean>>({});

  const getCheckboxState = (key: string, defaultValue = false) => {
    return checkboxStates[key] ?? defaultValue;
  };

  const setCheckboxState = (key: string, checked: boolean) => {
    setCheckboxStates(prev => ({ ...prev, [key]: checked }));
  };

  const createCheckboxHandler = (key: string) => (checked: boolean) => {
    setCheckboxState(key, checked);
  };

  const createParentChildHandler = (parentKey: string, childKeys: string[]) => (checked: boolean) => {
    const newStates = childKeys.reduce((acc, childKey) => ({
      ...acc,
      [childKey]: checked
    }), {});
    setCheckboxStates(prev => ({ ...prev, ...newStates }));
  };

  const getParentChildState = (childKeys: string[]) => {
    const allChecked = childKeys.every(key => checkboxStates[key]);
    const someChecked = childKeys.some(key => checkboxStates[key]);
    return {
      checked: allChecked,
      indeterminate: someChecked && !allChecked
    };
  };

  return {
    getCheckboxState,
    setCheckboxState,
    createCheckboxHandler,
    createParentChildHandler,
    getParentChildState
  };
};

// Generic switch state manager
const useSwitchState = () => {
  const [switchStates, setSwitchStates] = useState<Record<string, boolean>>({});

  const getSwitchState = (key: string, defaultValue = false) => {
    return switchStates[key] ?? defaultValue;
  };

  const setSwitchState = (key: string, checked: boolean) => {
    setSwitchStates(prev => ({ ...prev, [key]: checked }));
  };

  const createSwitchHandler = (key: string) => (checked: boolean) => {
    setSwitchState(key, checked);
  };

  return {
    getSwitchState,
    setSwitchState,
    createSwitchHandler
  };
};

export const Playground = () => {
  const [selectedCategory, setSelectedCategory] = useState(defaultCode.category);
  const [selectedSubcategory, setSelectedSubcategory] = useState(defaultCode.subcategory);
  const [selectedExample, setSelectedExample] = useState(defaultCode.example);
  const [customJSX, setCustomJSX] = useState("");
  const [isDirectEditing, setIsDirectEditing] = useState(false);
  const [showCodeEditor, setShowCodeEditor] = useState(false);

  // Create checkbox state manager
  const checkboxState = useCheckboxState();

  // Create switch state manager
  const switchState = useSwitchState();

  const resetCode = useCallback(() => {
    setSelectedCategory(defaultCode.category);
    setSelectedSubcategory(defaultCode.subcategory);
    setSelectedExample(defaultCode.example);
    setCustomJSX("");
    setIsDirectEditing(false);
  }, []);

  const currentJSX = isDirectEditing 
    ? customJSX 
    : (() => {
        const category = codeExamples[selectedCategory as keyof typeof codeExamples];
        if (!category) return "";
        
        // Handle hierarchical structure for fields, design, and utils
        if ((selectedCategory === "fields" || selectedCategory === "design" || selectedCategory === "utils") && 'examples' in category) {
          const hierarchicalCategory = category as { examples: Record<string, { examples: Record<string, { jsx: string }> }> };
          const subcategory = hierarchicalCategory.examples[selectedSubcategory];
          if (!subcategory) return "";
          const example = subcategory.examples[selectedExample];
          return example?.jsx || "";
        }
        
        // Handle flat structure for other categories
        const example = category[selectedExample as keyof typeof category] as { jsx: string } | undefined;
        return example?.jsx || "";
      })();

  // Scope for the LivePreview
  const scope = {
    Button, Text, Icon, View, React, Input, IconButton, Textarea, Checkbox, Switch, Spinner, Field, InputField, CheckboxField, SwitchField, Alert, AlertDescription, Highlight, ScrollView,
    BookOpen, Heart, Star, Zap, Settings, RotateCcw, Edit3, Figma, LoaderPinwheel, Loader, Search, Eye, Mail, Lock,
    Minus, Check, X, LoaderCircle, RefreshCw, AlertCircle, CheckCircle, AlertTriangle, User, ChevronRight, Shield,
    // React Hook Form
    useForm, Controller,
    // Form Components
    ReactHookForm,
    // Checkbox state management
    checkboxState,
    // Helper functions for checkbox examples
    getCheckboxState: checkboxState.getCheckboxState,
    setCheckboxState: checkboxState.setCheckboxState,
    createCheckboxHandler: checkboxState.createCheckboxHandler,
    createParentChildHandler: checkboxState.createParentChildHandler,
    getParentChildState: checkboxState.getParentChildState,
    // Switch state management
    switchState,
    // Helper functions for switch examples
    getSwitchState: switchState.getSwitchState,
    setSwitchState: switchState.setSwitchState,
    createSwitchHandler: switchState.createSwitchHandler,
  };

  // Get available subcategories for the selected category
  const getSubcategories = () => {
    const category = codeExamples[selectedCategory as keyof typeof codeExamples];
    if ((selectedCategory === "fields" || selectedCategory === "design" || selectedCategory === "utils") && 'examples' in category) {
      const hierarchicalCategory = category as { examples: Record<string, { name: string; examples?: Record<string, { name: string }> }> };
      return Object.entries(hierarchicalCategory.examples).map(([key, subcategory]) => ({
        key,
        name: subcategory.name
      }));
    }
    return [];
  };

  // Get available examples for the selected category/subcategory
  const getExamples = () => {
    const category = codeExamples[selectedCategory as keyof typeof codeExamples];
    if ((selectedCategory === "fields" || selectedCategory === "design" || selectedCategory === "utils") && 'examples' in category) {
      const hierarchicalCategory = category as { examples: Record<string, { examples: Record<string, { name: string }> }> };
      const subcategory = hierarchicalCategory.examples[selectedSubcategory];
      if (subcategory?.examples) {
        return Object.entries(subcategory.examples).map(([key, example]) => ({
          key,
          name: example.name
        }));
      }
    } else {
      return Object.entries(category).map(([key, example]) => ({
        key,
        name: (example as { name: string }).name
      }));
    }
    return [];
  };

  return (
    <View className="w-full">
      <View className={`w-full mx-auto ${showCodeEditor ? 'flex-row gap-6 max-w-[90rem]' : 'max-w-5xl'}`}>
        {/* Left Pane */}
        <View className={showCodeEditor ? 'flex-1' : 'w-full'}>
          {/* Component Categories */}
          <View className="mb-4">
            <View className="flex flex-row items-center justify-between mb-3">
              <Text size="base" weight="semibold">
                Component Categories:
              </Text>
              <View className="flex flex-row gap-2">
                <Button
                  variant="ghost"
                  color="neutral"
                  size="sm"
                  onPress={resetCode}
                >
                  <Button.Icon icon={RotateCcw} />
                  <Button.Text>Reset</Button.Text>
                </Button>

                <Button
                  variant="ghost"
                  color="neutral"
                  size="sm"
                  onPress={() => setShowCodeEditor(!showCodeEditor)}
                >
                  <Button.Icon icon={showCodeEditor ? X : SearchCode} />
                  <Button.Text>{showCodeEditor ? "Hide Code" : "Inspect Code"}</Button.Text>
                </Button>
              </View>
            </View>
            
            {/* Category Selection */}
            <View className="bg-neutral-2 rounded-lg border border-neutral-6 overflow-hidden">
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View className="flex flex-row gap-2 p-2">
                  {Object.entries(codeExamples).map(([key, category]) => (
                    <Button
                      key={key}
                      variant={selectedCategory === key ? "soft" : "ghost"}
                      color="neutral"
                      size="sm"
                      onPress={() => {
                        setSelectedCategory(key);
                        if (key === "fields") {
                          setSelectedSubcategory("field");
                          setSelectedExample("basic");
                        } else if (key === "design") {
                          setSelectedSubcategory("colors");
                          setSelectedExample("semantic-colors");
                        } else if (key === "utils") {
                          setSelectedSubcategory("copy");
                          setSelectedExample("input");
                        } else {
                          setSelectedExample(Object.keys(category)[0]);
                        }
                        setIsDirectEditing(false);
                      }}
                    >
                      <Button.Text>{key.charAt(0).toUpperCase() + key.slice(1)}</Button.Text>
                    </Button>
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>

          {/* Subcategory Selection (for fields, design, and utils) */}
          {(selectedCategory === "fields" || selectedCategory === "design" || selectedCategory === "utils") && (
            <View className="mb-4">
              <Text size="base" weight="semibold" className="mb-2">
                {selectedCategory === "fields" ? "Field Types:" : selectedCategory === "design" ? "Design Categories:" : "Utility Categories:"}
              </Text>
              <View className="bg-neutral-2 rounded-lg border border-neutral-6 overflow-hidden">
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View className="flex flex-row gap-2 p-2">
                    {getSubcategories().map(({ key, name }) => (
                      <Button
                        key={key}
                        variant={selectedSubcategory === key ? "soft" : "ghost"}
                        color="neutral"
                        size="sm"
                        onPress={() => {
                          setSelectedSubcategory(key);
                          const hierarchicalCategory = codeExamples[selectedCategory as keyof typeof codeExamples] as { examples: Record<string, { examples: Record<string, { name: string }> }> };
                          const subcategory = hierarchicalCategory.examples[key];
                          setSelectedExample(Object.keys(subcategory.examples)[0]);
                          setIsDirectEditing(false);
                        }}
                      >
                        <Button.Text>{name}</Button.Text>
                      </Button>
                    ))}
                  </View>
                </ScrollView>
              </View>
            </View>
          )}

          {/* Example Selection */}
          <View className="mb-4">
            <Text size="base" weight="semibold" className="mb-2">
              {(selectedCategory === "fields" || selectedCategory === "design" || selectedCategory === "utils")
                ? `${getSubcategories().find(s => s.key === selectedSubcategory)?.name} Examples:`
                : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Examples:`
              }
            </Text>
            
            {/* Example Selection */}
            <View className="bg-neutral-2 rounded-lg border border-neutral-6 overflow-hidden">
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View className="flex flex-row gap-2 p-2">
                  {getExamples().map(({ key, name }) => (
                    <Button
                      key={key}
                      variant={selectedExample === key && !isDirectEditing ? "soft" : "ghost"}
                      color="neutral"
                      size="sm"
                      onPress={() => {
                        setSelectedExample(key);
                        setIsDirectEditing(false);
                      }}
                    >
                      <Button.Text>{name}</Button.Text>
                    </Button>
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>

          {/* Live Preview */}
          <View className="mb-4">
            <Text size="base" weight="semibold" className="mb-2">
              Live Preview:
            </Text>
            <LivePreview 
              code={currentJSX} 
              scope={scope}
            />
          </View>

          {/* Controls */}
          <View className="mb-4">
            <View className="flex flex-row items-center justify-end mb-3 gap-3">
            
            </View>
          </View>
        </View>

        {/* Right Pane */}
        {showCodeEditor && (
          <View className="flex-1">
             <Text size="base" weight="semibold" className="mb-2">
              JSX Code
            </Text>
            <HighlightInput 
              value={currentJSX}
              onChangeText={(text: string) => {
                setCustomJSX(text);
                setIsDirectEditing(true);
              }}
              placeholder="Enter JSX code here..."
              numberOfLines={6}
              className="min-h-[150px] bg-neutral-2 rounded-lg border border-neutral-6 h-full"
            />
          </View>
        )}
      </View>
    </View>
  );
} 