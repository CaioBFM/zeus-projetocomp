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
  const [habilidades, setHabilidades] = useState('');
  const [genero, setGenero] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefone, setTelefone] = useState('');
  const [imagem, setImagem] = useState<string | null>(null);
  const [dataNascimento, setDataNascimento] = useState('');
  const { addMember } = useMembers();
  const navigation = useNavigation<NavigationProps>();

  const pickImage = async () => {
    // Usa a nova API: mediaTypes como array de MediaType
    // Aceita apenas imagens (jpeg, jpg, png, etc)
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });
    if (!result.canceled && result.assets && result.assets.length > 0) {
      const asset = result.assets[0];
      // Verifica extensão
      const ext = asset.uri.split('.').pop()?.toLowerCase();
      if (ext !== 'jpg' && ext !== 'jpeg' && ext !== 'png') {
        Alert.alert('Erro', 'Apenas imagens JPG, JPEG ou PNG são permitidas.');
        return;
      }
      // Verifica tamanho (em bytes)
      if (asset.fileSize && asset.fileSize > 2 * 1024 * 1024) {
        Alert.alert('Erro', 'A imagem deve ter no máximo 2MB.');
        return;
      }
      setImagem(asset.uri);
    }
  };

  const validateInputs = () => {
    if (!nome || !email || !cargo || !telefone || !dataNascimento || !genero || !habilidades) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Erro', 'E-mail inválido.');
      return false;
    }
    // Validação da data de nascimento com a data atual
    const partes = dataNascimento.split('/');
    if (partes.length !== 3) {
      Alert.alert('Erro', 'Data de nascimento deve estar no formato DD/MM/YYYY.');
      return false;
    }
    const [dia, mes, ano] = partes;
    const data = new Date(`${ano}-${mes}-${dia}`);
    const hoje = new Date();
    hoje.setHours(0,0,0,0);
    if (
      isNaN(data.getTime()) ||
      Number(dia) < 1 || Number(dia) > 31 ||
      Number(mes) < 1 || Number(mes) > 12 ||
      Number(ano) < 1900 || data >= hoje
    ) {
      Alert.alert('Erro', 'A data de nascimento deve ser válida e anterior à data atual.');
      return false;
    }
    return true;
  };

  const handleAddMember = () => {
    if (!validateInputs()) return;
    const hoje = new Date();
    const dataFormatada = hoje.toLocaleDateString('pt-BR');
    addMember({
      id: Date.now().toString(),
      nome,
      dataNascimento,
      email,
      cargo,
      telefone,
      genero,
      dataIngresso: dataFormatada,
      habilidades,
      imagem: imagem || undefined,
    });
    Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
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
            <TouchableOpacity onPress={pickImage} style={styles.photoButton} accessibilityLabel="Selecionar ou tirar foto do funcionário">
              {imagem ? (
                <Image source={{ uri: imagem }} style={styles.photo} />
              ) : (
                <View style={styles.photoPlaceholder}>
                  <Text>Carregar foto</Text>
                </View>
              )}
            </TouchableOpacity>
            <Input placeholder="Nome completo" value={nome} onChangeText={setNome} /> 
            <Input placeholder='Data de nascimento DD/MM/YYYY' value={dataNascimento} onChangeText={setDataNascimento} />
            <Input placeholder="E-mail" value={email} onChangeText={setEmail} keyboardType="email-address" />
            <Input placeholder='Cargo' value={cargo} onChangeText={setCargo} />
            <Input placeholder='Telefone' value={telefone} onChangeText={setTelefone} />
            <Input placeholder='Gênero' value={genero} onChangeText={setGenero} />
            <Input placeholder='Habilidades' value={habilidades} onChangeText={setHabilidades} />
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
                accessibilityLabel="Cancelar cadastro de funcionário"
              />
              <PrimaryButton
                title="Adicionar"
                onPress={handleAddMember}
                style={styles.addButton}
                accessibilityLabel="Adicionar novo funcionário"
              />
            </View>
            <View style={styles.bottomSpacing}></View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}