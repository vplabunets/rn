import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import MainScreen from '@/screens/MainScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PromotionsScreen from '@/screens/PromotionsScreen';
import CartScreen from '@/screens/CartScreen';
import MyOrdersScreen from '@/screens/MyOrdersScreen';
import SettingsScreen from '@/screens/SettingsScreen';
import TeaScreen from '@/screens/TeaScreen';
import CakesScreen from '@/screens/CakesScreen';
import IconButton from '@/UI/IconButton';
import { GlobalStyles } from '@/constants/styles';

const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function TopNavigator() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Coffee" component={MainScreen} />
      <TopTab.Screen name="Tea" component={TeaScreen} />
      <TopTab.Screen name="Cakes" component={CakesScreen} />
    </TopTab.Navigator>
  );
}

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" animated />

      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={({ route, navigation }) => ({
            headerStatusBarHeight: 0,
            tabBarLabelStyle: { fontSize: 14 },
            tabBarItemStyle: { width: 100 },
            tabBarActiveTintColor: GlobalStyles.colors.accentColor,
            tabBarStyle: {
              backgroundColor: GlobalStyles.colors.lightAccentColor,
            },
            tabBarIcon: ({ color, size, focused }: { color: string; size: number; focused: boolean }) => {
              let iconName: string;
              if (route.name === 'Menu') iconName = 'restaurant';
              else if (route.name === 'Promotions') iconName = 'star';
              else if (route.name === 'Cart') iconName = 'cart';
              else if (route.name === 'My orders') iconName = 'list';
              else if (route.name === 'Settings') iconName = 'settings-outline';
              return (
                <IconButton
                  icon={iconName}
                  color={focused ? GlobalStyles.colors.accentColor : color}
                  onPress={() => navigation.navigate(route.name)}
                />
              );
            },
          })}
        >
          <BottomTab.Screen name="Menu" component={TopNavigator} options={{ headerShown: false }} />
          <BottomTab.Screen name="Promotions" component={PromotionsScreen} options={{ headerShown: false }} />
          <BottomTab.Screen name="Cart" component={CartScreen} />
          <BottomTab.Screen name="My orders" component={MyOrdersScreen} />
          <BottomTab.Screen name="Settings" component={SettingsScreen} />
        </BottomTab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
  },
});
