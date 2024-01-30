import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@/types/types';
import MainScreen from '../MainScreen';
import CoffeeInfo from '@/components/CoffeeInfo';

type CoffeeNestedScreenNavigationProp = NavigationProp<RootStackParamList, 'CoffeeInfo'>;
type CoffeeInfoRouteProp = RouteProp<RootStackParamList, 'CoffeeInfo'>;

type CoffeeNestedScreenProps = {
  navigation: CoffeeNestedScreenNavigationProp;
  route: RouteProp<RootStackParamList, 'CoffeeInfo'>;
};
const NestedScreen = createNativeStackNavigator();

const CoffeeNestedScreen: React.FC<CoffeeNestedScreenProps> = ({ navigation }) => {
  return (
    <NestedScreen.Navigator
      initialRouteName="CoffeeNestedScreen"
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <NestedScreen.Screen
        name="CoffeeScreen"
        component={MainScreen}
        options={{
          headerShown: false,
        }}
      />
      <NestedScreen.Screen
        options={{
          headerShown: false,
        }}
        name="CoffeeInfo"
        //@ts-ignore
        component={CoffeeInfo}
      />
    </NestedScreen.Navigator>
  );
};
