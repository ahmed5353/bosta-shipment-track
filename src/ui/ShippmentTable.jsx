/* eslint-disable react/prop-types */
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { extractDate, extractTimeFromDate } from "../helpers";
import { usePosts } from "../PostContext";

export default function DataTable() {
  const { orderData, t } = usePosts();
  const { TransitEvents } = orderData;

  return (
    <Paper>
      {/* // <Paper className="max-w-[80%] overflow-hidden"> */}
      <TableContainer>
        <Table stickyHeader aria-label="Shipment Details">
          {/* <Table stickyHeader aria-label="sticky table"> */}
          <TableHead>
            <TableRow
              sx={{
                "& th": {
                  backgroundColor: "#fafafa",
                },
              }}
            >
              <TableCell className="text-start">{t("branch")}</TableCell>
              <TableCell className="text-start">{t("date")}</TableCell>
              <TableCell className="text-start">{t("time")}</TableCell>
              <TableCell className="text-start">{t("details")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {TransitEvents.map((row) => (
              <TableRow key={row.branch}>
                <TableCell className="text-start">{t("nasrCity")}</TableCell>
                <TableCell className="text-start">
                  {extractDate(row.timestamp)}
                </TableCell>
                <TableCell className="text-start">
                  {extractTimeFromDate(row.timestamp)}
                </TableCell>
                <TableCell className="text-start">
                  {/* {t(row.state.replaceAll("_", " "))} */}
                  {t(row.state)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
