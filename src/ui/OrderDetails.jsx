/* eslint-disable react/prop-types */

function OrderDetails({ header, content }) {
  return (
    <div>
      <p className="text-gray-400 text-sm tracking-tight">{header}</p>
      <h3 className="font-bold text-lg">{content}</h3>
    </div>
  );
}

export default OrderDetails;
