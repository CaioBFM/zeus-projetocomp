import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, Alert, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PrimaryButton from './PrimaryButton'; // Importe o componente PrimaryButton

const { width, height } = Dimensions.get('window');

interface CardField {
  key: string;
  label: string;
  value: string;
  editable?: boolean;
  keyboardType?: 'default' | 'numeric' | 'email-address';
}

interface Props {
  imagem?: string; // Agora opcional
  fields: CardField[];
  onFieldChange?: (key: string, value: string) => void;
  onDelete?: () => void;
  title?: string;
  expandable?: boolean;
  cardSize?: 'default' | 'small' | 'large'; // Novo prop para tamanho
  hideImage?: boolean; // Novo prop para esconder imagem
  isBudgetCard?: boolean; // Novo prop para identificar card de orçamento
  status?: string; // Status do orçamento
  onStatusChange?: (status: string) => void; // Handler para mudar status
}

// Altere o nome do componente para Card
const Card: React.FC<Props> = ({ imagem, fields, onFieldChange, onDelete, title, expandable = true, cardSize = 'default', hideImage = false, isBudgetCard = false, status, onStatusChange }) => {
  const [expanded, setExpanded] = useState(false);
  const [editField, setEditField] = useState<string | null>(null);
  const [editValues, setEditValues] = useState(() => {
    const obj: Record<string, string> = {};
    fields.forEach(f => { obj[f.key] = f.value; });
    return obj;
  });

  useEffect(() => {
    // Atualiza editValues se fields mudar
    setEditValues(() => {
      const obj: Record<string, string> = {};
      fields.forEach(f => { obj[f.key] = f.value; });
      return obj;
    });
  }, [fields]);

  const handleEdit = (key: string) => setEditField(key);
  const handleChange = (key: string, value: string) => {
    setEditValues(prev => ({ ...prev, [key]: value }));
  };
  const handleEditEnd = (key: string) => {
    setEditField(null);
    if (onFieldChange) onFieldChange(key, editValues[key]);
  };
  const handleDelete = () => {
    Alert.alert(
      'Excluir',
      'Tem certeza que deseja excluir?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Excluir', style: 'destructive', onPress: () => onDelete && onDelete() },
      ],
      { cancelable: true }
    );
  };

  // O título principal do card (ex: nome)
  const mainTitle = title || (fields[0]?.value ?? '');

  // Cores de fundo para status de orçamento
  let statusBg = {};
  if (isBudgetCard) {
    if (status === 'Em análise') statusBg = { backgroundColor: '#FFED83' };
    else if (status === 'Reprovado') statusBg = { backgroundColor: '#F87171' };
    else if (status === 'Aprovado') statusBg = { backgroundColor: '#90ee90' };
  }
  const cardStyle = [
    styles.card,
    cardSize === 'small' && { width: CARD_WIDTH * 0.8, minHeight: CARD_HEIGHT * 0.7, paddingVertical: 10, paddingHorizontal: 8 }, // Orçamentos
    cardSize === 'large' && { width: CARD_WIDTH * 1.1, minHeight: CARD_HEIGHT * 1.2, paddingVertical: 32, paddingHorizontal: 24 }, // Membros
    statusBg,
  ];

  return (
    <View style={cardStyle}>
      <View style={styles.rowTop}>
        {!hideImage && imagem && <Image source={{ uri: imagem }} style={styles.imagem} />}
        <Text style={styles.nome}>{mainTitle}</Text>
        {expandable && (
          <TouchableOpacity onPress={() => setExpanded(!expanded)}>
            <Icon name={expanded ? 'chevron-up' : 'chevron-down'} size={28} color="#222" style={styles.iconExpand} />
          </TouchableOpacity>
        )}
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
              {fields.map(field => (
                <View style={styles.infoRow} key={field.key}>
                  <Text style={styles.infoLabelBold}>{field.label}:</Text>
                  {editField === field.key && field.editable ? (
                    <View style={{ flex: 1 }}>
                      <TextInput
                        value={editValues[field.key]}
                        onChangeText={v => handleChange(field.key, v)}
                        onBlur={() => handleEditEnd(field.key)}
                        autoFocus
                        style={[styles.infoLabel, { borderBottomWidth: 1, borderColor: '#ccc', minWidth: 60 }]}
                        keyboardType={field.keyboardType || 'default'}
                      />
                    </View>
                  ) : (
                    <Text style={styles.infoLabel}>{editValues[field.key]}</Text>
                  )}
                  {field.editable && (
                    <TouchableOpacity style={styles.editIcon} onPress={() => handleEdit(field.key)}>
                      <Icon name="pencil" size={18} color="#888" />
                    </TouchableOpacity>
                  )}
                </View>
              ))}
              <View style={{ height: 10 }} />
              {onDelete && (
                <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
                  <Icon name="trash" size={18} color="#fff" style={{ marginRight: 6 }} />
                  <Text style={styles.deleteButtonText}>Excluir</Text>
                </TouchableOpacity>
              )}
              {/* Botões Aprovar/Reprovar para orçamento em análise */}
              {isBudgetCard && status === 'Em análise' && onStatusChange && (
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 16, gap: 8 }}>
                  <PrimaryButton
                    title="Reprovar"
                    onPress={() => onStatusChange('Reprovado')}
                    style={{ flex: 1, backgroundColor: '#ef4444' }}
                  />
                  <PrimaryButton
                    title="Aprovar"
                    onPress={() => onStatusChange('Aprovado')}
                    style={{ flex: 1, backgroundColor: '#22c55e', marginRight: 8 }}
                  />
                </View>
              )}
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
    fontSize: width > 900 ? 32 : width > 600 ? 24 : 0.050 * width,
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
  statusButton: {
    flex: 1,
    paddingVertical: width > 600 ? 14 : 10,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  statusButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: width > 600 ? 18 : 15,
  },
});

export default Card;