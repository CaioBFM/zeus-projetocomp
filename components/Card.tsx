import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

interface Props {
  nome: string,
  imagem: string,
  onPress?: () => void;
}

const CardMembro: React.FC<Props> = ({ nome, imagem, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      <Image source={{ uri: imagem }} style={styles.imagem} />
      <Text style={styles.nome}>{nome}</Text>
      <Icon name="chevron-forward" size={24} color="#888" style={styles.icon} />
    </TouchableOpacity>
  );
};

const CARD_HEIGHT = 0.13 * height;
const CARD_WIDTH = width * 0.9;
const IMAGE_SIZE = CARD_HEIGHT * 0.7;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginVertical: 8,
    width: CARD_WIDTH,
    minHeight: CARD_HEIGHT,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 6,
    elevation: 4,
  },
  imagem: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE / 2,
    marginRight: 18,
    backgroundColor: '#e0e0e0',
  },
  nome: {
    flex: 1,
    fontSize: 0.045 * width,
    fontWeight: '500',
    color: "#333",
  },
  icon: {
    marginLeft: 12,
  },
});

export default CardMembro;