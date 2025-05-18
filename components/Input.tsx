// Input padrão 
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, TextInputProps, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

interface InputProps extends TextInputProps {
  style?: object;
}

const { width } = Dimensions.get('window'); // Responsividade

// Aceita todas as propriedades de um input normal alem de ser customizada para senhas
export default function Input({ style, secureTextEntry, ...props }: InputProps) {
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const isPassword = secureTextEntry !== undefined;

  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={[styles.input, style]}
        secureTextEntry={isPassword && !senhaVisivel}
      />

      {isPassword && (
        <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)} accessibilityLabel="Senha Vísivel/Senha Invisível" >
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
    paddingVertical: width > 600 ? 14 : 8, // padding maior em tablet
    marginBottom: width > 600 ? 22 : 16, // espaçamento maior em tablet
  },
  input: {
    flex: 1,
    fontSize: width > 600 ? 19 : 16, // fonte maior em tablet
    paddingRight: 8,
    paddingVertical: width > 600 ? 10 : 6, // aumenta área de toque
  },
});
