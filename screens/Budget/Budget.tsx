// Members screen component
// Displays a welcome message and a header
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './Budget.styles';
import AppLogo from '../../components/Logo';
import Sidebar from '../../components/Sidebar';
import { RootStackParamList } from '../../types/navigation';
import Card from '../../components/Card';
import Feather from 'react-native-vector-icons/Feather';
import React, { useState } from 'react';
import { useBudget } from '../../components/BudgetContext';

export default function Budget() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { Budget, addBudget, removeBudget, updateBudgetStatus } = useBudget();

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
          <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate('AddBudget')}>
            <Feather name="plus" size={26} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.info}>🟡Em análise   🟢Aprovado   🔴Reprovado </Text>
        <View style={styles.linha} />
        {/* Lista de cards centralizada */}
        <ScrollView contentContainerStyle={styles.cardsContainer}>
          {Budget.map(Budget => (
            <Card
              key={Budget.id}
              title={Budget.numero}
              fields={[
                { key: 'numero', label: 'Número', value: Budget.numero, editable: true , keyboardType: 'numeric' },
                { key: 'descricao', label: 'Descrição', value: Budget.descricao, editable: true },
                { key: 'cliente', label: 'Cliente', value: Budget.cliente, editable: true },
                { key: 'membro', label: 'Membro', value: Budget.membro, editable: true },
                { key: 'valorEstimado', label: 'Valor estimado', value: String(Budget.valorEstimado), editable: true, keyboardType: 'numeric' },
                { key: 'DataCriacao', label: 'Data de criação', value: Budget.dataCriacaoOrcamento, editable: false },
                { key: 'CustosPrevistos', label: 'Custos previstos', value: Budget.custosPrevistos, editable: true },
                { key: 'status', label: 'Status', value: Budget.status, editable: false }, 
              ]}
              onFieldChange={(key, value) => {/* Poderia implementar açao global depois */}}
              onDelete={() => removeBudget(Budget.id)}
              cardSize="small"
              hideImage
              isBudgetCard
              status={Budget.status}
              onStatusChange={status => updateBudgetStatus(Budget.id, status)}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
