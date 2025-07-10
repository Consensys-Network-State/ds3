
```tsx live
<Menu>
  <Accordion variant="unstyled" type="single" collapsible>
    <Accordion.Item value="single-1">
      <Accordion.Trigger asChild>
        <Menu.Item>
          <Text>Hello</Text>
          <View className="ml-auto" />
          <Accordion.Chevron />
        </Menu.Item>
      </Accordion.Trigger>
      <Accordion.Content className="p-1">
        <Menu.Group>
          <Menu.Item icon={Users} label="Active Users" />
          <Menu.Item icon={Users} label="Active Users" />
          <Menu.Item icon={Users} label="Active Users" />
          <Menu.Item icon={Users} label="Active Users" />
        </Menu.Group>
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="single-2">
      <Accordion.Trigger asChild>
        <Menu.Item icon={Users} label="Active Users" />
      </Accordion.Trigger>
      <Accordion.Content>
        <Text>Opening this will close the other item.</Text>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion>
</Menu>
```


```tsx live
<AccordionMenu>
  <AccordionMenu.Item>
    <Menu.Item>
  </AccordionMenu.Item>
<AccordionMenu>
```

```tsx live
<Menu accordion defaultOpen={["users", "settings"]} type="multiple">
  <Menu.Item icon={Home} label="Dashboard" />

  <Menu.Collapse value="settings" icon={Settings} label="Settings">
    <Menu.Item icon={Shield} label="Security" />
    <Menu.Item icon={Bell} label="Notifications" />
    <Menu.Item icon={Palette} label="Appearance" />
  </Menu.Collapse>

  <Menu.Accordion value="users" icon={Users} label="User Management">
    <Menu.Item icon={UserCheck} label="Active Users" />
    <Menu.Item icon={UserX} label="Inactive Users" />
    <Menu.Item icon={UserPlus} label="Add New User" />
  </Menu.Accordion>
</Menu>
```
