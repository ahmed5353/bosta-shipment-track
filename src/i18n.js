import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const transEn = {
  langCode: "AR",
  main: "Main",
  prices: "Prices",
  callCenter: "Call Center",
  login: "Login",
  track: "Track your Order",
  trackingNumber: "Tracking Number",
  shipmentNumber: "Shipment Number",
  DELIVERED_TO_SENDER: "Delivered To Sender",
  CANCELLED: "Canceled",
  DELIVERED: "Delivered",
  LastUpdate: "Last Update",
  DeliveryTime: "Delivery Time",
  TraderName: "Trader Name",
  ShipmentCreated: "Shipment Created",
  ReceivedFromTheMerchant: "Received from the merchant",
  CameOutOrDelivery: "Came out for delivery",
  Delivered: "Delivered",
  Declined: "Declined from the merchant",
  notAvailable: "The client is not available at the address",
  branch: "Branch",
  date: "Date",
  time: "Time",
  details: "Details",
  nasrCity: "Nasr City",
  TICKET_CREATED: "Ticket Created",
  SippmentDetails: "Shipment Details",
  deliveryAddress: "Delivery Address",
  adress: "Embaba, talaat harb street next ot El-berense house ,Cairo",
  question: "Are you have any problem ?!",
  report: "Report about problem",
};
const transAr = {
  langCode: "EN",
  main: "الرئيسية",
  prices: "الأسعار",
  callCenter: "خدمة العملاء",
  login: "تسجيل الدخول",
  track: "تتبع شحنتك",
  trackingNumber: "رقم التتبع",
  shipmentNumber: "رقم التتبع",
  DELIVERED_TO_SENDER: "تم اعادة الشحنة للتاجر",
  LastUpdate: "اخر تحديث",
  DeliveryTime: "وقت التوصيل",
  TraderName: "اسم التاجر",
  ShipmentCreated: "تم انشاء الشحنة",
  ReceivedFromTheMerchant: "تم استلام الشحنة من التاجر",
  CameOutOrDelivery: "الشحنة خرجت للتسليم",
  Delivered: "تم التسليم",
  Declined: "تم الغاء الشحنة من التاجر",
  notAvailable: "العميل غير متواجد في العنوان",
  CANCELLED: "تم الغاء الشحنة",
  DELIVERED: "تم التسليم",
  branch: "الفرع",
  date: "التاريخ",
  time: "الوقت",
  details: "تفاصيل",
  nasrCity: "مدينة نصر",
  TICKET_CREATED: "تم انشاء الشحنة",
  SippmentDetails: "تفاصيل الشحنة",
  deliveryAddress: "عنوان التسليم",
  adress:
    "امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل ١٧ بلوك 22 Cairo",
  question: "هل يوجد مشكلة في شحنتك !؟",
  report: "ابلاغ عن مشكلة",
};

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: transEn,
    },
    ar: {
      translation: transAr,
    },
  },
});

export default i18n;
