import { router } from 'expo-router';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORES } from '@/constants/colores';

export default function Perfil() {
  return (
    <View style={styles.contenedor}>
      <View style={styles.avatar}>
        <Ionicons name="person" size={48} color={COLORES.papel} />
      </View>
      <Text style={styles.nombre}>Estudiante</Text>
      <Text style={styles.subtitulo}>Desarrollo Móvil</Text>

      <Pressable style={styles.boton} onPress={() => router.push('/acerca')}>
        <Text style={styles.textoBoton}>Acerca de</Text>
      </Pressable>

      <Pressable style={[styles.boton, styles.botonSalir]} onPress={() => router.replace('/login')}>
        <Text style={[styles.textoBoton, { color: COLORES.cafe }]}>Cerrar sesión</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: COLORES.papel, alignItems: 'center', padding: 24, gap: 12 },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: COLORES.cafe,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  nombre: { fontSize: 22, fontFamily: 'serif', color: COLORES.tinta },
  subtitulo: { fontSize: 15, color: COLORES.gris, marginBottom: 16 },
  boton: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: COLORES.cafe,
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
  },
  botonSalir: { backgroundColor: 'transparent', borderWidth: 1, borderColor: COLORES.cafe },
  textoBoton: { color: COLORES.papel, fontSize: 16, fontWeight: 'bold' },
});