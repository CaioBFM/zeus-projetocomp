import { View, Text, FlatList, ScrollView, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { Member } from './MembersContext';

interface TableColumn {
  key: string;
  label: string;
  width?: number; // largura fixa em px
  align?: 'left' | 'center' | 'right';
}

interface DashboardEmployeesTableProps {
  membros: Member[];
  title?: string;
  emptyText?: string;
  columns?: TableColumn[];
  getRowData?: (item: Member) => Record<string, string>;
}

const { width } = Dimensions.get('window');
const isTablet = width > 600;

const styles = StyleSheet.create({
  funcionariosCard: {
    backgroundColor: '#fff',
    borderRadius: isTablet ? 24 : 18,
    padding: isTablet ? 28 : 18,
    marginBottom: isTablet ? 32 : 24,
    alignSelf: 'center',
    width: isTablet ? 440 : 340,
    elevation: 2,
    maxHeight: isTablet ? 340 : 260,
  },
  funcionariosTitulo: {
    fontWeight: 'bold',
    fontSize: isTablet ? 22 : 18,
    marginBottom: 8,
  },
  tableHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#e5e7eb',
    paddingBottom: 4,
    marginBottom: 2,
    backgroundColor: '#fff',
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    color: '#222',
    fontSize: isTablet ? 16 : 14,
    paddingHorizontal: 4,
  },
  funcionarioLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#f3f4f6',
    paddingVertical: isTablet ? 10 : 8,
    minHeight: isTablet ? 48 : 44,
    maxHeight: isTablet ? 48 : 44,
    backgroundColor: '#fff',
  },
  cell: {
    fontSize: isTablet ? 16 : 14,
    color: '#222',
    paddingHorizontal: 4,
  },
  funcionariosEmpty: {
    color: '#888',
    textAlign: 'center',
    marginTop: 12,
  },
});

export function DashboardEmployeesTable({ membros, title = 'Funcionários cadastrados', emptyText = 'Nenhum funcionário cadastrado.', columns, getRowData }: DashboardEmployeesTableProps) {
  // Padrão para Dashboard
  const defaultColumns: TableColumn[] = [
    { key: 'sn', label: 'S/N', width: 36, align: 'center' },
    { key: 'nome', label: 'Nome', width: 120 },
    { key: 'cargo', label: 'Função', width: 90 },
    { key: 'habilidades', label: 'Habilidades', width: 120 }
  ];
  const cols = columns || defaultColumns;

  return (
    <View style={styles.funcionariosCard}>
      <Text style={styles.funcionariosTitulo}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ minWidth: cols.reduce((acc, c) => acc + (c.width || 80), 0) }}>
          {/* Cabeçalho */}
          <View style={styles.tableHeader}>
            {cols.map((col) => (
              <Text
                key={col.key}
                style={[
                  styles.tableHeaderCell,
                  { width: col.width || 80, textAlign: col.align || 'left' }
                ]}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {col.label}
              </Text>
            ))}
          </View>
          {/* Linhas */}
          <FlatList
            data={membros}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => {
              // S/N global
              const row = getRowData
                ? getRowData(item)
                : {
                    sn: (index + 1).toString(),
                    nome: item.nome,
                    cargo: item.cargo,
                    habilidades: item.habilidades,
                  };
              return (
                <View style={styles.funcionarioLinha}>
                  {cols.map((col) => (
                    <Text
                      key={col.key}
                      style={[
                        styles.cell,
                        { width: col.width || 80, textAlign: col.align || 'left' }
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {row[col.key] || ''}
                    </Text>
                  ))}
                </View>
              );
            }}
            ListEmptyComponent={<Text style={styles.funcionariosEmpty}>{emptyText}</Text>}
            style={{ flexGrow: 0, maxHeight: styles.funcionariosCard.maxHeight }}
            contentContainerStyle={{ paddingBottom: 0 }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
