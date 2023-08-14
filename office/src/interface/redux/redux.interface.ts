export interface EditorInter {
  bold: boolean;
  color: undefined | string;
  align: string;
  underline: boolean;
  size: number;
}

export interface Toastface {
  active: boolean;
  content: string;
}

export interface Popupinterface {
  active: boolean;
  type: string;
  content: any;
}
