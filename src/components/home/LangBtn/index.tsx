import { useToogle } from "@/hooks/useToogle";
import styles from "./styles.module.css";
export function LangBtn(props: any) {
  const [state, setValue] = useToogle();
  return (
    <>
      <button className={`font-bold`} onClick={() => setValue()} {...props}>
        lang
      </button>
      <span
        className={`pl-2 flex gap-x-2 text-sm z-50 
          ${state === null && "hidden"}
          ${state ? `${styles.btn_open}` : `${styles.btn_close}`}
        `}
      >
        <button>ES</button>
        <span>/</span>
        <button>EN</button>
      </span>
    </>
  );
}
export function LangBtnDesktop() {
  const [state, setValue] = useToogle();
  return (
    <>
      <button className={`font-bold`} onClick={() => setValue()}>
        lang
      </button>
      <span
        className={`pl-2 flex gap-x-2 text-sm z-50 
          ${state === null && "hidden"}
          ${state ? `${styles.btn_open}` : `${styles.btn_close}`}
        `}
      >
        <button>ES</button>
        <span>/</span>
        <button>EN</button>
      </span>
    </>
  );
}
