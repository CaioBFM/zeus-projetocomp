import { useWindowDimensions, View, Image } from 'react-native';
import LogoBranca from '../assets/images/logoBranca.png';
import LogoAzul from '../assets/images/logoAzul.png';

interface AppLogoProps {
  style?: object;
  variant?: 'branca' | 'azul'; // default: branca
}

export default function AppLogo({ style, variant = 'branca' }: AppLogoProps) {
  const { width } = useWindowDimensions();
  const minWidth = 120;
  const maxWidth = 320;
  const logoWidth = Math.max(minWidth, Math.min(width * 0.4, maxWidth));
  const logoSource = variant === 'azul' ? LogoAzul : LogoBranca;

  return (
    <View style={style}>
      <Image
        source={logoSource}
        style={{ width: logoWidth, height: logoWidth * 0.4, resizeMode: 'contain' }}
      />
    </View>
  );
}
