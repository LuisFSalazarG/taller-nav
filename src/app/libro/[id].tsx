import { Stack, useLocalSearchParams, router } from 'expo-router';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { LIBROS } from '@/data/libros';
import { COLORES } from '@/constants/colores';

export default function DetalleLibro() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const libro = LIBROS.find((l) => l.id === id);

  const volver = () => (router.canGoBack() ? router.back() : router.replace('/'));

  if (!libro) {
    return (
      <View style={[styles.contenedor, { justifyContent: 'center', alignItems: 'center' }]}>
        <Stack.Screen options={{ title: 'Detalle' }} />
        <Text style={styles.titulo}>Libro no encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.contenedor}>
      <Stack.Screen options={{ title: libro.titulo }} />

      <View style={styles.hoja}>
        <Text style={styles.titulo}>{libro.titulo}</Text>
        <View style={styles.linea} />
        <Text style={styles.dato}>Autor: {libro.autor}</Text>
        <Text style={styles.dato}>Año: {libro.anio}</Text>
      </View>

      <Pressable style={styles.boton} onPress={volver}>
        <Text style={styles.textoBoton}>Volver a la lista</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: COLORES.papel, padding: 16, gap: 16 },
  hoja: {
    backgroundColor: COLORES.hoja,
    borderWidth: 1,
    borderColor: COLORES.borde,
    borderRadius: 6,
    padding: 24,
    gap: 8,
  },
  titulo: { fontSize: 24, fontFamily: 'serif', color: COLORES.tinta },
  linea: { height: 1, backgroundColor: COLORES.borde, marginVertical: 8 },
  dato: { fontSize: 16, color: COLORES.tinta },
  boton: { backgroundColor: COLORES.cafe, padding: 14, borderRadius: 6, alignItems: 'center' },
  textoBoton: { color: COLORES.papel, fontSize: 16, fontWeight: 'bold' },
});