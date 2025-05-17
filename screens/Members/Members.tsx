// Members screen component
// Displays a welcome message and a header
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './Members.styles';
import AppLogo from '../../components/Logo';
import Sidebar from '../../components/Sidebar';
import { RootStackParamList } from '../../types/navigation';
import Card from '../../components/Card';
import PrimaryButton from '../../components/PrimaryButton';
import Feather from 'react-native-vector-icons/Feather';
import React, { useState } from 'react';

export default function Members() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Lista de membros (mock)
  const [membros, setMembros] = useState([
    {
      id: '1',
      imagem: 'https://wallpapers.com/images/hd/cute-anime-profile-pictures-dfgqyw4wcfhurbkk.jpg',
      nome: 'Caio',
      email: 'caio@email.com',
      idade: 22,
      matricula: '12345',
    },
    {
      id: '2',
      imagem: 'https://i.pinimg.com/originals/66/b3/24/66b3247f3e0ed3fa5279221874f628ac.jpg',
      nome: 'Enzo',
      email: 'enzo@email.com',
      idade: 21,
      matricula: '23456',
    },
    {
      id: '3',
      imagem: 'https://i.pinimg.com/736x/9d/57/c0/9d57c0de79ae1db10982d1a7b70b9ab9.jpg',
      nome: 'Menezes',
      email: 'menezes@email.com',
      idade: 23,
      matricula: '34567',
    },
    {
      id: '4',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNytxh56jwPUhoM9CfIoAaqx8sp4UGPkBpXw&s',
      nome: 'Chapolin',
      email: 'chapolin@email.com',
      idade: 25,
      matricula: '45678',
    },
    {
      id: '5',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ5YBx5noU3Gn4ier4-3XHy3P0_rIjGxYPqw&s',
      nome: 'Mayron',
      email: 'mayron@email.com',
      idade: 24,
      matricula: '56789',
    },
  ]);

  // Atualiza campo editado do membro
  const handleFieldChange = (id: string, key: string, value: string) => {
    setMembros(prev => prev.map(m => m.id === id ? { ...m, [key]: key === 'idade' ? Number(value) : value } : m));
  };

  // Função para excluir membro
  const handleDeleteMember = (id: string) => {
    setMembros(prev => prev.filter(m => m.id !== id));
  };

  return (
    <View style={styles.container}>
      {/* Sidebar lateral (tablet/desktop) ou drawer (mobile) */}
      <Sidebar navigation={navigation} />
      {/* Conteúdo principal centralizado */}
      <View style={styles.content}>
        {/* Logo fixa no topo direito */}
        <View style={styles.logoContainer}>
          <AppLogo variant="branca" />
        </View>
        {/* Linha com título e botão à direita */}
        <View style={styles.headerRow}>
          <Text style={styles.text}>Membros</Text>
          <TouchableOpacity style={styles.headerButton} onPress={() => alert('Adicionar funcionário!')}>
            <Feather name="plus" size={26} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.linha} />
        {/* Lista de cards centralizada */}
        <ScrollView contentContainerStyle={styles.cardsContainer}>
          {membros.map(membro => (
            <Card
              key={membro.id}
              imagem={membro.imagem}
              title={membro.nome}
              fields={[
                { key: 'nome', label: 'Nome', value: membro.nome, editable: true },
                { key: 'email', label: 'Email', value: membro.email, editable: true, keyboardType: 'email-address' },
                { key: 'idade', label: 'Idade', value: String(membro.idade), editable: true, keyboardType: 'numeric' },
                { key: 'matricula', label: 'Matrícula', value: membro.matricula, editable: true },
              ]}
              onFieldChange={(key, value) => handleFieldChange(membro.id, key, value)}
              onDelete={() => handleDeleteMember(membro.id)}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
