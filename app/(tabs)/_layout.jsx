import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
        <Tabs.Screen name="index" options={{headerTitle: 'products', title: 'products'}}/>
        <Tabs.Screen name="Scan" options={{headerTitle: 'Scanner', title: 'Scanner'}}/>
    </Tabs>
  );
}