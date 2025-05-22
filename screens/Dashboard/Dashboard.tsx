// Dashboard screen component
// Displays a welcome message and a header
import { View, Text, useWindowDimensions, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import AppLogo from '../../components/Logo';
import Sidebar from '../../components/Sidebar';
import { useMembers } from '../../components/MembersContext';
import { useBudget } from '../../components/BudgetContext';
import styles from './Dashboard.styles';
import { DashboardLegend } from '../../components/DashboardLegend';
import { DashboardPieChart } from '../../components/DashboardPieChart';
import { DashboardEmployeesTable } from '../../components/MembersTable';

export default function Dashboard() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { membros } = useMembers();
  const { Budget } = useBudget();
  const { width } = useWindowDimensions();
  const isTablet = width > 768;

  // Dados para o gráfico de orçamentos
  const total = Budget.length;
  const pendente = Budget.filter(b => b.status === 'Em análise').length;
  const aprovado = Budget.filter(b => b.status === 'Aprovado').length;
  const rejeitado = Budget.filter(b => b.status === 'Reprovado').length;
  const chartSeries = [
    { value: pendente, color: '#FBBF24' },
    { value: aprovado, color: '#22C55E' },
    { value: rejeitado, color: '#EF4444' },
  ];

  return (
    <View style={styles.container}>
      <Sidebar navigation={navigation} />
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <AppLogo variant="branca" />
        </View>
        {/* Linha com título e botão à direita */}
        <View style={styles.headerRow}>
          <Text style={styles.text}>Dashboard</Text>
        </View>
        <View style={styles.linha} />
        {/* Gráfico de orçamentos */}
        <View style={styles.cardOrcamento}>
          <Text style={styles.cardOrcamentoTitulo}>Card de orçamentos</Text>
          <Text style={styles.cardOrcamentoTotal}>Total de orçamentos: {total}</Text>
          <View style={styles.orcamentoRow}>
            <DashboardLegend pendente={pendente} aprovado={aprovado} rejeitado={rejeitado} />
            <DashboardPieChart pendente={pendente} aprovado={aprovado} rejeitado={rejeitado} isTablet={isTablet} />
          </View>
        </View>
        {/* Tabela de funcionários */}
        <DashboardEmployeesTable
          membros={membros}
          title="Funcionários cadastrados"
          emptyText="Nenhum funcionário cadastrado."
          columns={[
            { key: 'sn', label: 'S/N', width: 36, align: 'center' },
            { key: 'nome', label: 'Nome', width: 120 },
            { key: 'cargo', label: 'Cargo', width: 90 },
            { key: 'habilidades', label: 'Habilidades', width: 120 }
          ]}
          getRowData={(item) => ({
            sn: item.id,
            nome: item.nome,
            cargo: item.cargo,
            habilidades: item.habilidades,
          })}
        />
      </View>
    </View>
  );
}
