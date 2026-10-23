import { FlatList, Pressable, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { LIBROS } from '@/data/libros';
import { COLORES } from '@/constants/colores';

export default function Inicio() {
  return (
    <FlatList
      style={{ backgroundColor: COLORES.papel }}
      contentContainerStyle={{ padding: 16 }}
      data={LIBROS}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Link href={{ pathname: '/libro/[id]', params: { id: item.id } }} asChild>
          <Pressable style={styles.tarjeta}>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.autor}>{item.autor} · {item.anio}</Text>
          </Pressable>
        </Link>
      )}
    />
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: COLORES.hoja,
    borderWidth: 1,
    borderColor: COLORES.borde,
    borderLeftWidth: 5,
    borderLeftColor: COLORES.cafe,
    borderRadius: 6,
    padding: 16,
    marginBottom: 12,
  },
  titulo: { fontSize: 18, fontFamily: 'serif', color: COLORES.tinta },
  autor: { fontSize: 14, color: COLORES.gris, marginTop: 4 },
});