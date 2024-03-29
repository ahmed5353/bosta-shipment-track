import Address from "./Address";
import ReportProblem from "./ReportProblem";
import ShipmentDetails from "./ShipmentDetails";
import ShippingData from "./ShippingStatus";

function HomePage() {
  return (
    <div className="p-5">
      {/* padding */}
      <ShippingData />

      <section className="flex mt-12 gap-4">
        <div className="w-3/5 pe-4">
          <ShipmentDetails />
        </div>

        <aside>
          <Address />
          <ReportProblem />
        </aside>
      </section>
    </div>
  );
}

export default HomePage;
