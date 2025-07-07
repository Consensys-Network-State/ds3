import { Star } from "lucide-react-native";

export const mixedExamples = {
  "form": {
    name: "Form Example",
    jsx: `<View className="flex flex-col gap-4">
  <Text size="lg" weight="bold">Contact Form</Text>
  <Input placeholder="Your name" label="Name" />
  <Input placeholder="your@email.com" label="Email" />
  <View className="flex flex-row gap-2">
    <Button variant="solid" color="primary">
      <Text>Submit</Text>
    </Button>
    <Button variant="outline" color="neutral">
      <Text>Cancel</Text>
    </Button>
  </View>
</View>`
  },
  "card": {
    name: "Card Layout",
    jsx: `<View className="bg-neutral-2 p-4 rounded-lg border border-neutral-6">
  <View className="flex flex-row items-center gap-2 mb-3">
    <Icon icon={Star} color="warning" />
    <Text size="lg" weight="semibold">Featured Content</Text>
  </View>
  <Text color="neutral" className="mb-4">
    This is a sample card layout showing how components work together.
  </Text>
  <View className="flex flex-row gap-2">
    <Button variant="soft" color="primary" size="sm">
      <Text>Learn More</Text>
    </Button>
    <Button variant="ghost" color="neutral" size="sm">
      <Text>Dismiss</Text>
    </Button>
  </View>
</View>`
  }
}; 