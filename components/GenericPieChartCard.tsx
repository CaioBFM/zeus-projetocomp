import React from 'react';
import { View, Text, StyleSheet, ViewStyle, Dimensions } from 'react-native';
import PieChart from 'react-native-pie-chart';
import type { Slice } from 'react-native-pie-chart';

export interface PieChartLegendItem {
  value: number;
  color: string;
  label: string;
}

interface GenericPieChartCardProps {
  title: string;
  totalText?: string;
  data: PieChartLegendItem[];
  legendPosition?: 'right';
  style?: ViewStyle;
}

const { width } = Dimensions.get('window');
const isTablet = width > 600;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: isTablet ? 24 : 18,
    padding: isTablet ? 28 : 18,
    marginBottom: isTablet ? 32 : 24,
    alignSelf: 'center',
    width: isTablet ? 440 : 340,
    elevation: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: isTablet ? 22 : 18,
    marginBottom: 8,
  },
  total: {
    fontWeight: 'bold',
    fontSize: isTablet ? 20 : 16,
    marginBottom: 8,
  },
  chartRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 8,
  },
  chartColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginTop: 8,
  },
  legend: {
    marginTop: 0,
    marginLeft: isTablet ? 18 : 12,
  },
  legendBottom: {
    marginTop: isTablet ? 18 : 12,
    marginLeft: 0,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  legendColor: {
    width: isTablet ? 16 : 14,
    height: isTablet ? 16 : 14,
    borderRadius: 4,
    marginRight: 8,
  },
  legendValue: {
    fontWeight: 'bold',
    marginRight: 8,
    fontSize: isTablet ? 16 : 14,
  },
  legendLabel: {
    color: '#222',
    fontSize: isTablet ? 16 : 14,
  },
});

function PieChartWithLegend({ data, widthAndHeight = 120, cover = 0.6, legendPosition = 'right', style }: {
  data: PieChartLegendItem[];
  widthAndHeight?: number;
  cover?: number;
  legendPosition?: 'right';
  style?: object;
}) {
  const chartSeries: Slice[] = data.map(item => ({ value: item.value, color: item.color }));
  const legendStyle = legendPosition === 'right' ? styles.legend : styles.legendBottom;
  return (
    <View style={legendPosition === 'right' ? styles.chartRow : styles.chartColumn}>
      <PieChart
        widthAndHeight={widthAndHeight}
        series={chartSeries}
        cover={cover}
        style={{ alignSelf: 'center' }}
      />
      <View style={legendStyle}>
        {data.map((item, idx) => (
          <View key={idx} style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: item.color }]} />
            <Text style={[styles.legendValue, { color: item.color }]}>{item.value}</Text>
            <Text style={styles.legendLabel}>{item.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default function GenericPieChartCard({
  title,
  totalText,
  data,
  legendPosition = 'right',
  style
}: GenericPieChartCardProps) {
  return (
    <View style={[styles.card, style]}>
      <Text style={styles.title}>{title}</Text>
      {totalText && <Text style={styles.total}>{totalText}</Text>}
      <PieChartWithLegend
        data={data}
        widthAndHeight={legendPosition === 'right' ? 120 : 140}
        legendPosition={legendPosition}
        style={{ marginTop: 8 }}
      />
    </View>
  );
}
