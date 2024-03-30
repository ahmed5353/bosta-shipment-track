/* eslint-disable react/prop-types */
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import CheckIcon from "@mui/icons-material/Check";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import HandshakeIcon from "@mui/icons-material/Handshake";

import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import BoxIcon from "../assets/BoxIcon";
import { usePosts } from "../PostContext";

const ColorlibConnector = styled(StepConnector)(({ customColorStatus }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 24,
    width: "100%",
    right: "-45%",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: ` ${customColorStatus} `,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: ` ${customColorStatus} `,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 6,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 3,
  },
}));

//---> ICON STYLE

const ColorlibStepIconRoot = styled("div")(
  ({ ownerState, orderData, customColorStatus }) => ({
    backgroundColor: "#fff",
    zIndex: 1,
    color: "#cfcfcf",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    border: "2px solid",
    marginBottom: -4,
    justifyContent: "center",

    alignItems: "center",
    ...(ownerState.active && {
      backgroundColor: `${customColorStatus}`,
      border: ` ${orderData?.CurrentStatus.state === "CANCELLED" && "none"} `,
    }),

    ...(ownerState.completed && {
      width: 22,
      height: 22,
      marginTop: 15,
      marginInlineEnd: -999,
      marginBottom: 8,
      backgroundColor: `${customColorStatus}`,
      border: 0,
      color: "#fff",
    }),
  })
);

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;
  const { orderData, customColorStatus } = usePosts();
  console.log(orderData);

  const icons = {
    1: <BoxIcon />,
    2: <HandshakeIcon />,
    3: <LocalShippingIcon style={{ fill: "white" }} />,
    4: <SaveAsIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
      orderData={orderData}
      customColorStatus={customColorStatus}
    >
      {completed ? (
        <CheckIcon className="text-sm" />
      ) : (
        icons[String(props.icon)]
      )}
    </ColorlibStepIconRoot>
  );
}

export default function StepperT() {
  const { orderData, t, customColorStatus } = usePosts();
  const { CurrentStatus } = orderData;
  const checkCancel = CurrentStatus.state === "CANCELLED";
  const checkDeliveredToSender = CurrentStatus.state === "DELIVERED_TO_SENDER";

  const steps = [
    t("ShipmentCreated"),
    t("ReceivedFromTheMerchant"),
    t("CameOutOrDelivery"),
    t("Delivered"),
  ];

  return (
    <Stack className="mt-10">
      <Stepper
        alternativeLabel
        activeStep={checkDeliveredToSender || checkCancel ? 2 : 4}
        connector={
          <ColorlibConnector
            orderData={orderData}
            customColorStatus={customColorStatus}
          />
        }
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel
              StepIconComponent={ColorlibStepIcon}
              customColorStatus={customColorStatus}
            >
              <span className="font-semibold flex-col gap-2 flex justify-center items-center ">
                <div className="flex flex-col font-semibold">{label}</div>
                <p
                  className={`${checkCancel && "text-dark-red"} ${
                    checkDeliveredToSender && "text-yellow"
                  }`}
                >
                  {checkCancel &&
                    label === t("CameOutOrDelivery") &&
                    t("Declined")}
                  {checkDeliveredToSender &&
                    label === t("CameOutOrDelivery") &&
                    t("notAvailable")}
                </p>
              </span>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
