// Tela de Adicionar orçamentos
import { View, Text, Alert, KeyboardAvoidingView, Platform, ScrollView, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import { useBudget } from '../../components/BudgetContext';
import { useMembers } from '../../components/MembersContext';
import { Modal, TouchableOpacity, FlatList } from 'react-native';

import Input from '../../components/Input';
import PrimaryButton from '../../components/PrimaryButton';
import AppLogo from '../../components/Logo';
import styles from './AddBudget.styles';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'AddMember'>;


export default function AddBudget() {
  const [numero, setNumero] = useState('');
  const [descricao, setDescricao] = useState('');
  const [cliente, setCliente] = useState('');
  const [membro, setMembro] = useState('');
  const [valorEstimado, setValorEstimado] = useState('');
  const [custosPrevistos, setCustosPrevistos] = useState('');
  const { membros } = useMembers();
  
  const { addBudget } = useBudget();
  const navigation = useNavigation<NavigationProps>();
  const [membroModalVisible, setMembroModalVisible] = useState(false);

  function validateInputs() {
    if (!numero || !descricao || !valorEstimado || !cliente || !membro || !valorEstimado || !custosPrevistos) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return false;
    }
    return true;
  }
  const handleAddBudget = () => {
    if (!validateInputs()) return;
    const hoje = new Date();
    const dataFormatada = hoje.toLocaleDateString('pt-BR'); 
    addBudget({
      id: Date.now().toString(),
      numero,
      descricao,
      cliente,
      membro,
      valorEstimado,
      custosPrevistos,
      dataCriacaoOrcamento: dataFormatada, // data de hoje adicionada automaticamente
      status: 'Em análise',
    });
    Alert.alert('Sucesso', 'Orçamento criado com sucesso!');
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      >
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
          <View style={[styles.logoContainer]}> 
            <AppLogo variant="branca" />
          </View>
          <View style={styles.card}>
            <Text style={styles.title}>Adicionar Orçamento</Text>
            <Input placeholder="Número" value={numero} onChangeText={setNumero} keyboardType='numeric' />
            <Input placeholder="Descrição" value={descricao} onChangeText={setDescricao} />
            <Input placeholder="Cliente" value={cliente} onChangeText={setCliente} />
            <TouchableOpacity
              onPress={() => setMembroModalVisible(true)}
              accessibilityLabel="Selecionar membro responsável pelo orçamento"
              style={styles.memberSelectorButton}
            >
              <Input
                placeholder='Membro'
                value={membro}
                editable={false}
                pointerEvents="none"
                style={styles.memberInput}
              />
            </TouchableOpacity>
            <Modal
              visible={membroModalVisible}
              animationType="slide"
              transparent
              onRequestClose={() => setMembroModalVisible(false)}
            >
              <TouchableOpacity
                style={styles.modalOverlay}
                activeOpacity={1}
                onPressOut={() => setMembroModalVisible(false)}
                accessibilityLabel="Fechar seleção de membro"
              >
                <View style={styles.modalContainer}>
                  <Text style={styles.modalTitle}>Selecione o membro</Text>
                  <FlatList
                    data={membros}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        onPress={() => {
                          setMembro(item.nome);
                          setMembroModalVisible(false);
                        }}
                        style={styles.memberItem}
                        accessibilityLabel={`Selecionar membro ${item.nome}`}
                      >
                        <Text style={styles.memberItemText}>{item.nome}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </TouchableOpacity>
            </Modal>
            <Input placeholder='Valor estimado' value={valorEstimado} onChangeText={setValorEstimado} />
            <Input placeholder='Custos previstos' value={custosPrevistos} onChangeText={setCustosPrevistos} />
            <View style={styles.buttonRow}>
              <PrimaryButton 
                title="Cancelar" 
                onPress={() => {
                  Alert.alert(
                    'Cancelar',
                    'Seus dados serão perdidos, deseja mesmo cancelar?',
                    [
                      { text: 'Não', style: 'cancel' },
                      { text: 'Sim', style: 'destructive', onPress: () => navigation.goBack() },
                    ],
                    { cancelable: true }
                  );
                }}
                style={styles.cancelButton}
                accessibilityLabel="Cancelar criação de orçamento"
              />
              <PrimaryButton title="Criar" onPress={handleAddBudget} style={styles.addButton} accessibilityLabel="Criar novo orçamento" />
            </View>
            <View style={styles.bottomSpacing}></View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}