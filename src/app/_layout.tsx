import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { COLORES } from '@/constants/colores';

export default function RootLayout() {
  const [fuentesListas] = useFonts(Ionicons.font);
  if (!fuentesListas) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: COLORES.cafe },
          headerTintColor: COLORES.papel,
          headerTitleStyle: { fontFamily: 'serif' },
        }}
      >
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="libro/[id]" options={{ title: 'Detalle' }} />
        <Stack.Screen name="acerca" options={{ presentation: 'modal', title: 'Acerca de' }} />
      </Stack>
    </GestureHandlerRootView>
  );
}