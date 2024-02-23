import { auth } from '../../firebase/config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { authSlice } from './authReducer';
import { AppDispatch } from '../store';

export const authSignInUser =
  ({ email, password }: { email: string; password: string }) =>
  async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      return user;
    } catch (error: any) {
      console.log('error', error);
      console.log('error.message', error.message);
    }
  };

export const authSignUpUser =
  ({ email, password, name }: { email: string; password: string; name: string }) =>
  async (dispatch: AppDispatch) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        const { uid, displayName } = await auth.currentUser;

        dispatch(
          authSlice.actions.updateUserProfile({
            userId: uid,
            name: displayName,
            email: email,
          })
        );
      }
    } catch (error: any) {
      console.log('error', error);
      console.log('error.message', error.message);
    }
  };

export const authSignOutUser = () => async (dispatch: AppDispatch) => {
  await signOut(auth);
  dispatch(authSlice.actions.authSignOut());
};

export const authStateChangeUser = () => async (dispatch: AppDispatch) => {
  onAuthStateChanged(auth, user => {
    if (user) {
      const userUpdateProfile = {
        name: user.displayName,
        userId: user.uid,
        email: user.email,
      };
      dispatch(authSlice.actions.updateUserProfile(userUpdateProfile));
      dispatch(authSlice.actions.authStateChange({ stateChange: true }));
    } else {
      // User is signed out
    }
  });
};
