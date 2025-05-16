// Sidebar component reutilizável
import { View, TouchableOpacity, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

interface SidebarProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export default function Sidebar({ navigation }: SidebarProps) {
  const { width } = useWindowDimensions();
  const isTablet = width > 600;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Conteúdo da Sidebar
  const SidebarContent = () => (
    <View style={styles.sidebar}>
      <TouchableOpacity onPress={() => { setSidebarOpen(false); navigation.navigate('Dashboard'); }}>
        <Text style={styles.sidebarItem}>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { setSidebarOpen(false); navigation.navigate('Members'); }}>
        <Text style={styles.sidebarItem}>Funcionários</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { setSidebarOpen(false); navigation.navigate('Budget'); }}>
        <Text style={styles.sidebarItem}>Orçamentos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { setSidebarOpen(false); navigation.navigate('Welcome'); }}>
        <Text style={styles.sidebarItem}>Sair</Text>
      </TouchableOpacity>
    </View>
  );

  if (isTablet) {
    return <SidebarContent />;
  }

  // Mobile: botão de menu + drawer
  return (
    <>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => setSidebarOpen(true)}
      >
        <Feather name="menu" size={32} color="#fff" />
      </TouchableOpacity>
      {sidebarOpen && (
        <View style={styles.sidebarDrawer}>
          <TouchableOpacity onPress={() => setSidebarOpen(false)} style={styles.closeButton}>
            <Feather name="x" size={28} color="#fff" />
          </TouchableOpacity>
          <SidebarContent />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: 220,
    backgroundColor: '#02101e',
    paddingTop: 48,
    paddingHorizontal: 16,
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
    alignItems: 'flex-start',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },
  sidebarItem: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 32,
    fontWeight: '500',
    opacity: 0.85,
  },
  menuButton: {
    position: 'absolute',
    top: 45,
    left: 16,
    zIndex: 20,
  },
  sidebarDrawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 240,
    backgroundColor: '#02101e',
    zIndex: 30,
    elevation: 20,
    paddingTop: 64,
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },
  closeButton: {
    position: 'absolute',
    top: 24,
    right: 12,
    zIndex: 40,
  },
});
