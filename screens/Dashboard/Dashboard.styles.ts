import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isTablet = width > 600;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06213D',
  },
  content: {
    flex: 1,
    paddingHorizontal: isTablet ? 32 : 16,
    paddingVertical: isTablet ? 36 : 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: isTablet ? 40 : 32,
    right: isTablet ? 32 : 16,
    zIndex: 10,
  },
  text: {
    color: '#fff',
    fontSize: isTablet ? 28 : 22,
    fontWeight: 'bold',
    marginTop: isTablet ? 40 : 32,
    alignSelf: 'flex-start',
    marginLeft: isTablet ? 8 : 0,
  },
  cardOrcamento: {
    backgroundColor: '#fff',
    borderRadius: isTablet ? 24 : 18,
    padding: isTablet ? 28 : 18,
    marginTop: isTablet ? 32 : 24,
    marginBottom: isTablet ? 32 : 24,
    alignSelf: 'center',
    width: isTablet ? 440 : 340,
    elevation: 2,
  },
  cardOrcamentoTitulo: {
    fontWeight: 'bold',
    fontSize: isTablet ? 22 : 18,
    marginBottom: 8,
  },
  cardOrcamentoTotal: {
    fontWeight: 'bold',
    fontSize: isTablet ? 20 : 16,
    marginBottom: 8,
  },
  orcamentoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  orcamentoLegenda: {
    marginLeft: 0,
    minWidth: isTablet ? 120 : 80,
    flex: 2,
    justifyContent: 'center',
  },
  orcamentoLegendaCentralizada: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignSelf: 'center',
    marginRight: isTablet ? 24 : 8,
    gap: isTablet ? 10 : 6,
  },
  orcamentoLegendaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  orcamentoLegendaCor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 6,
  },
  orcamentoLegendaCorPendente: {
    backgroundColor: '#FBBF24',
  },
  orcamentoLegendaCorAprovado: {
    backgroundColor: '#22C55E',
  },
  orcamentoLegendaCorRejeitado: {
    backgroundColor: '#EF4444',
  },
  orcamentoLegendaTexto: {
    color: '#222',
    fontWeight: 'normal',
    marginRight: 0,
  },
  orcamentoLegendaTextoPendente: {
    color: '#FBBF24',
    fontWeight: 'bold',
    marginRight: 4,
  },
  orcamentoLegendaTextoAprovado: {
    color: '#22C55E',
    fontWeight: 'bold',
    marginRight: 4,
  },
  orcamentoLegendaTextoRejeitado: {
    color: '#EF4444',
    fontWeight: 'bold',
    marginRight: 4,
  },
  orcamentoGraficoContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    minWidth: isTablet ? 180 : 120,
    marginLeft: isTablet ? 48 : 24,
  },
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
  funcionarioLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#f3f4f6',
    paddingVertical: 8,
    minHeight: 44,
    maxHeight: 44,
  },
  funcionarioScroll: {
    flex: 1,
  },
  funcionarioNome: {
    fontSize: isTablet ? 18 : 16,
    flexShrink: 1,
  },
  funcionarioCargo: {
    color: '#64748b',
    fontSize: isTablet ? 16 : 14,
    marginLeft: 12,
  },
  funcionariosEmpty: {
    color: '#888',
    textAlign: 'center',
    marginTop: 12,
  },
  headerRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: isTablet ? 32 : 16,
    paddingRight: isTablet ? 8 : 0,
    paddingLeft: isTablet ? 8 : 2,
    minHeight: isTablet ? 48 : 32,
  },
  linha: {
    width: '100%',
    height: isTablet ? 3 : 2,
    backgroundColor: '#fff',
    opacity: isTablet ? 0.6 : 0.7,
    marginBottom: isTablet ? 24 : 12,
    borderRadius: isTablet ? 3 : 2,
    alignSelf: 'center',
    maxWidth: isTablet ? 700 : '100%',
  },
});
