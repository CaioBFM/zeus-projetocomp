import { TextInput, StyleSheet, TextInputProps } from 'react-native';

export default function Input(props: TextInputProps) {
    return <TextInput style={styles.input} {...props} />;
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
        width: '100%',
    },
});