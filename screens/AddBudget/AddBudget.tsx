// AddMember screen component
// Handles adding a new member (employee) and navigation to the Members screen
import { View, Text, Alert, KeyboardAvoidingView, Platform, ScrollView, SafeAreaView, useWindowDimensions } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import * as ImagePicker from 'expo-image-picker';
import { Image, TouchableOpacity } from 'react-native';
import { useBudget } from '../../components/BudgetContext';

import Input from '../../components/Input';
import PrimaryButton from '../../components/PrimaryButton';
import AppLogo from '../../components/Logo';
import styles from './AddBudget.styles';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'AddMember'>;


export default function AddBudget() {
  const [numero, setNumero] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valorEstimado, setValorEstimado] = useState('');
  const [status, setStatus] = useState('');
  const [cliente, setCliente] = useState('');
  const { addBudget } = useBudget();
  const navigation = useNavigation<NavigationProps>();

  const validateInputs = () => {
    if (!numero || !descricao || !valorEstimado || !status) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return false;
    }
    return true;
  };

  const handleAddBudget = () => {
    if (!validateInputs()) return;
    addBudget({
      id: Date.now().toString(),
      numero,
      descricao,
      valorEstimado,
      status,
      cliente,
    });
    navigation.goBack();
  };

  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      >
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
          {/* Logo no topo do conteúdo, com espaçamento */}
          <View style={[styles.logoContainer, { marginBottom: 32 }]}> 
            <AppLogo variant="branca" />
          </View>
          <View style={styles.card}>
            <Text style={[styles.title, { fontSize: isLandscape ? 28 : 24, marginBottom: isLandscape ? 40 : 24 }]}>Adicionar Orçamento</Text>
            <Input placeholder="Número" value={numero} onChangeText={setNumero} keyboardType='numeric' />
            <Input placeholder="Descrição" value={descricao} onChangeText={setDescricao} />
            <Input placeholder='Valor estimado' value={valorEstimado} onChangeText={setValorEstimado} />
            <Input placeholder='Custos previstos' />
            <Input placeholder="Cliente Associado" value={cliente} onChangeText={setCliente} />
            <Input placeholder="Status" value={status} onChangeText={setStatus} />
            <PrimaryButton title="Adicionar" onPress={handleAddBudget} />
            <View style={styles.bottomSpacing}></View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}