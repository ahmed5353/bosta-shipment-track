import { usePosts } from "../PostContext";
import BostaIcon from "../icons/BostaIcon";
import BostaIconAr from "../icons/BostaIconAr";
import NavList from "./NavList";

function NavItems() {
  const { t } = usePosts();
  return (
    <div className="w-4/6 container flex flex-wrap  items-center gap-36 mx-auto">
      <a href="#" className="flex">
        {t("langCode") === "EN" ? <BostaIconAr /> : <BostaIcon />}
      </a>
      <button
        data-collapse-toggle="mobile-menu"
        type="button"
        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  "
        aria-controls="mobile-menu-2"
        aria-expanded="false"
      ></button>
      <div className="hidden  w-full md:block md:w-auto" id="mobile-menu">
        <NavList />
      </div>
    </div>
  );
}

export default NavItems;
