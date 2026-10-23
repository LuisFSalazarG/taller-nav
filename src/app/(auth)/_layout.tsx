import { Slot } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { COLORES } from '@/constants/colores';

export default function AuthLayout() {
  return (
    <View style={styles.marco}>
      <Text style={styles.titulo}>Biblioteca</Text>
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  marco: { flex: 1, backgroundColor: COLORES.cafe, alignItems: 'center', paddingTop: 80, paddingHorizontal: 24 },
  titulo: { fontSize: 36, fontFamily: 'serif', color: COLORES.papel, marginBottom: 32 },
});