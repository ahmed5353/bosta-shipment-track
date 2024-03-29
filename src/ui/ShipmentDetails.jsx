/* eslint-disable react/prop-types */
import { usePosts } from "../PostContext";
import DataTable from "./ShippmentTable";

function ShipmentDetails() {
  const { t } = usePosts();
  return (
    <div>
      <h3 className="font-bold text-lg mb-5">{t("SippmentDetails")}</h3>
      <DataTable />
    </div>
  );
}

export default ShipmentDetails;
