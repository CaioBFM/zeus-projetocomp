// PrimaryButton component
// A reusable button with customizable title and styles
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, Dimensions } from 'react-native';

interface PrimaryButtonProps extends TouchableOpacityProps {
  title: string;
  style?: object;
}

const { width } = Dimensions.get('window');

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
    paddingVertical: width > 600 ? 18 : 12,
    paddingHorizontal: width > 600 ? 32 : 16,
    borderRadius: width > 600 ? 14 : 8,
    alignItems: 'center',
    minWidth: width > 600 ? 180 : 0,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: width > 600 ? 20 : 16,
  },
});
