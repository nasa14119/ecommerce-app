import {
  RiMenuFill as Hamburger,
  RiShoppingBagLine as Bag,
} from "react-icons/ri";
import { useSliderMenu } from ".";
import { LangBtn } from "@components/home/LangBtn";
import type { PROP_LANG } from "@i18n/index";
import { getRelativeLocaleUrl } from "astro:i18n";
type Props = {
  locale: string;
  menu: PROP_LANG["nav"];
} & React.HTMLAttributes<HTMLOrSVGElement>;
const urls = [
  "/store",
  "/",
  "/about",
  "/contact",
] as (keyof PROP_LANG["nav"]["nav_items"])[];
export function HamburgerBtn({ menu, locale, ...rest }: Props) {
  const [Menu, openMenu] = useSliderMenu();
  return (
    <>
      <Hamburger onClick={() => openMenu()} {...rest} />
      <Menu>
        <ul className="*:font-bold">
          <li className="text-xl pb-4">
            <header className="">{menu.headers[0]}</header>
            <main className="flex flex-col font-normal w-full items-center">
              {urls.map((url) => (
                <a href={getRelativeLocaleUrl(locale, url)} key={url}>
                  {menu.nav_items[url]}
                </a>
              ))}
            </main>
          </li>
          <li className="text-xl">
            <button>{menu.headers[1]}</button>
          </li>
          <li className="text-xl">
            <a href="/store/catalog">{menu.headers[2]}</a>
          </li>
        </ul>
        <div className="absolute bottom-5 left-5 flex items-end">
          <LangBtn title={menu.btn} />
        </div>
      </Menu>
    </>
  );
}
