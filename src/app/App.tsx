import React from "react";
import "../css/app.css";
import { Box, Button, Typography, Stack, Container } from "@mui/material";
import { Link, Route, Router, Switch, useLocation } from "react-router-dom";
import { HomePage } from "./screens/homePage";
import { ProductsPage } from "./screens/productsPage/index";
import { OrdersPage } from "./screens/ordersPage/index";
import { UserPage } from "./screens/userPage";
import { OtherNavbar } from "./components/headers/OtherNavbar";
import { HomeNavbar } from "./components/headers/HomeNavbar";
import { Footer } from "./components/footer";

function App() {
  const location = useLocation(); // returns Object
  console.log("location:", location);

  return (
    <>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      {location.pathname === "/" ? <HomeNavbar /> : <OtherNavbar />}
      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <UserPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
