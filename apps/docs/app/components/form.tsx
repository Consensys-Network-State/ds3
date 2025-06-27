import {
  Button,
  Text,
  InputField,
  RadioGroupField,
  SelectField,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectItem,
  cn,
  SwitchField,
  CheckboxField,
  Alert,
  AlertDescription,
  Option
} from '@consensys/ds3/src';
import { View, ScrollView } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState, useRef } from 'react';

const jobTitles: Option[] = [
  { value: 'software_engineer', label: 'Software Engineer' },
  { value: 'product_manager', label: 'Product Manager' },
  { value: 'designer', label: 'Designer' },
  { value: 'data_scientist', label: 'Data Scientist' },
];

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  jobTitle: Option;
  workPreference: 'remote' | 'hybrid' | 'office';
  officeFrequency?: '1-2' | '3' | 'flexible';
  portfolio: string;
  bio: string;
  newsletter: boolean;
  termsAccepted: boolean;
  availability: boolean;
}

// Default option for empty select fields
const defaultOption: Option = { value: '', label: '' };

type FieldName = keyof FormValues;

const useFieldValidation = (errors: any) => {
  // Use ref to track fields that have had errors
  const fieldsWithPastErrors = useRef<Set<FieldName>>(new Set());

  // Check and record errors
  const hasHadError = (fieldName: FieldName) => {
    if (errors[fieldName]) {
      fieldsWithPastErrors.current.add(fieldName);
      return true;
    }
    return fieldsWithPastErrors.current.has(fieldName);
  };

  return (fieldName: FieldName, value: any) => {
    // Only show valid state if field has had an error in the past
    if (!hasHadError(fieldName)) {
      return false;
    }

    return !!value && !errors[fieldName];
  };
};

export default function EnhancedForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isDirty }
  } = useForm<FormValues>({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      jobTitle: defaultOption,
      workPreference: 'hybrid',
      portfolio: '',
      bio: '',
      newsletter: false,
      termsAccepted: false,
      availability: true
    },
    mode: 'onBlur'
  });

  // Watch values for conditional rendering with non-null assertion
  const watchWorkPreference = watch('workPreference') ?? 'hybrid';

  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
    left: 12,
    right: 12,
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form Data", JSON.stringify(data, null, 2));
      setSubmitted(true);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFieldValid = useFieldValidation(errors);

  return (
    <ScrollView className="h-screen bg-primary-1">
      <View className="flex-1 items-center pb-4">
        <View className="w-full max-w-[1200px] px-4 h-full space-y-6">
          <View className="space-y-2">
            <Text className="text-h1">Form</Text>
            <Text className="text-muted-foreground">A form using react-hook-form</Text>
          </View>

          {submitted && (
            <Alert>
              <AlertDescription>
                Profile submitted successfully! We'll review your application and get back to you soon.
              </AlertDescription>
            </Alert>
          )}

          <Controller
            control={control}
            name="fullName"
            rules={{
              required: 'Full name is required',
              pattern: {
                value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                message: 'Please enter a valid name'
              }
            }}
            render={({ field: { name, value, onChange, ...otherProps} }) => (
              <InputField
                required
                value={value}
                label="Full Name"
                placeholder="John Doe"
                description="Enter your legal full name"
                error={errors?.[name]?.message}
                isValid={isFieldValid(name, value)}
                onChangeText={onChange}
                {...otherProps}
              />
            )}
          />

          <View className="flex flex-row gap-4">
            <View className="flex-1">
              <Controller
                control={control}
                name="email"
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email'
                  }
                }}
                render={({ field: { name, onChange, value, ...otherProps } }) => (
                  <InputField
                    required
                    value={value}
                    label="Email"
                    placeholder="john.doe@example.com"
                    description="Your primary contact email"
                    error={errors?.[name]?.message}
                    isValid={isFieldValid(name, value)}
                    keyboardType="email-address"
                    onChangeText={onChange}
                    {...otherProps}
                  />
                )}
              />
            </View>

            <View className="flex-1">
              <Controller
                control={control}
                name="phone"
                rules={{
                  pattern: {
                    value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4}$/,
                    message: 'Please enter a valid phone number'
                  }
                }}
                render={({ field: { name, onChange, value, ...otherProps } }) => (
                  <InputField
                    value={value}
                    label="Phone Number"
                    placeholder="(123) 456-7890"
                    description="Optional but recommended"
                    error={errors?.[name]?.message}
                    isValid={isFieldValid(name, value)}
                    keyboardType="phone-pad"
                    onChangeText={onChange}
                    {...otherProps}
                  />
                )}
              />
            </View>
          </View>

          <Controller
            control={control}
            name="jobTitle"
            rules={{
              required: 'Please select a job title',
            }}
            render={({ field: { name, onChange, value } }) => (
              <SelectField
                required
                label="Job Title"
                description="Select your primary role"
                error={errors?.[name]?.message}
                isValid={isFieldValid(name, value?.value)} // Check value.value since it's an Option type
                value={value}
                onValueChange={onChange}
              >
                <SelectTrigger>
                  <SelectValue
                    className={cn(
                      'text-sm native:text-lg',
                      value?.value ? 'text-foreground' : 'text-muted-foreground'
                    )}
                    placeholder="Select your role"
                  />
                </SelectTrigger>

                <SelectContent insets={contentInsets}>
                  <SelectGroup>
                    {jobTitles.map((job: Option) => {
                      if (!job) return null;

                      return (
                        <SelectItem
                          key={job.value}
                          value={job.value}
                          label={job.label}
                        >
                          <Text>{job.label}</Text>
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </SelectField>
            )}
          />

          <Controller
            control={control}
            name="workPreference"
            defaultValue="hybrid"
            rules={{
              required: 'Work preference is required',
            }}
            render={({ field: { name, onChange, value, ...otherProps } }) => (
              <RadioGroupField
                required
                error={errors?.[name]?.message}
                isValid={isFieldValid(name, value)}
                value={value}
                onValueChange={onChange}
                className='flex-col gap-3'
                label="Work Preference"
                description="Select your preferred work arrangement"
                {...otherProps}
              >
                <RadioGroupField.Item
                  value='remote'
                  label="Remote"
                  onLabelPress={() => onChange('remote')}
                />
                <RadioGroupField.Item
                  value='hybrid'
                  label="Hybrid"
                  onLabelPress={() => onChange('hybrid')}
                />
                <RadioGroupField.Item
                  value='office'
                  label="Office"
                  onLabelPress={() => onChange('office')}
                />
              </RadioGroupField>
            )}
          />

          {watchWorkPreference === 'hybrid' && (
            <Controller
              control={control}
              name="officeFrequency"
              rules={{
                required: 'Please specify office frequency',
              }}
              render={({ field: { name, onChange, value, ...otherProps } }) => (
                <RadioGroupField
                  required
                  error={errors?.[name]?.message}
                  isValid={isFieldValid(name, value)}
                  value={value}
                  onValueChange={onChange}
                  className='flex-col gap-3'
                  label="Office Frequency"
                  description="How often would you prefer to be in the office?"
                  {...otherProps}
                >
                  <RadioGroupField.Item
                    value='1-2'
                    label="1-2 days per week"
                    onLabelPress={() => onChange('1-2')}
                  />
                  <RadioGroupField.Item
                    value='3'
                    label="3 days per week"
                    onLabelPress={() => onChange('3')}
                  />
                  <RadioGroupField.Item
                    value='flexible'
                    label="Flexible schedule"
                    onLabelPress={() => onChange('flexible')}
                  />
                </RadioGroupField>
              )}
            />
          )}

          <Controller
            control={control}
            name="portfolio"
            rules={{
              pattern: {
                value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/,
                message: 'Please enter a valid URL'
              }
            }}
            render={({ field: { name, value, onChange, ...otherProps } }) => (
              <InputField
                value={value}
                label="Portfolio URL"
                placeholder="https://your-portfolio.com"
                description="Share your work (optional)"
                error={errors?.[name]?.message}
                isValid={isFieldValid(name, value)}
                onChangeText={onChange}
                {...otherProps}
              />
            )}
          />

          <Controller
            control={control}
            name="bio"
            rules={{
              required: 'Please provide a brief bio',
              minLength: {
                value: 50,
                message: 'Bio should be at least 50 characters'
              },
              maxLength: {
                value: 500,
                message: 'Bio should not exceed 500 characters'
              }
            }}
            render={({ field: { value, name, onChange, ...otherProps } }) => (
              <InputField
                required
                label="Professional Bio"
                placeholder="Tell us about your background and what you're looking for..."
                description="50-500 characters"
                error={errors?.[name]?.message}
                isValid={isFieldValid(name, value)}
                multiline
                numberOfLines={4}
                onChangeText={onChange}
                {...otherProps}
              />
            )}
          />

          <View className="space-y-4">
            <Controller
              control={control}
              name="newsletter"
              render={({ field: { name, onChange, value, ...otherProps } }) => (
                <SwitchField
                  onCheckedChange={onChange}
                  checked={value}
                  isValid={isFieldValid(name, value)}
                  label="Subscribe to Newsletter"
                  description="Receive job opportunities and industry updates"
                  {...otherProps}
                />
              )}
            />

            <Controller
              control={control}
              name="availability"
              render={({ field: { name, onChange, value, ...otherProps } }) => (
                <SwitchField
                  onCheckedChange={onChange}
                  checked={value}
                  isValid={isFieldValid(name, value)}
                  label="Available for Hire"
                  description="Let employers know you're open to opportunities"
                  {...otherProps}
                />
              )}
            />

            <Controller
              control={control}
              name="termsAccepted"
              rules={{
                required: 'You must accept the terms and conditions',
              }}
              render={({ field: { name, onChange, value, ...otherProps } }) => (
                <CheckboxField
                  required
                  error={errors?.[name]?.message}
                  isValid={isFieldValid(name, value)}
                  onCheckedChange={onChange}
                  checked={value}
                  label="Terms and Conditions"
                  description="I agree to the terms of service and privacy policy"
                  {...otherProps}
                />
              )}
            />
          </View>

          <View className="flex flex-row gap-4">
            <Button
              variant="outline"
              onPress={() => reset()}
              disabled={!isDirty || isSubmitting}
            >
              <Button.Text>Reset</Button.Text>
            </Button>

            <Button
              onPress={handleSubmit(onSubmit)}
              disabled={isSubmitting}
              loading={isSubmitting}
            >
              <Button.Spinner />
              <Button.Text>{isSubmitting ? 'Submitting...' : 'Submit Application'}</Button.Text>
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}