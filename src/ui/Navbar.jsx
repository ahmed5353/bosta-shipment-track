/* eslint-disable react/prop-types */
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import i18n from "../i18n";
import { usePosts } from "../PostContext";
import NavItems from "./NavItems";

function Navbar() {
  const { setIsOpen, isOpen, setIsRtl, isRtl, t } = usePosts();
  return (
    <div className="flex justify-between border-b-2 px-20 pb-2 mb-9 h-[70px]">
      <nav className="bg-white sm:px-4 pt-2 pb-1 flex w-full h-full">
        <NavItems />
        <div className="h-full flex gap-20 transition">
          <button
            className={`${
              isOpen &&
              "border-r-2 text-red-600 border-l-2 border-t-2 border-gray-300"
            } navitem  rounded-t-lg transition duration-75 px-3 py-3`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {t("track")}

            {isRtl && <NavigateBeforeIcon />}
            {!isRtl ? <KeyboardArrowRightIcon /> : ""}
          </button>
          <button className="navitem">{t("login")}</button>
          <button
            onClick={() => {
              i18n.changeLanguage(t("langCode").toLowerCase());
              setIsRtl((isRtl) => !isRtl);
            }}
            className="text-red-600 font-bold text-lg"
          >
            {t("langCode")}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
