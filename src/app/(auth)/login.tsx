import { router } from 'expo-router';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { COLORES } from '@/constants/colores';

export default function Login() {
  return (
    <View style={styles.hoja}>
      <Text style={styles.titulo}>Bienvenido</Text>
      <Text style={styles.texto}>Inicia sesión para ver tus libros</Text>
      <Pressable style={styles.boton} onPress={() => router.replace('/')}>
        <Text style={styles.textoBoton}>Entrar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  hoja: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: COLORES.hoja,
    borderRadius: 6,
    padding: 24,
    gap: 12,
  },
  titulo: { fontSize: 22, fontFamily: 'serif', color: COLORES.tinta, textAlign: 'center' },
  texto: { fontSize: 15, color: COLORES.gris, textAlign: 'center', marginBottom: 8 },
  boton: { backgroundColor: COLORES.cafe, padding: 14, borderRadius: 6, alignItems: 'center' },
  textoBoton: { color: COLORES.papel, fontSize: 16, fontWeight: 'bold' },
});