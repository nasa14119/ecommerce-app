import {
  RiMenuFill as Hamburger,
  RiShoppingBagLine as Bag,
} from "react-icons/ri";
import { useSliderMenu } from ".";
export function HamburgerBtn(props: any) {
  const [Menu, openMenu] = useSliderMenu();
  return (
    <div>
      <Hamburger onClick={() => openMenu()} {...props} />
      <Menu />
    </div>
  );
}
