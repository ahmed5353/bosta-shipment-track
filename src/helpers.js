export function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const formattedDate = date.toLocaleDateString("en-GB", options);
  const time = date.toLocaleTimeString("en-US", { hour12: true });
  return `${formattedDate} at ${time}`;
}

export function extractDate(dateString) {
  const date = new Date(dateString);
  const options = { day: "2-digit", month: "short", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-GB", options);
  return formattedDate;
}

export function extractTimeFromDate(dateString) {
  const date = new Date(dateString);
  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return time;
}
