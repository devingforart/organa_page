import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MenuState {
  selectedKey: string;
}

const initialState: MenuState = {
  selectedKey: localStorage.getItem('selectedMenuItem') || '1', // Recuperar del localStorage
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    selectMenuItem: (state, action: PayloadAction<string>) => {
      state.selectedKey = action.payload;
      localStorage.setItem('selectedMenuItem', action.payload); // Guardar en localStorage
    },
  },
});

export const { selectMenuItem } = menuSlice.actions;
export default menuSlice.reducer;
