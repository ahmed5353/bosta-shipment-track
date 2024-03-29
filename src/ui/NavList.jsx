import { usePosts } from "../PostContext";

function NavList() {
  const { t } = usePosts();
  return (
    <ul className="flex flex-col  mt-4 md:flex-row gap-8 md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <li>
        <a href="#" className="navitem">
          {t("main")}
        </a>
      </li>
      <li>
        <a href="#" className="navitem">
          {t("prices")}
        </a>
      </li>
      <li>
        <a href="#" className="navitem">
          {t("callCenter")}
        </a>
      </li>
    </ul>
  );
}

export default NavList;
