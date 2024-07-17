import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: '#285943' }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="favourites"
                options={{
                    title: 'Favourite Countries',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="list" color={color} />,
                }}
            />
            <Tabs.Screen
            name="[country]"
            options={{
                href : null,
            }}
            />
        </Tabs>
    );
}
