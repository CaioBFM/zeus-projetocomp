// Tela de Dashboard
// Exibe um gráfico com o status de orçamentos e uma tabela de membros (atualizada em tempo real)
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import AppLogo from '../../components/Logo';
import Sidebar from '../../components/Sidebar';
import { useMembers } from '../../components/MembersContext';
import { useBudget } from '../../components/BudgetContext';
import styles from './Dashboard.styles';
import { DashboardEmployeesTable } from '../../components/MembersTable';
import GenericPieChartCard from '../../components/GenericPieChartCard';

export default function Dashboard() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { membros } = useMembers();
  const { Budget } = useBudget();

  return (
    <View style={styles.container}>
      <Sidebar navigation={navigation} />
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <AppLogo variant="branca" />
        </View>
        <View style={styles.headerRow}>
          <Text style={styles.text}>Dashboard</Text>
        </View>
        <View style={styles.linha} />

        {/* Gráfico de orçamentos */}
        <ScrollView>
          <GenericPieChartCard
            title="Card de orçamentos"
            totalText={`Total de orçamentos: ${Budget.length}`}
            data={[
              { value: Budget.filter(b => b.status === 'Em análise').length, color: '#FBBF24', label: 'Pendente' },
              { value: Budget.filter(b => b.status === 'Aprovado').length, color: '#22C55E', label: 'Aprovado' },
              { value: Budget.filter(b => b.status === 'Reprovado').length, color: '#EF4444', label: 'Rejeitado' }
            ]}
            legendPosition="right"
            style={{ marginBottom: 32 }}
          />

          {/* Exemplo de implementação de gráfico de membros por gênero */}
          {/* <GenericPieChartCard
            title="Membros por Gênero"
            totalText={`Total: ${membros.length}`}
            data={[
              { value: membros.filter(m => m.genero === 'Masculino').length, color: '#3B82F6', label: 'Masculino' },
              { value: membros.filter(m => m.genero === 'Feminino').length, color: '#F472B6', label: 'Feminino' },
              { value: membros.filter(m => m.genero === 'Outro').length, color: 'orange', label: 'Outro' },
            ]}
            legendPosition="right"
            style={{ marginBottom: 32 }}
          /> */}

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
          />
        </ScrollView>
      </View>
    </View>
  );
}
