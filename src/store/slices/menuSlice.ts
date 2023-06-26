import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

interface MenuState {
  open: boolean;
}

const initialState: MenuState = {
  open: false,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    controlMenuState: (state) => {
      state.open = !state.open;
    },
    closeMenu: (state) => {
      state.open = false;
    },
  },
});

export const { controlMenuState, closeMenu } = menuSlice.actions;

export const menuState = (state: RootState) => state.menu.open;

export default menuSlice.reducer;
