import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PromotionsScreen from '@/screens/PromotionsScreen';
import CartScreen from '@/screens/CartScreen';
import MyOrdersScreen from '@/screens/MyOrdersScreen';
import SettingsScreen from '@/screens/SettingsScreen';
import IconButton from '@/UI/IconButton';
import { GlobalStyles } from '@/constants/styles';
import { TopNavigator } from '@/screens/nestedScreens/TopNavigator';

const BottomTab = createBottomTabNavigator();

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" animated />
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={({ route, navigation }) => ({
            headerStatusBarHeight: 2,
            tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
            tabBarItemStyle: { width: 100 },
            tabBarActiveTintColor: GlobalStyles.colors.accentColor,
            tabBarIcon: ({ color, size, focused }: { color: string; size: number; focused: boolean }) => {
              let iconName: string;
              if (route.name === 'Menu') iconName = 'restaurant';
              else if (route.name === 'Promo') iconName = 'star';
              else if (route.name === 'Cart') iconName = 'cart';
              else if (route.name === 'Orders') iconName = 'list';
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
          <BottomTab.Screen name="Promo" component={PromotionsScreen} options={{ headerShown: false }} />
          <BottomTab.Screen name="Cart" component={CartScreen} />
          <BottomTab.Screen name="Orders" component={MyOrdersScreen} />
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
