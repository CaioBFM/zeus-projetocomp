// Members screen component
// Displays a welcome message and a header
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './Members.styles';
import AppLogo from '../../components/Logo';
import Sidebar from '../../components/Sidebar';
import { RootStackParamList } from '../../types/navigation';
import CardMembro from '../../components/Card';
import PrimaryButton from '../../components/PrimaryButton';
import Feather from 'react-native-vector-icons/Feather';

export default function Members() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      {/* Sidebar lateral (tablet/desktop) ou drawer (mobile) */}
      <Sidebar navigation={navigation} />
      {/* Conteúdo principal centralizado */}
      <View style={styles.content}>
        {/* Logo fixa no topo direito */}
        <View style={styles.logoContainer}>
          <AppLogo variant="branca" />
        </View>
        {/* Linha com título e botão à direita */}
        <View style={styles.headerRow}>
          <Text style={styles.text}>Funcionários</Text>
          <TouchableOpacity style={styles.headerButton} onPress={() => alert('Adicionar funcionário!')}>
            <Feather name="plus" size={26} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.linha} />
        {/* Lista de cards centralizada */}
        <ScrollView contentContainerStyle={styles.cardsContainer}>
          <CardMembro
            nome="Caio"
            imagem="https://wallpapers.com/images/hd/cute-anime-profile-pictures-dfgqyw4wcfhurbkk.jpg"
            onPress={() => alert('ola')}
          />
          <CardMembro
            nome="Enzo"
            imagem="https://i.pinimg.com/originals/66/b3/24/66b3247f3e0ed3fa5279221874f628ac.jpg"
            onPress={() => alert('ola')}
          />
          <CardMembro
            nome="Menezes"
            imagem="https://i.pinimg.com/736x/9d/57/c0/9d57c0de79ae1db10982d1a7b70b9ab9.jpg"
            onPress={() => alert('ola')}
          />
          <CardMembro
            nome="Chapolin"
            imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNytxh56jwPUhoM9CfIoAaqx8sp4UGPkBpXw&s"
            onPress={() => alert('ola')}
          />
          <CardMembro
            nome="Mayron"
            imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ5YBx5noU3Gn4ier4-3XHy3P0_rIjGxYPqw&s"
            onPress={() => alert('ola')}
          />
        </ScrollView>
      </View>
    </View>
  );
}
