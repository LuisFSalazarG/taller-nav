import { View, Text } from 'react-native';
import { COLORES } from '@/constants/colores';

export default function Ajustes() {
  return (
    <View style={{ flex: 1, backgroundColor: COLORES.papel, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 18, fontFamily: 'serif', color: COLORES.tinta }}>Ajustes</Text>
    </View>
  );
}