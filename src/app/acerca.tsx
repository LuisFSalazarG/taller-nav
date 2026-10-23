import { router } from 'expo-router';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { COLORES } from '@/constants/colores';

export default function Acerca() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Biblioteca v1.0</Text>
      <Text style={styles.texto}>Taller de recuperación de Desarrollo Móvil.</Text>
      <Pressable style={styles.boton} onPress={() => router.back()}>
        <Text style={styles.textoBoton}>Cerrar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: COLORES.papel, justifyContent: 'center', alignItems: 'center', padding: 24, gap: 12 },
  titulo: { fontSize: 24, fontFamily: 'serif', color: COLORES.tinta },
  texto: { fontSize: 15, color: COLORES.gris, textAlign: 'center' },
  boton: { backgroundColor: COLORES.cafe, paddingVertical: 12, paddingHorizontal: 40, borderRadius: 6, marginTop: 12 },
  textoBoton: { color: COLORES.papel, fontSize: 16, fontWeight: 'bold' },
});