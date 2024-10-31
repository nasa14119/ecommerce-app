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
//TODO make the nav lang btn for desktop, and add the change language funcionality
export function LangBtnDesktop() {
  return (
    <div className={`${styles.lang_desktop} group cursor-default`}>
      <span className="font-bold absolute inset-0 grid place-content-center group-hover:-translate-x-full">
        lang
      </span>
      <span
        className={`text-sm absolute inset-0 grid place-content-center translate-x-full group-hover:translate-x-0 ${styles.lang_opt_desktop}`}
      >
        <button>ES</button>
        <span>/</span>
        <button>EN</button>
      </span>
    </div>
  );
}
