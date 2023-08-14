import { createSlice } from "@reduxjs/toolkit";
import { EditorInter } from "../../interface/redux/redux.interface";

const editorReducer = createSlice({
  name: "editor",
  initialState: {
    bold: false,
    color: undefined,
    align: "left",
    underline: false,
    size: 15,
  },
  reducers: {
    ChangeSize: (state, { payload }: { payload: number }) => {
      state.size = payload;
    },
    UnderLine: (state, { payload }: { payload: boolean }) => {
      state.underline = payload;
    },
    ChangeAlign: (state, { payload }: { payload: string }) => {
      state.align = payload;
    },
    ChangeColor: (
      state: EditorInter,
      { payload }: { payload: string | undefined }
    ) => {
      state.color = payload;
    },
    ChangeBold: (state, { payload }: { payload: boolean }) => {
      state.bold = payload;
    },
  },
});

export const { ChangeAlign, UnderLine, ChangeSize, ChangeBold, ChangeColor } =
  editorReducer.actions;

export default editorReducer.reducer;
