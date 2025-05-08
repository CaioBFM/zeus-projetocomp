import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
  title: string;
}

export default function PrimaryButton({ title, onPress, style }: { title: string; onPress: () => void; style?: any }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3B82F6',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
