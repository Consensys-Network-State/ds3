import { Home, Users, Settings, User, FileText, Bell, Mail, HelpCircle } from "lucide-react-native";

export const menuExamples = {
  "basic": {
    name: "Basic Menu",
    jsx: `<Menu>
  <Menu.Item onPress={() => {}}>
    <Text>Menu Item</Text>
  </Menu.Item>
</Menu>`
  },
  "with-icons": {
    name: "With Icons",
    jsx: `<Menu>
  <Menu.Item onPress={() => {}}>
    <Icon icon={Home} />
    <Text>Home</Text>
  </Menu.Item>
  <Menu.Item onPress={() => {}}>
    <Icon icon={Settings} />
    <Text>Settings</Text>
  </Menu.Item>
  <Menu.Item onPress={() => {}}>
    <Icon icon={User} />
    <Text>Profile</Text>
  </Menu.Item>
</Menu>`
  },
  "prop-api": {
    name: "Prop API",
    jsx: `<Menu>
  <Menu.Item icon={Home} label="Dashboard" onPress={() => {}} />
  <Menu.Item icon={Users} label="Users" onPress={() => {}} />
  <Menu.Item icon={Settings} label="Settings" onPress={() => {}} />
  <Menu.Item 
    avatar={{ source: { uri: 'https://github.com/shadcn.png' }, children: 'JD' }}
    label="Profile" 
    onPress={() => {}} 
  />
</Menu>`
  },
  "declarative-api": {
    name: "Declarative API",
    jsx: `<Menu>
  <Menu.Item onPress={() => {}}>
    <Icon icon={Home} />
    <Avatar source={{ uri: 'https://github.com/shadcn.png' }}>JD</Avatar>
    <Text>Dashboard</Text>
  </Menu.Item>
  <Menu.Item onPress={() => {}}>
    <Icon icon={Users} />
    <Text>Users</Text>
  </Menu.Item>
</Menu>`
  },
  "group": {
    name: "Menu Group (Indentation)",
    jsx: `<Menu>
  <Menu.Item icon={Home} label="Dashboard" onPress={() => {}} />
  
  <Menu.Group>
    <Menu.Item icon={Users} label="All Users" onPress={() => {}} />
    <Menu.Item icon={Users} label="Active Users" onPress={() => {}} />
    <Menu.Item icon={Users} label="Inactive Users" onPress={() => {}} />
  </Menu.Group>
</Menu>`
  },
  "accordion": {
    name: "Menu Accordion (Auto Trigger)",
    jsx: `<Menu>
  <Menu.Item icon={Home} label="Dashboard" onPress={() => {}} />
  
  <Menu.Accordion value="users" type="single" collapsible>
    <Menu.Item icon={Users} label="All Users" onPress={() => {}} />
    <Menu.Item icon={Users} label="Active Users" onPress={() => {}} />
    <Menu.Item icon={Users} label="Inactive Users" onPress={() => {}} />
  </Menu.Accordion>
</Menu>`
  },
  "accordion-item": {
    name: "Menu Accordion Item",
    jsx: `<Menu>
  <Menu.Item icon={Home} label="Dashboard" onPress={() => {}} />
  
  <Menu.Accordion value="users" type="single" collapsible>
    <Menu.Accordion.Item icon={Users} label="All Users">
      <Menu.Item icon={Users} label="Active Users" onPress={() => {}} />
      <Menu.Item icon={Users} label="Inactive Users" onPress={() => {}} />
    </Menu.Accordion.Item>
  </Menu.Accordion>
</Menu>`
  },
  "accordion-custom": {
    name: "Menu Accordion (Custom Trigger)",
    jsx: `<Menu>
  <Menu.Item icon={Home} label="Dashboard" onPress={() => {}} />
  
  <Menu.Accordion value="users" type="single" collapsible>
    <Menu.Accordion.Item trigger={false}>
      <Menu.Accordion.Trigger>
        <Icon icon={Users} />
        <Text>Users</Text>
        <Menu.Accordion.Chevron />
      </Menu.Accordion.Trigger>
      <Menu.Accordion.Content>
        <Menu.Item icon={Users} label="All Users" onPress={() => {}} />
        <Menu.Item icon={Users} label="Active Users" onPress={() => {}} />
        <Menu.Item icon={Users} label="Inactive Users" onPress={() => {}} />
      </Menu.Accordion.Content>
    </Menu.Accordion.Item>
  </Menu.Accordion>
</Menu>`
  },
  "complete": {
    name: "Complete Navigation",
    jsx: `<View className="w-64 bg-neutral-1 border-r border-neutral-a6 p-4">
  <Menu>
    <Menu.Item icon={Home} label="Dashboard" onPress={() => {}} />
    
    <Menu.Accordion value="content" type="single" collapsible>
      <Menu.Item icon={FileText} label="Articles" onPress={() => {}} />
      <Menu.Item icon={FileText} label="Pages" onPress={() => {}} />
      
      <Menu.Group>
        <Menu.Item icon={FileText} label="Images" onPress={() => {}} />
        <Menu.Item icon={FileText} label="Videos" onPress={() => {}} />
        <Menu.Item icon={FileText} label="Documents" onPress={() => {}} />
      </Menu.Group>
    </Menu.Accordion>
    
    <Menu.Accordion value="settings" type="single" collapsible trigger={false}>
      <Menu.Accordion.Trigger>
        <Icon icon={Settings} />
        <Text>Settings</Text>
        <Menu.Accordion.Chevron />
      </Menu.Accordion.Trigger>
      <Menu.Accordion.Content>
        <Menu.Item icon={Settings} label="General" onPress={() => {}} />
        <Menu.Item icon={Settings} label="Security" onPress={() => {}} />
        <Menu.Item icon={Settings} label="Notifications" onPress={() => {}} />
      </Menu.Accordion.Content>
    </Menu.Accordion>
    
    <Menu.Item 
      avatar={{ source: { uri: 'https://github.com/shadcn.png' }, children: 'JD' }}
      label="Profile" 
      onPress={() => {}} 
    />
  </Menu>
</View>`
  }
}; 