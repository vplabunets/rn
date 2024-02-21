import React from 'react';

import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { authSignOutUser } from '@/redux/auth/authOperations';
import { email, name } from '@/redux/auth/authSelector';

import { GlobalStyles } from '@/constants/styles';

import { Ionicons } from '@expo/vector-icons';
import IconButton from '@/UI/IconButton';

const ProfileScreen = () => {
  const userName = useSelector(name);
  const userEmail = useSelector(email);
  const dispatch = useDispatch();
  console.log(userName);

  // function handleLogOut() {
  //   console.log('logout');
  //   dispatch(authSignOutUser());
  // }

  function handleLogOut() {
    console.log('logout');
    dispatch(authSignOutUser());
  }

  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <View style={styles.photoContainer}>
          <Image style={styles.image} source={{}}></Image>
        </View>
        <Text style={styles.name}>{userName}</Text>
        <Text style={styles.email}>{userEmail}</Text>
        <View style={styles.logoutContainer}>
          <IconButton icon="log-out" color={GlobalStyles.colors.accentColor} onPress={() => handleLogOut()} />
        </View>
      </View>
      <View style={styles.userData}>
        <View>
          <View style={styles.userDataItem}>
            <Ionicons name="phone-portrait" size={30} color={GlobalStyles.colors.accentColor} />
            <Text style={styles.itemDescription}>Phone</Text>
            <Text style={styles.item}>+38097 777 77 77</Text>
          </View>
          <View style={styles.userDataItem}>
            <Ionicons name="location" size={30} color={GlobalStyles.colors.accentColor} />
            <Text style={styles.itemDescription}>City</Text>
            <Text style={styles.item}>Odesa</Text>
          </View>
          <View style={styles.userDataItem}>
            <Ionicons name="disc" size={30} color={GlobalStyles.colors.accentColor} />
            <Text style={styles.itemDescription}>Category</Text>
            <Text style={styles.item}>Gold</Text>
          </View>
        </View>
        <Pressable style={styles.editProfileContainer} onPress={() => console.log('Edit profile')}>
          <Ionicons name="pencil-sharp" size={24} color={GlobalStyles.colors.accentColor} />
          <Text style={styles.editProfileText}> Edit Profile</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background,
  },
  userInfoContainer: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: GlobalStyles.colors.lightAccentColor,
  },
  photoContainer: {
    width: 100,
    height: 100,
    marginBottom: 8,
    borderRadius: 5,
    backgroundColor: GlobalStyles.colors.background,
  },
  image: {},
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: GlobalStyles.colors.accentColor,
  },
  email: {
    color: GlobalStyles.colors.accentColor,
  },
  logoutContainer: {
    position: 'absolute',
    top: 18,
    right: 28,
  },
  userData: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 24,
  },
  userDataItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemDescription: {
    marginLeft: 8,
    color: GlobalStyles.colors.lightAccentColor,
    fontSize: 14,
    marginRight: 8,
    width: 100,
  },
  item: {
    fontWeight: 'bold',
    color: GlobalStyles.colors.accentColor,
  },
  editProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  editProfileText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: GlobalStyles.colors.accentColor,
  },
});
