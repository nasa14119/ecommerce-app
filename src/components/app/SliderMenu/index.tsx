import { useToogle } from "@/hooks/useToogle";
import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./styles.module.css";
function SliderMenu({
  state,
  setState,
}: {
  state: boolean;
  setState: (v?: boolean) => void;
}) {
  const [localState, setLocalState] = useToogle();
  useEffect(() => {
    if (state) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [state]);
  useEffect(() => {
    setLocalState(state);
  }, [state]);
  return (
    <>
      <div
        className={`fixed inset-0 backdrop-blur-sm ${
          state ? "block" : "hidden"
        } ${styles.background}`}
        onClick={() => setState()}
      ></div>
      <div className={`${styles.slider_menu}`} data-state={localState}>
        <span>Products</span>
      </div>
    </>
  );
}
export function useSliderMenu(): [() => ReactNode, () => void] {
  const [state, setState] = useToogle();
  const handleState = () => {
    setState();
  };
  const Menu = () => <SliderMenu setState={setState} state={state} />;
  return [Menu, handleState];
}
