import { fetchShipingData } from "../services/apiOrders";
import { usePosts } from "../PostContext";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  const {
    orderNum,
    setOrderData,
    setIsOpen,
    isOpen,
    setOrderNum,
    t,
    setIsLoading,
  } = usePosts();

  async function fetchShipping() {
    setIsLoading(true);
    const data = await fetchShipingData(orderNum);
    setOrderData(data);
    setIsLoading(false);
  }

  function handleTrackingId(e) {
    e.preventDefault();
    fetchShipping();
    setIsOpen(false);
    setOrderNum("");
  }
  return (
    <div
      className={`absolute ${
        !isOpen && "hidden"
      } top-[68px]  end-[315px] p-8 border-solid border-2 bg-white border-gray-300 rounded-lg rounded-tr-none flex`}
    >
      <form onSubmit={handleTrackingId} className="flex">
        <input
          type="search"
          value={orderNum}
          placeholder={t("trackingNumber")}
          onChange={(e) => setOrderNum(e.target.value)}
          className="w-28 rounded-l-md border p-3 text-sm focus:outline-none placeholder:text-stone-400 sm:w-60"
        />
        <div
          onClick={handleTrackingId}
          className="bg-red-600 flex cursor-pointer items-center w-10 justify-center rounded-e-md text-white"
        >
          <SearchIcon />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
