import { RootState } from '../store';

export const stateChange = (state: RootState) => state.auth.stateChange;
export const name = (state: RootState) => state.auth.name;
export const email = (state: RootState) => state.auth.email;
