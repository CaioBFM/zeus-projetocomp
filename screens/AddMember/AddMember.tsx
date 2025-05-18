// AddMember screen component
// Handles adding a new member (employee) and navigation to the Members screen
import { View, Text, Alert, KeyboardAvoidingView, Platform, ScrollView, SafeAreaView, useWindowDimensions } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import * as ImagePicker from 'expo-image-picker';
import { Image, TouchableOpacity } from 'react-native';
import { useMembers } from '../../components/MembersContext';

import Input from '../../components/Input';
import PrimaryButton from '../../components/PrimaryButton';
import AppLogo from '../../components/Logo';
import styles from './AddMember.styles';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'AddMember'>;


export default function AddMember() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [matricula, setMatricula] = useState('');
  const [imagem, setImagem] = useState<string | null>(null);
  const { addMember } = useMembers();
  const navigation = useNavigation<NavigationProps>();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // mantém compatível com a versão instalada
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });
    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImagem(result.assets[0].uri);
    }
  };

  const validateInputs = () => {
    if (!nome || !email || !idade || !matricula) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Erro', 'E-mail inválido.');
      return false;
    }
    if (isNaN(Number(idade))) {
      Alert.alert('Erro', 'Idade inválida.');
      return false;
    }
    return true;
  };

  const handleAddMember = () => {
    if (!validateInputs()) return;
    addMember({
      id: Date.now().toString(),
      nome,
      email,
      idade: Number(idade),
      matricula,
      imagem: imagem || undefined,
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
            <Text style={[styles.title, { fontSize: isLandscape ? 28 : 24, marginBottom: isLandscape ? 40 : 24 }]}>Adicionar Funcionário</Text>
            <TouchableOpacity onPress={pickImage} style={{ alignSelf: 'center', marginBottom: 16 }}>
              {imagem ? (
                <Image source={{ uri: imagem }} style={{ width: 100, height: 100, borderRadius: 50 }} />
              ) : (
                <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: '#eee', justifyContent: 'center', alignItems: 'center' }}>
                  <Text>Carregar foto</Text>
                </View>
              )}
            </TouchableOpacity>
            <Input placeholder="Nome completo" value={nome} onChangeText={setNome} />
            <Input placeholder="E-mail" value={email} onChangeText={setEmail} keyboardType="email-address" />
            <Input placeholder='Gênero' />
            <Input placeholder='Cargo' />
            <Input placeholder='Área' />
            <Input placeholder='Data de nascimento DD/MM/YYYY' />
            <Input placeholder='Data de ingresso DD/MM/YYYY' />
            <Input placeholder='Número de telefone' />
            <Input placeholder="Idade" value={idade} onChangeText={setIdade} keyboardType="numeric" />
            <Input placeholder="Matrícula" value={matricula} onChangeText={setMatricula} />
            <PrimaryButton title="Adicionar" onPress={handleAddMember} />
            <View style={{ height: 30 }}></View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}