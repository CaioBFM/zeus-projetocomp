// PrimaryButton component
// A reusable button with customizable title and styles
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

interface PrimaryButtonProps extends TouchableOpacityProps {
  title: string;
  style?: object;
}

export default function PrimaryButton({ title, style, ...props }: PrimaryButtonProps) {
  return (
    <TouchableOpacity {...props} style={[styles.button, style]}>
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
