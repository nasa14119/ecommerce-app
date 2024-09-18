import {
  RiMenuFill as Hamburger,
  RiShoppingBagLine as Bag,
} from "react-icons/ri";
import { useSliderMenu } from ".";
import { LangBtn } from "@components/home/LangBtn";
export function HamburgerBtn(props: any) {
  const [Menu, openMenu] = useSliderMenu();
  return (
    <>
      <Hamburger onClick={() => openMenu()} {...props} />
      <Menu>
        <ul className="*:font-bold">
          <li className="text-xl pb-4">
            <header className="">navigation</header>
            <main className="flex flex-col font-normal w-full items-center">
              <a href="/store">store</a>
              <a href="/">home</a>
              <a href="/about">about</a>
              <a href="/contact">contact</a>
            </main>
          </li>
          <li className="text-xl">
            <button>acount</button>
          </li>
          <li className="text-xl">
            <a href="/store/catalog">catalog</a>
          </li>
        </ul>
        <div className="absolute bottom-5 left-5 flex items-end">
          <LangBtn />
        </div>
      </Menu>
    </>
  );
}
