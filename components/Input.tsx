import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, TextInputProps } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

interface InputProps extends TextInputProps {}

export default function Input(props: InputProps) {
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const isPassword = props.secureTextEntry !== undefined;

  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={[styles.input, props.style]}
        secureTextEntry={isPassword && !senhaVisivel}
      />

      {isPassword && (
        <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)}>
          <Feather
            name={senhaVisivel ? 'eye' : 'eye-off'}
            size={22}
            color="#666"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
    marginBottom: 16
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingRight: 8
  }
});
