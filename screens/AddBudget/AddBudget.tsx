// AddMember screen component
// Handles adding a new member (employee) and navigation to the Members screen
import { View, Text, Alert, KeyboardAvoidingView, Platform, ScrollView, SafeAreaView, useWindowDimensions } from 'react-native';
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
      dataCriacaoOrcamento: dataFormatada,
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
          {/* Logo no topo do conteúdo, com espaçamento */}
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
              accessibilityLabel="Selecionar membro"
              style={{ marginBottom: 16 }}
            >
              <Input
                placeholder='Membro'
                value={membro}
                editable={false}
                pointerEvents="none"
                style={{ backgroundColor: '#f3f4f6' }}
              />
            </TouchableOpacity>
            <Modal
              visible={membroModalVisible}
              animationType="slide"
              transparent
              onRequestClose={() => setMembroModalVisible(false)}
            >
              <TouchableOpacity
                style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.3)' }}
                activeOpacity={1}
                onPressOut={() => setMembroModalVisible(false)}
              >
                <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#fff', borderTopLeftRadius: 18, borderTopRightRadius: 18, padding: 24, maxHeight: 400 }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 16, color: '#222' }}>Selecione o membro</Text>
                  <FlatList
                    data={membros}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        onPress={() => {
                          setMembro(item.nome);
                          setMembroModalVisible(false);
                        }}
                        style={{ paddingVertical: 14, borderBottomWidth: 1, borderColor: '#eee' }}
                        accessibilityLabel={`Selecionar membro ${item.nome}`}
                      >
                        <Text style={{ fontSize: 17, color: '#222' }}>{item.nome}</Text>
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
              />
              <PrimaryButton title="Criar" onPress={handleAddBudget} style={styles.addButton} />
            </View>
            <View style={styles.bottomSpacing}></View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}