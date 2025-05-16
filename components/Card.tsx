import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, Alert, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

interface Props {
  nome: string,
  imagem: string,
  email?: string,
  idade?: number,
  matricula?: string,
  onPress?: (novoNome?: string) => void; // Permite passar o novo nome
  onDelete?: () => void;
}

// Altere o nome do componente para Card
const Card: React.FC<Props> = ({ nome, imagem, email, idade, matricula, onPress, onDelete }) => {
  const [expanded, setExpanded] = useState(false);
  const [editField, setEditField] = useState<string | null>(null);
  const [editValues, setEditValues] = useState({
    nome: nome,
    email: email || '',
    idade: idade !== undefined ? String(idade) : '',
    matricula: matricula || '',
  });

  const handleEdit = (field: string) => {
    setEditField(field);
  };

  const handleChange = (field: string, value: string) => {
    setEditValues(prev => ({ ...prev, [field]: value }));
  };

  const handleEditEnd = () => {
    if (editField === 'nome' && typeof onPress === 'function') {
      onPress(editValues.nome); // Atualiza o nome no componente pai
    }
    setEditField(null);
  };

  const handleDelete = () => {
    // Exibe o Alert de confirmação
    Alert.alert(
      'Excluir Perfil',
      'Tem certeza que deseja excluir este perfil?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: () => {
            if (onDelete) onDelete();
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.card}>
      <View style={styles.rowTop}>
        <Image source={{ uri: imagem }} style={styles.imagem} />
        <Text style={styles.nome}>{editValues.nome}</Text>
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          <Icon name={expanded ? 'chevron-up' : 'chevron-down'} size={28} color="#222" style={styles.iconExpand} />
        </TouchableOpacity>
      </View>
      {expanded && (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ width: '100%', flex: 1 }}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 120 : 80}
          enabled
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
            <View style={styles.infoContainer}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabelBold}>Nome:</Text>
                {editField === 'nome' ? (
                  <View style={{ flex: 1 }}>
                    <TextInput
                      value={editValues.nome}
                      onChangeText={v => handleChange('nome', v)}
                      onBlur={handleEditEnd}
                      autoFocus
                      style={[styles.infoLabel, { borderBottomWidth: 1, borderColor: '#ccc', minWidth: 60 }]}
                    />
                  </View>
                ) : (
                  <Text style={styles.infoLabel}>{editValues.nome}</Text>
                )}
                <TouchableOpacity style={styles.editIcon} onPress={() => handleEdit('nome')}>
                  <Icon name="pencil" size={18} color="#888" />
                </TouchableOpacity>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabelBold}>Email:</Text>
                {editField === 'email' ? (
                  <View style={{ flex: 1 }}>
                    <TextInput
                      value={editValues.email}
                      onChangeText={v => handleChange('email', v)}
                      onBlur={handleEditEnd}
                      autoFocus
                      style={[styles.infoLabel, { borderBottomWidth: 1, borderColor: '#ccc', minWidth: 60 }]}
                      keyboardType="email-address"
                    />
                  </View>
                ) : (
                  <Text style={styles.infoLabel}>{editValues.email}</Text>
                )}
                <TouchableOpacity style={styles.editIcon} onPress={() => handleEdit('email')}>
                  <Icon name="pencil" size={18} color="#888" />
                </TouchableOpacity>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabelBold}>Idade:</Text>
                {editField === 'idade' ? (
                  <View style={{ minWidth: 40 }}>
                    <TextInput
                      value={editValues.idade}
                      onChangeText={v => handleChange('idade', v.replace(/[^0-9]/g, ''))}
                      onBlur={handleEditEnd}
                      autoFocus
                      style={[styles.infoLabel, { borderBottomWidth: 1, borderColor: '#ccc', minWidth: 40 }]}
                      keyboardType="numeric"
                      maxLength={3}
                    />
                  </View>
                ) : (
                  <Text style={styles.infoLabel}>{editValues.idade}</Text>
                )}
                <TouchableOpacity style={styles.editIcon} onPress={() => handleEdit('idade')}>
                  <Icon name="pencil" size={18} color="#888" />
                </TouchableOpacity>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabelBold}>Matrícula:</Text>
                {editField === 'matricula' ? (
                  <View style={{ minWidth: 60 }}>
                    <TextInput
                      value={editValues.matricula}
                      onChangeText={v => handleChange('matricula', v)}
                      onBlur={handleEditEnd}
                      autoFocus
                      style={[styles.infoLabel, { borderBottomWidth: 1, borderColor: '#ccc', minWidth: 60 }]}
                    />
                  </View>
                ) : (
                  <Text style={styles.infoLabel}>{editValues.matricula}</Text>
                )}
                <TouchableOpacity style={styles.editIcon} onPress={() => handleEdit('matricula')}>
                  <Icon name="pencil" size={18} color="#888" />
                </TouchableOpacity>
              </View>
              <View style={{ height: 10 }} />
              <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
                <Icon name="trash" size={18} color="#fff" style={{ marginRight: 6 }} />
                <Text style={styles.deleteButtonText}>Excluir Perfil</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </View>
  );
};

const CARD_HEIGHT = height > 900 ? 0.12 * height : height > 700 ? 0.15 * height : 0.19 * height;
const CARD_WIDTH = width > 900 ? width * 0.45 : width > 600 ? width * 0.65 : width * 0.93;
const IMAGE_SIZE = CARD_HEIGHT * 0.9;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: width > 600 ? 24 : 18,
    paddingVertical: width > 900 ? 36 : width > 600 ? 24 : 14,
    paddingHorizontal: width > 900 ? 40 : width > 600 ? 28 : 12,
    marginVertical: width > 900 ? 22 : width > 600 ? 14 : 8,
    width: CARD_WIDTH,
    minHeight: CARD_HEIGHT,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 6,
    elevation: 4,
    borderWidth: 1.5,
    borderColor: '#dbeafe',
  },
  rowTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: width > 600 ? 10 : 6,
  },
  imagem: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: width > 600 ? 18 : 12,
    marginRight: width > 900 ? 32 : width > 600 ? 22 : 12,
    backgroundColor: '#e0e0e0',
  },
  nome: {
    flex: 1,
    fontSize: width > 900 ? 32 : width > 600 ? 24 : 0.055 * width,
    fontWeight: '700',
    color: '#1e293b',
  },
  iconExpand: {
    marginLeft: width > 600 ? 16 : 8,
    marginRight: 2,
  },
  infoContainer: {
    marginTop: width > 600 ? 16 : 10,
    backgroundColor: '#f8fafc',
    borderRadius: width > 600 ? 16 : 12,
    padding: width > 900 ? 28 : width > 600 ? 18 : 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: width > 600 ? 10 : 6,
    flexWrap: 'wrap',
  },
  infoLabelBold: {
    fontWeight: 'bold',
    color: '#222',
    fontSize: width > 900 ? 20 : width > 600 ? 17 : 15,
    marginRight: 4,
  },
  infoLabel: {
    color: '#222',
    fontSize: width > 900 ? 20 : width > 600 ? 17 : 15,
    marginRight: 8,
  },
  editIcon: {
    marginLeft: 2,
    marginRight: width > 600 ? 12 : 8,
    padding: 2,
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ef4444',
    borderRadius: width > 600 ? 12 : 8,
    paddingVertical: width > 900 ? 16 : width > 600 ? 10 : 6,
    paddingHorizontal: width > 900 ? 16 : width > 600 ? 10 : 6,
    minWidth: 0,
    marginTop: width > 600 ? 18 : 12,
    marginBottom: 2,
    shadowColor: '#ef4444',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
    alignSelf:'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: width > 900 ? 19 : width > 600 ? 16 : 15,
  },
});

export default Card;