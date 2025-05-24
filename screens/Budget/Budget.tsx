// Tela de orçamentos
// Usuário pode criar, editar, aprovar/reprovar e excluir orçamentos.
import { View, Text, ScrollView, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './Budget.styles';
import AppLogo from '../../components/Logo';
import Sidebar from '../../components/Sidebar';
import { RootStackParamList } from '../../types/navigation';
import Card from '../../components/Card';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';
import { useBudget } from '../../components/BudgetContext';

export default function Budget() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { Budget, removeBudget, updateBudgetStatus } = useBudget();
  const { width } = Dimensions.get('window');
  const isTablet = width > 600;

  return (
    <View style={styles.container}>
      <Sidebar navigation={navigation} />
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <AppLogo variant="branca" />
        </View>
        {/* Linha com título e botão à direita */}
        <View style={styles.headerRow}>
          <Text style={styles.text}>Orçamentos</Text>
          <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate('AddBudget')} accessibilityLabel="Adicionar novo orçamento">
            <Feather name="plus" size={isTablet ? 36 : 32} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.info}>🟡Em análise     🟢Aprovado     🔴Reprovado </Text>
        <View style={styles.linha} />
        {/* Lista de cards centralizada */}
        {Budget.length === 0 ? (
          <View style={{ alignItems: 'center', marginTop: 32 }}>
            <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>
              Nenhum orçamento cadastrado. Adicione orçamentos para visualizar aqui.
            </Text>
          </View>
        ) : (
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
                onDelete={() => removeBudget(Budget.id)}
                cardSize="small"
                hideImage
                isBudgetCard
                status={Budget.status}
                onStatusChange={status => {
                  Alert.alert(
                    status === 'Aprovado' ? 'Aprovar orçamento' : 'Reprovar orçamento',
                    `Tem certeza que deseja ${status === 'Aprovado' ? 'aprovar' : 'reprovar'} este orçamento?`,
                    [
                      { text: 'Cancelar', style: 'cancel' },
                      { text: status === 'Aprovado' ? 'Aprovar' : 'Reprovar', style: status === 'Aprovado' ? 'default' : 'destructive', onPress: () => updateBudgetStatus(Budget.id, status) },
                    ],
                    { cancelable: true }
                  );
                }}
              />
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
}
