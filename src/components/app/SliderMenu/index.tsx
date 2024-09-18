import { useToogle } from "@/hooks/useToogle";
import { useEffect, type HtmlHTMLAttributes, type ReactNode } from "react";
import styles from "./styles.module.css";
interface Props extends HtmlHTMLAttributes<HTMLDivElement> {
  state: boolean | null;
  setState: (v?: boolean) => void;
  children?: ReactNode;
}
function SliderMenu({ state, setState, children, className, ...rest }: Props) {
  useEffect(() => {
    if (state) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [state]);
  return (
    <>
      <div
        className={`fixed inset-0 backdrop-blur-sm ${
          state ? "block" : "hidden"
        } ${styles.background}`}
        onClick={() => setState()}
      ></div>
      <div
        className={`${styles.slider_menu} ${className}`}
        data-state={state}
        {...rest}
      >
        {children}
      </div>
    </>
  );
}
export function useSliderMenu() {
  const [state, setState] = useToogle();
  const Menu: (props?: HtmlHTMLAttributes<HTMLDivElement>) => JSX.Element = (
    props
  ) => <SliderMenu {...props} setState={setState} state={state} />;
  return [Menu, setState] as const;
}
