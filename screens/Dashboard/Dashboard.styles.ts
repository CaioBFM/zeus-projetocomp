import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const isTablet = width > 600;

export default StyleSheet.create({
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
  container: {
    flex: 1,
    backgroundColor: '#06213D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: isTablet ? 28 : 22,
    fontWeight: 'bold',
    marginBottom: 0,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  content: {
    flex: 1,
    paddingHorizontal: isTablet ? width * 0.08 : width * 0.04,
    paddingVertical: isTablet ? height * 0.04 : height * 0.03,
    paddingTop: isTablet ? height * 0.11 : height * 0.15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    maxWidth: 700,
    alignSelf: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: isTablet ? height * 0.03 : height * 0.04,
    right: isTablet ? width * 0.06 : width * 0.04,
    zIndex: 10,
  },
  cardsContainer: {
    alignItems: 'center',
    paddingVertical: isTablet ? 48 : 24,
    gap: isTablet ? 24 : 12,
    flexGrow: 1,
    justifyContent: 'flex-start',
    width: '100%',
  },
  headerRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: isTablet ? 32 : 16,
    paddingRight: isTablet ? 8 : 0,
    paddingLeft: 2,
  },
  headerButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'transparent',
    marginTop: -5,
    alignSelf: 'flex-start',
  },
  linha: {
    width: '100%',
    height: isTablet ? 3 : 2,
    backgroundColor: '#fff',
    opacity: 0.7,
    marginBottom: isTablet ? 18 : 10,
    borderRadius: 2,
  },
});
