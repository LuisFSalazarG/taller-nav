import { Drawer } from 'expo-router/drawer';

export default function AppLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="(tabs)" options={{ drawerLabel: 'Inicio', title: 'Biblioteca' }} />
      <Drawer.Screen name="ajustes" options={{ drawerLabel: 'Ajustes', title: 'Ajustes' }} />
    </Drawer>
  );
}