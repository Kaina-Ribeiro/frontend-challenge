import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import Router from 'next/router';
import { RootState } from '../store';

interface UserProps {
  user: {
    name: string;
    email: string;
  };
}

const initialState: UserProps = {
  user: { name: '', email: '' },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action, 'actionnnn');

      state.user = action.payload;
      Cookies.set(process.env.USER_TOKEN as string, JSON.stringify(action.payload));
    },

    userLogout: (state) => {
      Router.push('/');
      Cookies.remove(process.env.USER_TOKEN as string);
      state.user = { name: '', email: '' };
    },
  },
});

export const { setUser, userLogout } = userSlice.actions;

export const userState = (state: RootState) => state.user;

export default userSlice.reducer;
