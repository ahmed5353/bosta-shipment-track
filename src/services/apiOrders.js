export async function fetchShipingData(orderNum) {
  const API_URL = `https://tracking.bosta.co/shipments/track`;

  try {
    if (!orderNum) return;
    const response = await fetch(`${API_URL}/${orderNum}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    alert("Please Write a valid tracking number");
    console.error("There was a problem with your fetch operation:", error);
  }
}
