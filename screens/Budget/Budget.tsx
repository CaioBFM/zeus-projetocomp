// Members screen component
// Displays a welcome message and a header
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './Budget.styles';
import AppLogo from '../../components/Logo';
import Sidebar from '../../components/Sidebar';
import { RootStackParamList } from '../../types/navigation';
import Card from '../../components/Card';
import Feather from 'react-native-vector-icons/Feather';
import React, { useState } from 'react';

export default function Members() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Lista de membros (mock)
  const [orcamento, setOrcamento] = useState([
    {
      id: '1',
      numero: '00211235',
      descricao: 'Landingpage para seniors',
      valorEstimado: '22',
      status: 'sim',
      cliente: 'caio', // novo campo
    },
    {
      id: '2',
      numero: '28374850',
      descricao: 'Camisetas e logo etc',
      valorEstimado: '22',
      status: 'sim',
      cliente: 'bueno',
    },
    {
      id: '3',
      numero: '300937890',
      descricao: 'vai luan vai luan',
      valorEstimado: '22',
      status: 'em andamento',
      cliente: 'finocchio',
    },
    {
      id: '4',
      numero: '4283945084',
      descricao: 'carmed carmed',
      valorEstimado: '22',
      status: 'nao',
      cliente: 'martins',
    },
    {
      id: '5',
      numero: '198329833',
      descricao: 'caiocaiocaiocaiocaio',
      valorEstimado: '22',
      status: 'sim',
      cliente: 'cedos',
    },
  ]);

  // Atualiza campo editado do membro
  const handleFieldChange = (id: string, key: string, value: string) => {
    setOrcamento(prev => prev.map(m => m.id === id ? { ...m, [key]: key === 'idade' ? Number(value) : value } : m));
  };

  // Função para excluir membro
  const handleDeleteMember = (id: string) => {
    setOrcamento(prev => prev.filter(m => m.id !== id));
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
          <Text style={styles.text}>Orçamentos</Text>
          <TouchableOpacity style={styles.headerButton} onPress={() => alert('Adicionar orçamento!')}>
            <Feather name="plus" size={26} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.linha} />
        {/* Lista de cards centralizada */}
        <ScrollView contentContainerStyle={styles.cardsContainer}>
          {orcamento.map(orcamento => (
            <Card
              key={orcamento.id}
              title={orcamento.numero}
              // 18 caracteres para evitar quebra de linha
              fields={[
                { key: 'numero', label: 'Número', value: orcamento.numero, editable: true , keyboardType: 'numeric' },
                { key: 'descricao', label: 'Descrição', value: orcamento.descricao, editable: true },
                { key: 'valorEstimado', label: 'Valor estimado', value: String(orcamento.valorEstimado), editable: true, keyboardType: 'numeric' },
                { key: 'status', label: 'Status', value: orcamento.status, editable: true },
                { key: 'cliente', label: 'Cliente', value: orcamento.cliente, editable: true }, 
              ]}
              onFieldChange={(key, value) => handleFieldChange(orcamento.id, key, value)}
              onDelete={() => handleDeleteMember(orcamento.id)}
              cardSize="small"
              hideImage
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
