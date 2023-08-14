import React, {
  useState,
  useCallback,
  DragEvent,
  MouseEvent,
  RefObject,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetSelection } from "../../../../lib/lib";
import { RootState } from "../../../../reducer";
import {
  ChangeAlign,
  ChangeBold,
  ChangeColor,
  ChangeSize,
  UnderLine,
} from "../../../../reducer/editor";
import { EditorInter } from "../../../../interface/redux/redux.interface";
type Props = {
  ScreenRef: RefObject<HTMLDivElement>;
};
function Screen({ ScreenRef }: Props) {
  const dispatch = useDispatch();
  const status = useSelector<RootState, EditorInter>((state) => state.editor);
  const [DragData, setDragData] = useState<any>(undefined);
  const [clientY, setClientY] = useState<number | undefined>(undefined);
  const [youtube, setYoutube] = useState<undefined | HTMLElement>(undefined);

  const __cursorMove = useCallback((e: any) => {
    const el = e.target;
    const selection = window.getSelection();
    const range = document.createRange();
    if (selection) {
      selection.removeAllRanges();
      range.selectNodeContents(el);
      range.collapse(false);
      selection.addRange(range);
      el.focus();
    }
  }, []);
  const __Dragover = useCallback(
    (e: DragEvent) => {
      if (e.dataTransfer) {
        e.dataTransfer.dropEffect = "move";
        if (DragData) {
          __cursorMove(e);
        }
      }
      e.stopPropagation();
      e.preventDefault();
    },
    [DragData, __cursorMove]
  );
  const __DragStart = useCallback((e: DragEvent) => {
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = "move";
      setDragData(e.target);
      setClientY(e.clientY);
    }
  }, []);
  const __MouseUp = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (youtube && e.target) {
        youtube.setAttribute("style", "top:unset;left:unset;");
        if (target.className !== "template-youtube lite") {
          if (target.className !== "editor-screen") {
            target.after(youtube);
          } else {
            if (clientY) {
              if (e.clientY > clientY) {
                target.appendChild(youtube);
              } else {
                target.insertBefore(youtube, target.firstChild);
              }
            }
          }
        } else {
          target.className = "template-youtube play";
        }
        setYoutube(undefined);
      }
    },
    [youtube, clientY]
  );
  const __MouseDown = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.className === "template-youtube lite") {
      target.setAttribute("style", "opacity:0.4;");
      setYoutube(target);
      setClientY(e.clientY);
    }
  }, []);
  const __Drop = useCallback(
    (e: DragEvent) => {
      if (DragData) {
        const target = e.target as HTMLElement;
        if (target.className !== "editor-screen") {
          target.after(DragData);
        } else {
          if (clientY) {
            if (e.clientY > clientY) {
              target.appendChild(DragData);
            } else {
              target.insertBefore(DragData, target.firstChild);
            }
          }
        }
        setDragData(undefined);
      }
    },
    [DragData, clientY]
  );
  return (
    <div
      id="screen"
      className="editor-screen"
      contentEditable="true"
      ref={ScreenRef}
      suppressContentEditableWarning={true}
      onBlur={() => {
        const selection = window.getSelection();
        if (selection) {
          const range: Range = selection.getRangeAt(0);

          SetSelection(range);
        }
      }}
      onDragOver={__Dragover}
      onDragStart={__DragStart}
      onSelect={() => {
        const select = window.getSelection();
        if (
          select?.focusNode &&
          select.focusNode.nodeValue &&
          select.focusNode.parentElement
        ) {
          const style = window.getComputedStyle(select.focusNode.parentElement);
          const fontSize = parseInt(style.fontSize);
          const align = style.textAlign;
          const bold = document.queryCommandState("bold");
          const underline = document.queryCommandState("underline");
          const color = document.queryCommandValue("ForeColor");
  
          if (fontSize !== status.size) {
            dispatch(ChangeSize(fontSize));
          }
          if (underline !== status.underline) {
            dispatch(UnderLine(underline));
          }
          if (bold !== status.bold) {
            dispatch(ChangeBold(bold));
          }
          if (align !== status.align && align !== "start") {
            dispatch(ChangeAlign(align));
          }
          if (color !== status.color) {
            dispatch(ChangeColor(color));
          }
        }
      }}
      onMouseUp={__MouseUp}
      onMouseDown={__MouseDown}
      onDrop={__Drop}
    >
      <div></div>
    </div>
  );
}

export default React.memo(Screen);
