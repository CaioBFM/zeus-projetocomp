// Dashboard screen component
// Displays a welcome message and a header
import { View, Text, useWindowDimensions, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import AppLogo from '../../components/Logo';
import Sidebar from '../../components/Sidebar';
import PieChart from 'react-native-pie-chart';
import { useMembers } from '../../components/MembersContext';
import { useBudget } from '../../components/BudgetContext';
import styles from './Dashboard.styles';

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
        <View style={styles.headerRow}>
          <Text style={styles.text}>Dashboard</Text>
        </View>
        <View style={styles.linha} />
        {/* Gráfico de orçamentos */}
        <View style={styles.cardOrcamento}>
          <Text style={styles.cardOrcamentoTitulo}>Card de orçamentos</Text>
          <Text style={styles.cardOrcamentoTotal}>{total} Total de orçamentos</Text>
          <View style={styles.orcamentoRow}>
            <View style={styles.orcamentoLegenda}>
              <View style={styles.orcamentoLegendaItem}>
                <View style={[styles.orcamentoLegendaCor, styles.orcamentoLegendaCorPendente]} />
                <Text style={styles.orcamentoLegendaTextoPendente}>{pendente}</Text>
                <Text style={styles.orcamentoLegendaTexto}>Pendente</Text>
              </View>
              <View style={styles.orcamentoLegendaItem}>
                <View style={[styles.orcamentoLegendaCor, styles.orcamentoLegendaCorAprovado]} />
                <Text style={styles.orcamentoLegendaTextoAprovado}>{aprovado}</Text>
                <Text style={styles.orcamentoLegendaTexto}>Aprovado</Text>
              </View>
              <View style={styles.orcamentoLegendaItem}>
                <View style={[styles.orcamentoLegendaCor, styles.orcamentoLegendaCorRejeitado]} />
                <Text style={styles.orcamentoLegendaTextoRejeitado}>{rejeitado}</Text>
                <Text style={styles.orcamentoLegendaTexto}>Rejeitado</Text>
              </View>
            </View>
            <View style={styles.orcamentoGraficoContainer}>
              <PieChart
                widthAndHeight={isTablet ? 160 : 120}
                series={chartSeries}
                cover={0.6}
              />
            </View>
          </View>
        </View>
        {/* Tabela de funcionários */}
        <View style={styles.funcionariosCard}>
          <Text style={styles.funcionariosTitulo}>Funcionários cadastrados</Text>
          <FlatList
            data={membros}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.funcionarioLinha}>
                <ScrollView horizontal={true} style={styles.funcionarioScroll} contentContainerStyle={{ flexGrow: 1 }} showsHorizontalScrollIndicator={false}>
                  <Text style={styles.funcionarioNome}>{item.nome}</Text>
                  <Text style={styles.funcionarioCargo}>{item.cargo}</Text>
                </ScrollView>
              </View>
            )}
            ListEmptyComponent={<Text style={styles.funcionariosEmpty}>Nenhum funcionário cadastrado.</Text>}
            style={{ flexGrow: 0 }}
            contentContainerStyle={{ paddingBottom: 0 }}
          />
        </View>
      </View>
    </View>
  );
}
