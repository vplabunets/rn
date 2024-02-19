import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { GlobalStyles } from '@/constants/styles';

import PromotionsScreen from '@/screens/BottomNavigatorScreen/PromotionsScreen';
import CartScreen from '@/screens/BottomNavigatorScreen/CartScreen';
import ProfileScreen from '@/screens/BottomNavigatorScreen/ProfileScreen';
import MyOrdersScreen from '@/screens/BottomNavigatorScreen/MyOrdersScreen';
import { TopNavigator } from '@/screens/BottomNavigatorScreen/TopNavigator/TopNavigatorScreen';

import IconButton from '@/UI/IconButton';

const BottomTab = createBottomTabNavigator();

export const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" animated translucent={true} />
      <BottomTab.Navigator
        screenOptions={({ route, navigation }) => ({
          headerStatusBarHeight: 20,
          tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
          tabBarItemStyle: { width: 100 },
          tabBarActiveTintColor: GlobalStyles.colors.accentColor,
          tabBarIcon: ({ color, size, focused }: { color: string; size: number; focused: boolean }) => {
            let iconName: string = '';
            if (route.name === 'Menu') iconName = 'restaurant';
            else if (route.name === 'Promo') iconName = 'star';
            else if (route.name === 'Cart') iconName = 'cart';
            else if (route.name === 'Orders') iconName = 'list';
            else if (route.name === 'Profile') iconName = 'person';
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
        <BottomTab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      </BottomTab.Navigator>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 30 : 60,
  },
});
