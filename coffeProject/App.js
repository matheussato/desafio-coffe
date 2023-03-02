import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

const CoffeShop = () => {
  return (
    <View>
     <Text>Bem vindo ao CoffeShop</Text>
      <Image
        source={{
          uri: 'https://images5.alphacoders.com/452/thumbbig-452034.webp',
        }}
        style={{width: 600, height: 300}}
      />

    </View>
  );
};

export default CoffeShop;

