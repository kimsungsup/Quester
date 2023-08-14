import { createSlice } from "@reduxjs/toolkit";
type StateType = {
  productionPath: "test" | "production";
  // popup: Popupinterface;
  // toast: Toastface;
  lang: "kor" | "eng";
  isLoading: boolean;
};

const initialState: StateType = {
  productionPath: "test",
  lang: "kor",
  // popup: {
  //   active: false,
  //   type: "report",
  //   content: "",
  // },
  // toast: {
  //   active: false,
  //   content: "",
  // },
  isLoading: false,
};

const configReducer = createSlice({
  name: "config",
  initialState,
  reducers: {
    // PopupChange: (state, action: PayloadAction<Popupinterface>) => {
    //   state.popup = action.payload;
    // },
    // ToastChange: (state, { payload }: { payload: Toastface }) => {
    //   state.toast = payload;
    // },
    LangChange: (state: StateType, { payload }: { payload: "kor" | "eng" }) => {
      state.lang = payload;
    },
    LoadingChange: (state: StateType, { payload }: { payload: boolean }) => {
      state.isLoading = payload;
    },
  },
});

export const { LoadingChange, LangChange } = configReducer.actions;

export default configReducer.reducer;
