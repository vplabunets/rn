import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@/types/types';
import TeaScreen from '../TeaScreen';
import TeaInfo from '@/components/TeaInfo';

type TeaNestedScreenNavigationProp = NavigationProp<RootStackParamList, 'TeaInfo'>;
type TeaInfoRouteProp = RouteProp<RootStackParamList, 'TeaInfo'>;

type TeaNestedScreenProps = {
  navigation: TeaNestedScreenNavigationProp;
  route: TeaInfoRouteProp;
};
const NestedScreen = createNativeStackNavigator();

const TeaNestedScreen: React.FC<TeaNestedScreenProps> = ({ navigation }) => {
  return (
    <NestedScreen.Navigator
      initialRouteName="TeaNestedScreen"
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <NestedScreen.Screen
        name="TeaScreen"
        component={TeaScreen}
        options={{
          headerShown: false,
        }}
      />
      <NestedScreen.Screen
        options={{
          headerShown: false,
        }}
        name="TeaInfo"
        // @ts-ignore
        component={TeaInfo}
      />
    </NestedScreen.Navigator>
  );
};
