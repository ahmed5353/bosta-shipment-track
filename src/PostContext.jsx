/* eslint-disable react/prop-types */
import { createContext, useContext, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

// create context
const PostContext = createContext();

// createPost Provider
function PostProvider({ children }) {
  const [orderNum, setOrderNum] = useState("");
  const [orderData, setOrderData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const customColorStatus =
    orderData?.CurrentStatus.state === "CANCELLED"
      ? "red"
      : orderData?.CurrentStatus.state === "DELIVERED_TO_SENDER"
      ? "#f9ba02"
      : orderData?.CurrentStatus.state === "DELIVERED"
      ? "#35b600"
      : "";

  const value = useMemo(() => {
    return {
      orderNum,
      setOrderNum,
      orderData,
      setOrderData,
      isOpen,
      setIsOpen,
      isRtl,
      setIsRtl,
      t,
      isLoading,
      setIsLoading,
      customColorStatus,
    };
  }, [isOpen, isRtl, orderData, orderNum]);

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of PostProvider");
  return context;
}
// eslint-disable-next-line react-refresh/only-export-components
export { PostProvider, usePosts };
