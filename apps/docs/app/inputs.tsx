import * as React from 'react';
import { Text, Input, Textarea } from "@consensys/ds3/src";
import { View, ScrollView } from "react-native";
import { Search, Eye, Mail, Lock, Loader, LoaderPinwheel, Figma } from 'lucide-react-native';
import { useState } from "react";
import { Switch } from "@consensys/ds3/src";
import type { WebFocusEvent, NativeFocusEvent } from "@consensys/ds3/src";
import type { SharedInputProps, InputRootProps } from "@consensys/ds3/src/components/input";

const InputClickToLoad = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Input
      variant="soft"
      color="warning"
      loading={isLoading}
      onFocus={() => setIsLoading(true)}
      onBlur={() => setIsLoading(false)}
      className="flex-1 min-w-[250px]"
      placeholder={isLoading ? "Loading..." : "Click to load"}
    >
      <Input.Spinner icon={Search} />
      <Input.Field />
    </Input>
  );
};

type InputVariant = 'soft' | 'outline' | 'underline' | 'ghost';
type InputColor = 'neutral' | 'primary' | 'secondary' | 'error' | 'warning' | 'success';

type InputSize = 'sm' | 'md' | 'lg';

type InputSizeOption = {
  size: InputSize;
  label: string;
};

const inputSizes: InputSizeOption[] = [
  { size: 'lg', label: 'Large' },
  { size: 'md', label: 'Medium' },
  { size: 'sm', label: 'Small' }
] as const;

const InputEvents = () => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [useWebEvents, setUseWebEvents] = useState(false);
  const [eventInfo, setEventInfo] = useState('No events yet');

  const baseProps: Partial<InputRootProps> = {
    variant: 'outline',
    color: isFocused ? 'secondary' : 'primary',
    placeholder: "Type something...",
    className: isFocused ? "scale-105" : "scale-100",
    value: inputValue,
    onFocus: () => {
      setIsFocused(true);
      setEventInfo(useWebEvents ? 'Web Focus' : 'Native Focus');
    },
    onBlur: () => {
      setIsFocused(false);
      setEventInfo(useWebEvents ? 'Web Blur' : 'Native Blur');
    }
  };

  const props: InputRootProps = {
    ...baseProps,
    ...(useWebEvents
      ? {
          onChange: (e: any) => {
            setInputValue(e.target.value);
            setEventInfo(`Web Change: ${e.target.value}`);
          }
        }
      : {
          onChangeText: (text: string) => {
            setInputValue(text);
            setEventInfo(`Native Change: ${text}`);
          }
        })
  } as InputRootProps;

  return (
    <View className="flex flex-col gap-2">
      <View className="flex flex-row items-center gap-2">
        <Text className="text-sm text-neutral-11">Use Web Events:</Text>
        <Switch
          checked={useWebEvents}
          onCheckedChange={setUseWebEvents}
          disabled={false}
          variant="soft"
          color="secondary"
        />
      </View>
      <Input {...props}>
        <Input.Icon icon={isFocused ? Eye : Search} />
        <Input.Field />
      </Input>
      <Text className="text-sm text-neutral-11">
        Value: {inputValue}
      </Text>
      <Text className="text-sm text-neutral-11">
        Event: {eventInfo}
      </Text>
    </View>
  );
};

const InputFocus = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [useWebEvents, setUseWebEvents] = useState(false);
  const [eventInfo, setEventInfo] = useState('No focus events yet');

  // Create shared props that work for both platforms
  const sharedProps: SharedInputProps = {
    placeholder: 'Focus me...',
    variant: 'outline',
    color: isFocused ? 'secondary' : 'primary',
    onFocus: (event: WebFocusEvent | NativeFocusEvent) => {
      console.log(useWebEvents ? 'Web Focus Event:' : 'Native Focus Event:', event);
      setIsFocused(true);
      setEventInfo(useWebEvents ? 'Web Focus Event' : 'Native Focus Event');
    },
    onBlur: (event: WebFocusEvent | NativeFocusEvent) => {
      console.log(useWebEvents ? 'Web Blur Event:' : 'Native Blur Event:', event);
      setIsFocused(false);
      setEventInfo(useWebEvents ? 'Web Blur Event' : 'Native Blur Event');
    }
  };

  return (
    <View className="flex flex-col gap-2">
      <View className="flex flex-row items-center gap-2">
        <Text className="text-sm text-neutral-11">Use Web Events:</Text>
        <Switch
          checked={useWebEvents}
          onCheckedChange={setUseWebEvents}
          disabled={false}
          variant="soft"
          color="secondary"
        />
      </View>
      <Input 
        {...sharedProps} 
        // {...platformProps}
        className={isFocused ? "scale-105" : "scale-100"}
      >
        <Input.Icon icon={Search} />
        <Input.Field />
      </Input>
      <Text className="text-sm text-neutral-11">{eventInfo}</Text>
    </View>
  );
};

export default function Inputs() {
  const inputVariants: Array<InputVariant> = [
    'soft',
    'outline',
    'underline',
    'ghost'
  ];

  const inputColors: Array<InputColor> = [
    'neutral',
    'primary',
    'secondary',
    'error',
    'warning',
    'success'
  ];

  const iconLayouts = [
    {
      name: 'Start & End Icon',
      render: (variant: InputVariant, color: InputColor) => (
        <Input variant={variant} color={color}  placeholder={variant}>
          <Input.Icon icon={Figma} />
          <Input.Field />
          <Input.Icon icon={Figma} />
        </Input>
      ),
      colors: ['primary', 'secondary', 'success', 'error'] as InputColor[]
    },
    {
      name: 'Start Only Icon',
      render: (variant: InputVariant, color: InputColor) => (
        <Input variant={variant} color={color} placeholder={variant}>
          <Input.Icon icon={Figma} />
          <Input.Field />
        </Input>
      ),
      colors: ['secondary', 'error', 'primary', 'success'] as InputColor[]
    },
    {
      name: 'End Only Icon',
      render: (variant: InputVariant, color: InputColor) => (
        <Input variant={variant} color={color} placeholder={variant}>
          <Input.Field />
          <Input.Icon icon={Figma} />
        </Input>
      ),
      colors: ['success', 'primary', 'error', 'secondary'] as InputColor[]
    }
  ];

  const textLayouts = [
    {
      name: 'Start & End Text',
      render: (variant: InputVariant, color: InputColor) => (
        <Input variant={variant} color={color} placeholder={variant}>
          <Input.Text className="text-sm">*</Input.Text>
          <Input.Field />
          <Input.Text className="text-sm">*</Input.Text>
        </Input>
      ),
      colors: ['primary', 'secondary', 'success', 'error'] as InputColor[]
    },
    {
      name: 'Start Only Text',
      render: (variant: InputVariant, color: InputColor) => (
        <Input variant={variant} color={color} placeholder={variant}>
          <Input.Text className="text-sm">*</Input.Text>
          <Input.Field />
        </Input>
      ),
      colors: ['secondary', 'error', 'primary', 'success'] as InputColor[]
    },
    {
      name: 'End Only Text',
      render: (variant: InputVariant, color: InputColor) => (
        <Input variant={variant} color={color} placeholder={variant}>
          <Input.Field />
          <Input.Text className="text-sm">*</Input.Text>
        </Input>
      ),
      colors: ['success', 'primary', 'error', 'secondary'] as InputColor[]
    }
  ];

  const commonInputExamples = [
    {
      name: 'Search Input',
      render: (variant: InputVariant, color: InputColor) => (
        <Input variant={variant} color={color} placeholder="Search...">
          <Input.Icon icon={Search} />
          <Input.Field />
        </Input>
      )
    },
    {
      name: 'Password Input',
      render: (variant: InputVariant, color: InputColor) => (
        <Input variant={variant} color={color} placeholder="Enter password" secureTextEntry>
          <Input.Icon icon={Lock} />
          <Input.Field />
          <Input.Icon icon={Eye} />
        </Input>
      )
    },
    {
      name: 'Email Input',
      render: (variant: InputVariant, color: InputColor) => (
        <Input variant={variant} color={color} placeholder="Enter email" keyboardType="email-address">
          <Input.Icon icon={Mail} />
          <Input.Field />
        </Input>
      )
    },
    {
      name: 'Currency Input',
      render: (variant: InputVariant, color: InputColor) => (
        <Input variant={variant} color={color} placeholder="0.00" keyboardType="decimal-pad">
          <Input.Text className="text-sm">$</Input.Text>
          <Input.Field />
          <Input.Icon icon={Eye} />
        </Input>
      )
    },
    {
      name: 'Username Input',
      render: (variant: InputVariant, color: InputColor) => (
        <Input variant={variant} color={color} placeholder="username" autoCapitalize="none" autoCorrect={false}>
          <Input.Text className="text-sm">@</Input.Text>
          <Input.Field />
        </Input>
      )
    },
    {
      name: 'Measurement Input',
      render: (variant: InputVariant, color: InputColor) => (
        <Input variant={variant} color={color} placeholder="100" keyboardType="numeric">
          <Input.Icon icon={Search} />
          <Input.Field />
          <Input.Text className="text-sm">cm</Input.Text>
        </Input>
      )
    },
    {
      name: 'Phone Input',
      render: (variant: InputVariant, color: InputColor) => (
        <Input variant={variant} color={color} placeholder="(555) 555-5555" keyboardType="phone-pad">
          <Input.Text className="text-sm">+1</Input.Text>
          <Input.Field />
          <Input.Icon icon={Eye} />
        </Input>
      )
    }
  ];

  const readOnlyExamples = [
    {
      name: 'Input',
      render: (variant: InputVariant, color: InputColor) => (
        <Input
          variant={variant}
          color={color}
          readOnly
          value="Read only value"
          placeholder="This input is read only"
        >
          <Input.Field />
        </Input>
      )
    },
    {
      name: 'Text Area',
      render: (variant: InputVariant, color: InputColor) => (
        <Input
          variant={variant}
          color={color}
          readOnly
          multiline
          numberOfLines={4}
          value="Read only value"
          placeholder="This input is read only"
        >
          <Input.Field />
        </Input>
      )
    },
  ];

  const eventExamples = [
    {
      name: 'Change Events',
      component: InputEvents
    },
    {
      name: 'Focus Events',
      component: InputFocus
    }
  ];

  return (
    <ScrollView className="h-screen bg-primary-1">
      <View className="flex-1 items-center pb-4">
        <View className="w-full max-w-[1200px] px-4 h-full gap-4">
          <Text className="text-h1">Inputs</Text>

          <Text className="text-h2">Variants</Text>
          <View className="flex flex-row flex-wrap gap-4 ">
            {inputVariants.map((variant, index) => (
              <View key={`${variant}-${index}`} className="flex-1 min-w-[250px]">
                <Input variant={variant} placeholder={variant.charAt(0).toUpperCase() + variant.slice(1)}>
                  <Input.Field />
                </Input>
              </View>
            ))}
          </View>

          <Text className="text-h2">Colors</Text>
          {inputColors.map((color) => (
            <View key={color} className="flex flex-col gap-4">
              <Text>{color.charAt(0).toUpperCase() + color.slice(1)}</Text>
              <View className="flex flex-row flex-wrap gap-4">
                {inputVariants.map((variant, index) => (
                  <View key={`${variant}-${index}`} className="flex-1 min-w-[250px]">
                    <Input
                      variant={variant}
                      color={color === 'neutral' ? undefined : color}
                      placeholder={variant.charAt(0).toUpperCase() + variant.slice(1)}
                    >
                      <Input.Field />
                    </Input>
                  </View>
                ))}
              </View>
            </View>
          ))}

          <Text className="text-h2">Accent Colors</Text>
          <View className="flex flex-row flex-wrap gap-4">
            <Input variant="soft" color="neutral" accentColor="primary" placeholder="Neutral to Primary">
              <Input.Field />
            </Input>

            <Input variant="outline" color="primary" accentColor="secondary" placeholder="Primary to Secondary">
              <Input.Field />
            </Input>

            <Input variant="ghost" color="secondary" accentColor="success" placeholder="Secondary to Success">
              <Input.Field />
            </Input>

            <Input variant="underline" color="success" accentColor="error" placeholder="Success to Error">
              <Input.Field />
            </Input>
          </View>

          <Text className="text-h2">Icons</Text>
          {iconLayouts.map(({ name, render, colors }) => (
            <View key={name} className="flex flex-col gap-4">
              <Text>{name}</Text>
              <View className="flex flex-row flex-wrap gap-4">
                {inputVariants.map((variant, index) => (
                  <View key={`${variant}-${index}`} className="flex-1 basis-[calc(25%-12px)] min-w-[200px]">
                    {render(variant, colors[index])}
                  </View>
                ))}
              </View>
            </View>
          ))}

          <Text className="text-h2">Text</Text>
          {textLayouts.map(({ name, render, colors }) => (
            <View key={name} className="flex flex-col gap-4">
              <Text>{name}</Text>
              <View className="flex flex-row flex-wrap gap-4">
                {inputVariants.map((variant, index) => (
                  <View key={`${variant}-${index}`} className="flex-1 basis-[calc(25%-12px)] min-w-[200px]">
                    {render(variant, colors[index])}
                  </View>
                ))}
              </View>
            </View>
          ))}

          <Text className="text-h2">Sizes</Text>
          {inputSizes.map(({ size, label }) => (
            <View key={size} className="flex flex-col gap-4">
              <Text>{label}</Text>
              <View className="flex flex-row flex-wrap gap-4">
                {inputVariants.map((variant, index) => (
                  <View key={`${variant}-${index}-${size}`} className="flex-1 min-w-[250px]">
                    <Input
                      variant={variant}
                      color={inputColors[index] === 'neutral' ? undefined : inputColors[index]}
                      size={size}
                      placeholder={variant.charAt(0).toUpperCase() + variant.slice(1)}
                    >
                      <Input.Icon icon={Figma} />
                      <Input.Field />
                      <Input.Text>*</Input.Text>
                    </Input>
                  </View>
                ))}
              </View>
            </View>
          ))}

          <Text className="text-h2">Loading</Text>
          <View className="flex flex-row flex-wrap gap-4">
            <Input variant="outline" loading className="flex-1 min-w-[250px]" placeholder="Outline">
              <Input.Spinner />
              <Input.Field />
            </Input>

            <Input variant="soft" color="primary" loading className="flex-1 min-w-[250px]" placeholder="Soft">
              <Input.Field />
              <Input.Spinner loadingIcon={Loader} />
            </Input>

            <Input variant="underline" color="secondary" loading className="flex-1 min-w-[250px]" placeholder="Underline">
              <Input.Spinner loadingIcon={LoaderPinwheel} />
              <Input.Field />
            </Input>

            <Input variant="ghost" color="error" loading className="flex-1 min-w-[250px]" placeholder="Ghost" >
              <Input.Field />
              <Input.Spinner />
            </Input>

            <Input variant="outline" color="warning" loading className="flex-1 min-w-[250px]" placeholder="With custom loader">
              <Input.Spinner loadingIcon={Loader} />
              <Input.Field />
            </Input>

            <Input variant="soft" color="success" loading className="flex-1 min-w-[250px]" placeholder="With pinwheel">
              <Input.Field />
              <Input.Spinner loadingIcon={LoaderPinwheel} />
            </Input>

            <Input variant="soft" color="primary" loading disabled className="flex-1 min-w-[250px]" placeholder="Disabled and loading">
              <Input.Spinner />
              <Input.Field />
            </Input>

            <InputClickToLoad />
          </View>

          <Text className="text-h2">Disabled</Text>
          {inputColors.map((color) => (
            <View key={color} className="flex flex-col gap-4">
              <Text>{color.charAt(0).toUpperCase() + color.slice(1)}</Text>
              <View className="flex flex-row flex-wrap gap-4">
                {inputVariants.map((variant, index) => (
                  <View key={`${variant}-${index}`} className="flex-1 min-w-[250px]">
                    <Input
                      variant={variant}
                      color={color === 'neutral' ? undefined : color}
                      disabled
                      placeholder={variant.charAt(0).toUpperCase() + variant.slice(1)}
                    >
                      <Input.Field />
                    </Input>
                  </View>
                ))}
              </View>
            </View>
          ))}

          <Text className="text-h2">TextArea</Text>
          {inputColors.map((color) => (
            <View key={color} className="flex flex-col gap-4">
              <Text>{color.charAt(0).toUpperCase() + color.slice(1)}</Text>
              <View className="flex flex-row flex-wrap gap-4">
                {inputVariants.map((variant) => (
                  <View key={`${variant}-${color}`} className="flex-1 min-w-[250px]">
                    <Textarea
                      placeholder={variant.charAt(0).toUpperCase() + variant.slice(1)}
                      variant={variant}
                      color={color === 'neutral' ? undefined : color}
                    />
                  </View>
                ))}
              </View>
            </View>
          ))}

          <View className="flex flex-row flex-wrap gap-4">
            <View className="flex-1 min-w-[250px]">
              <Textarea loading placeholder="Loading">
                <Input.Spinner />
                <Input.Field />
              </Textarea>
            </View>

            <View className="flex-1 min-w-[250px]">
              <Textarea disabled placeholder="Disabled" />
            </View>

            <View className="flex-1 min-w-[250px]">
              <Textarea placeholder="With icon...">
                <Input.Icon icon={Search} />
                <Input.Field />
              </Textarea>
            </View>

            <View className="flex-1 min-w-[250px]">
              <Textarea numberOfLines={5} placeholder="Custom height" />
            </View>
          </View>

          <Text className="text-h2">Read Only</Text>
          {readOnlyExamples.map(({ name, render }) => (
            <View key={name} className="flex flex-col gap-4">
              <Text>{name}</Text>
              <View className="flex flex-row flex-wrap gap-4">
                {inputVariants.map((variant, index) => (
                  <View key={`${variant}-${index}`} className="flex-1 min-w-[250px]">
                    {name === 'Text Area' ? (
                      <Textarea
                        variant={variant}
                        color={inputColors[index] as InputColor}
                        readOnly
                        value="Read only value"
                        placeholder="This input is read only"
                      />
                    ) : (
                      render(variant, inputColors[index] as InputColor)
                    )}
                  </View>
                ))}
              </View>
            </View>
          ))}

          <Text className="text-h2">Common Examples</Text>
          {commonInputExamples.map(({ name, render }) => (
            <View key={name} className="flex flex-col gap-4">
              <Text>{name}</Text>
              <View className="flex flex-row flex-wrap gap-4">
                {inputVariants.map((variant, index) => (
                  <View key={`${variant}-${index}`} className="flex-1 min-w-[250px]">
                    {render(variant, inputColors[index] as InputColor)}
                  </View>
                ))}
              </View>
            </View>
          ))}

          <Text className="text-h2">Events</Text>
          <View className="flex flex-row flex-wrap gap-4">
            <InputEvents />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}