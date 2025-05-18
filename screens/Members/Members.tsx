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
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';
import { useMembers } from '../../components/MembersContext';

export default function Members() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { membros, addMember, removeMember } = useMembers();

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
          <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate('AddMember')}>
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
                { key: 'dataNascimento', label: 'Data Nascimento', value: membro.dataNascimento, editable: true },
                { key: 'email', label: 'Email', value: membro.email, editable: true, keyboardType: 'email-address' },
                { key: 'cargo', label: 'Cargo', value: String(membro.cargo), editable: true, keyboardType: 'numeric' },
                { key: 'telefone', label: 'Telefone', value: membro.telefone, editable: true },
                { key: 'genero', label: 'Genero', value: membro.genero, editable: true },
                { key: 'dataIngresso', label: 'Data de Ingresso', value: membro.dataIngresso, editable: false },
                { key: 'habilidades', label: 'Habilidades', value: membro.habilidades, editable: true },
              ]}
              onFieldChange={(key, value) => {/* opcional: implementar edição global */}}
              onDelete={() => removeMember(membro.id)}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
