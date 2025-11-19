import { useState, SyntheticEvent } from "react";
import { Container, Stack, Box,  } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import "../../../css/order.css";
import Divider from "../../components/divider";

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
        <Stack className="profile-box">
          <Stack className="profile-info">
            <img src="/img/justin.webp" />
            <span className="user-badge">
              <img className="" src="/icons/user-badge.svg" alt="" />
            </span>
            <p>Justin</p>
            <p>USER</p>
          </Stack>
          <Stack className="address">
            <Divider width="15" height="2" bg="#A1A1A1" />
            <Box className="address-box">
              <img src="/icons/location.svg" alt="" />
              <p>South Korea, Busan</p>
            </Box>
          </Stack>
        </Stack>
        <Stack className="card-box">
          <Stack>
            <p>Card number : 5243 4090 2002 7495</p>
            <Box className="card-exp-cvv">
              <p>07 / 24</p>
              <p>CVV : 010</p>
            </Box>
            <p>Justin Robertson</p>
          </Stack>
          <Stack></Stack>
        </Stack>
      </Stack>

    </Container>
  </div>
)};