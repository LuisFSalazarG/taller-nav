import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { COLORES } from '@/constants/colores';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORES.cafe,
        tabBarInactiveTintColor: COLORES.gris,
        tabBarStyle: { backgroundColor: COLORES.hoja },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color as string} size={size} />,
        }}
      />
      <Tabs.Screen
        name="favoritos"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color, size }) => <Ionicons name="heart" color={color as string} size={size} />,
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color as string} size={size} />,
        }}
      />
    </Tabs>
  );
}