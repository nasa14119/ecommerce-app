import { useToogle } from "@/hooks/useToogle";
import styles from "./styles.module.css";
export function LangBtn(props: any) {
  const [state, setValue] = useToogle();
  return (
    <>
      <button className={`font-bold`} onClick={() => setValue()} {...props}>
        {props.title}
      </button>
      <span
        className={`pl-2 flex gap-x-2 text-sm z-50 
          ${state === null && "hidden"}
          ${state ? `${styles.btn_open}` : `${styles.btn_close}`}
        `}
      >
        <a href="/">ES</a>
        <span>/</span>
        <a href="/en">EN</a>
      </span>
    </>
  );
}
export function LangBtnDesktop({ title }: { title: string }) {
  return (
    <div className={`${styles.lang_desktop} group cursor-default`}>
      <span className="font-bold absolute inset-0 grid place-content-center group-hover:-translate-x-full">
        {title}
      </span>
      <span
        className={`${styles.lang_opt_desktop} translate-x-full group-hover:translate-x-0`}
      >
        <a href="/">ES</a>
        <span>/</span>
        <a href="/en">EN</a>
      </span>
    </div>
  );
}
