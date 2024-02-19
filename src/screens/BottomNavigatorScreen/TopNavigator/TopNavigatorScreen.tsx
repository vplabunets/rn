import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GlobalStyles } from '@/constants/styles';

import DefaultScreen from './DefaultScreen';
import TeaScreen from './TeaScreen';
import CakesScreen from './CakesScreen';
import CakeInfo from '@/components/ItemCards/CakeInfo';
import CoffeeInfo from '@/components/ItemCards/CoffeeInfo';
import TeaInfo from '@/components/ItemCards/TeaInfo';

const TopTab = createMaterialTopTabNavigator();
const NestedScreen = createNativeStackNavigator();

export const CoffeeNestedScreen: React.FC = () => {
  return (
    <NestedScreen.Navigator
      initialRouteName="CoffeeNestedScreen"
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <NestedScreen.Screen
        name="CoffeeScreen"
        component={DefaultScreen}
        options={{
          headerShown: false,
        }}
      />
      <NestedScreen.Screen
        options={{
          headerShown: true,
        }}
        name="CoffeeInfo"
        //@ts-ignore
        component={CoffeeInfo}
      />
    </NestedScreen.Navigator>
  );
};

export const TeaNestedScreen: React.FC = () => {
  return (
    <NestedScreen.Navigator
      initialRouteName="TeaNestedScreen"
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <NestedScreen.Screen
        name="TeaScreen"
        //@ts-ignore
        title="TeaScreen"
        component={TeaScreen}
        options={{
          presentation: 'modal',
          headerShown: false,
        }}
      />
      <NestedScreen.Screen
        options={{ headerShown: false, presentation: 'card' }}
        name="TeaInfo"
        //@ts-ignore
        component={TeaInfo}
      />
    </NestedScreen.Navigator>
  );
};

export const CakesNestedScreen: React.FC = () => {
  return (
    <NestedScreen.Navigator
      initialRouteName="CakesNestedScreen"
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <NestedScreen.Screen
        name="CakeScreen"
        //@ts-ignore
        title="CakeScreen"
        component={CakesScreen}
        options={{
          headerShown: false,
        }}
      />
      <NestedScreen.Screen
        options={{ headerShown: false }}
        name="CakeInfo"
        //@ts-ignore
        component={CakeInfo}
        title="Comments"
      />
    </NestedScreen.Navigator>
  );
};
export function TopNavigator() {
  return (
    <TopTab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
        tabBarItemStyle: {
          flex: 1,
        },
        tabBarActiveTintColor: GlobalStyles.colors.accentColor,
        tabBarStyle: {
          justifyContent: 'space-between',
          width: '100%',
        },
        tabBarIndicatorStyle: {
          display: 'none',
        },
      })}
    >
      <TopTab.Screen name="Coffee" component={CoffeeNestedScreen} />
      <TopTab.Screen name="Tea" component={TeaNestedScreen} />
      <TopTab.Screen name="Cakes" component={CakesNestedScreen} />
    </TopTab.Navigator>
  );
}
