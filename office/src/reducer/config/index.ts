import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Popupinterface,
  Toastface,
} from "../../interface/redux/redux.interface";
type StateType = {
  productionPath: "test" | "production";
  popup: Popupinterface;
  toast: Toastface;
  isLoading: boolean;
};

const initialState: StateType = {
  productionPath: "test",
  popup: {
    active: false,
    type: "report",
    content: "",
  },
  toast: {
    active: false,
    content: "",
  },
  isLoading: false,
};

const configReducer = createSlice({
  name: "config",
  initialState,
  reducers: {
    PopupChange: (state, action: PayloadAction<Popupinterface>) => {
      state.popup = action.payload;
    },
    ToastChange: (state, { payload }: { payload: Toastface }) => {
      state.toast = payload;
    },
    LoadingChange: (state, { payload }: { payload: boolean }) => {
      state.isLoading = payload;
    },
  },
});

export const { PopupChange, ToastChange, LoadingChange } =
  configReducer.actions;

export default configReducer.reducer;
