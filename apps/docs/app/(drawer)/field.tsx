import { Text, Field, Input } from "@ds3/react/src";
import { View, ScrollView } from "react-native";
import {
  Mail,
  Lock,
  User,
  Calendar,
  Phone,
  Globe,
  AlertCircle,
  CheckCircle,
  InfoIcon,
} from 'lucide-react-native';

export default function Fields() {
  const fieldColors = [
    'neutral',
    'primary',
    'secondary',
    'error',
    'warning',
    'success'
  ];

  return (
    <ScrollView className="h-screen bg-neutral-1">
      <View className="flex-1 items-center pb-4">
        <View className="w-full max-w-[1200px] px-4 h-full gap-4">
          <Text className="text-h1">Fields</Text>

          <Text className="text-h2">Basic Usage</Text>
          <View className="flex flex-col gap-4">
            <Field>
              <Field.Label>Username</Field.Label>
              <Input placeholder="Enter username" />

              <Field.Description>Enter your username to identify your account</Field.Description>
            </Field>
          </View>

          <View className="flex flex-col gap-4">
            <Field>
              <Field.Row>
                <Field.Label>Username</Field.Label>
                <Input placeholder="Enter username" />
              </Field.Row>

              <Field.Description>Enter your username to identify your account</Field.Description>
            </Field>
          </View>

          <Text className="text-h2">Colors</Text>
          <View className="flex flex-col gap-4">
            {fieldColors.map((color) => (
              <Field key={color} color={color}>
                <Field.Row>
                  <Field.Icon icon={User} />
                  <Field.Label>{color.charAt(0).toUpperCase() + color.slice(1)} Field</Field.Label>
                </Field.Row>
                <Input placeholder={`Enter ${color} field`} color={color} />
                <Field.Description>This is a {color} field example</Field.Description>
              </Field>
            ))}
          </View>

          <Text className="text-h2">Common Examples</Text>
          <View className="flex flex-col gap-4">
            {/* Login Form Fields */}
            <View className="flex flex-col gap-4 p-4 bg-neutral-2 rounded-lg">
              <Text className="text-h3">Login Form</Text>
              <Field>
                <Field.Row>
                  <Field.Icon icon={Mail} />
                  <Field.Label>Email</Field.Label>
                </Field.Row>
                <Input placeholder="Enter your email" />
                <Field.Description>Enter the email associated with your account</Field.Description>
              </Field>

              <Field>
                <Field.Row>
                  <Field.Icon icon={Lock} />
                  <Field.Label>Password</Field.Label>
                </Field.Row>
                <Input placeholder="Enter your password" secureTextEntry />
                <Field.Description>Must be at least 8 characters long</Field.Description>
              </Field>
            </View>

            {/* Profile Form Fields */}
            <View className="flex flex-col gap-4 p-4 bg-neutral-2 rounded-lg">
              <Text className="text-h3">Profile Form</Text>
              <Field color="primary">
                <Field.Row>
                  <Field.Icon icon={User} />
                  <Field.Label>Display Name</Field.Label>
                </Field.Row>
                <Input placeholder="Enter display name" color="primary" />
                <Field.Description>This will be visible to other users</Field.Description>
              </Field>

              <Field color="primary">
                <Field.Row>
                  <Field.Icon icon={Globe} />
                  <Field.Label>Website</Field.Label>
                </Field.Row>
                <Input placeholder="Enter your website" color="primary" />
                <Field.Description>Optional: Add your personal website</Field.Description>
              </Field>
            </View>

            {/* Validation States */}
            <View className="flex flex-col gap-4 p-4 bg-neutral-2 rounded-lg">
              <Text className="text-h3">Validation States</Text>
              <Field color="error">
                <Field.Row>
                  <Field.Icon icon={AlertCircle} />
                  <Field.Label>Invalid Field</Field.Label>
                </Field.Row>
                <Input placeholder="Error state" color="error" />
                <Field.Description>This field contains an error</Field.Description>
              </Field>

              <Field color="success">
                <Field.Row>
                  <Field.Icon icon={CheckCircle} />
                  <Field.Label>Valid Field</Field.Label>
                </Field.Row>
                <Input placeholder="Success state" color="success" />
                <Field.Description>This field is valid</Field.Description>
              </Field>

              <Field color="warning">
                <Field.Row>
                  <Field.Icon icon={InfoIcon} />
                  <Field.Label>Warning Field</Field.Label>
                </Field.Row>
                <Input placeholder="Warning state" color="warning" />
                <Field.Description>This field requires attention</Field.Description>
              </Field>
            </View>

            {/* Complex Fields */}
            <View className="flex flex-col gap-4 p-4 bg-neutral-2 rounded-lg">
              <Text className="text-h3">Complex Fields</Text>
              <Field>
                <Field.Row>
                  <Field.Icon icon={Phone} />
                  <Field.Label>Phone Number</Field.Label>
                </Field.Row>
                <Field.Row>
                  <Input className="w-24" placeholder="Area">
                    <Input.Text>+1</Input.Text>
                    <Input.Field />
                  </Input>
                  <Input placeholder="Phone number">
                    <Input.Field />
                  </Input>
                </Field.Row>
                <Field.Description>Enter your contact number with area code</Field.Description>
              </Field>

              <Field>
                <Field.Row>
                  <Field.Icon icon={Calendar} />
                  <Field.Label>Date Range</Field.Label>
                </Field.Row>

                <Field.Row>
                  <Input placeholder="Start date" />
                  <Input placeholder="End date" />
                </Field.Row>
                <Field.Description>Select a date range for your event</Field.Description>
              </Field>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}