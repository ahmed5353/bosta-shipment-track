import { usePosts } from "../PostContext";

function Address() {
  const { t } = usePosts();
  return (
    <div className="flex flex-col justify-center ">
      <p className="mb-4 text-lg font-semibold"> {t("deliveryAddress")}</p>
      <div className="bg-gray-50 p-4 rounded-lg">
        <p>{t("adress")}</p>
      </div>
    </div>
  );
}

export default Address;
