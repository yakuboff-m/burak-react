import { useState, SyntheticEvent } from "react";
import { Container, Stack, Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import "../../../css/order.css";

export default function OrdersPage() {
  const [value, setValue] = useState("1");

  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
  <div className={"order-page"}>
    <Container className="order-container">
      <Stack className={"order-left"}>
        <TabContext value={value}>
          <Box className={"order-nav-frame"}>
            <Box sx={{ borderBottom: 1, borderColor: "divider", width: "679px"}} className={"order-tabs-box"}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                className={"table_list"}
              >
                <Tab label="PAUSED ORDERS" value={"1"} />
                <Tab label="PROCESS ORDERS" value={"2"} />
                <Tab label="FINISHED ORDERS" value={"3"} />
              </Tabs>
            </Box>
          </Box>

          <Stack className={"order-main-content"}>
            <PausedOrders />
            <ProcessOrders />
            <FinishedOrders />
          </Stack>
        </TabContext>
      </Stack>

      <Stack className={"order-right"}>
        <Stack className="profile-box"></Stack>
        <Stack className="card-box"></Stack>
      </Stack>

    </Container>
  </div>
)};