import { usePosts } from "../PostContext";
import { extractDate, formatDate } from "../helpers";
import OrderDetails from "./OrderDetails";
import StepperT from "./ShippingStepper";

function ShippingData() {
  const { orderData, t } = usePosts();
  const { CurrentStatus } = orderData;
  return (
    <section className="pb-5 bg-white border-solid border-2 border-gray-10 rounded">
      <header className="border-b-4 border-[#f3f2f3] flex justify-between p-5">
        <div>
          <p className="text-gray-400 text-sm  tracking-tight">
            {t("shipmentNumber")} {orderData?.TrackingNumber}
          </p>
          <h3
            className={`text-lg font-extrabold ${
              CurrentStatus.state === "DELIVERED_TO_SENDER" && "text-yellow"
            } ${CurrentStatus.state === "CANCELLED" && "text-dark-red"} ${
              CurrentStatus.state === "DELIVERED" && "text-dark-green"
            }`}
          >
            {t(CurrentStatus.state)}
          </h3>
        </div>

        <OrderDetails
          header={t("LastUpdate")}
          content={t(formatDate(CurrentStatus?.timestamp))}
        />
        <OrderDetails header={t("TraderName")} content={orderData?.provider} />
        <OrderDetails
          header={t("DeliveryTime")}
          content={extractDate(orderData?.PromisedDate) ?? "Not selected"}
        />
      </header>
      <StepperT orderData={orderData} />
    </section>
  );
}

export default ShippingData;
