import { combineReducers } from "@reduxjs/toolkit";
import editor from "./editor";
import config from "./config";
export const rootReducer = combineReducers({
  editor,
  config,
});

export type RootState = ReturnType<typeof rootReducer>;
