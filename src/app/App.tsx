import React, { useState } from "react";
import { Box, Button, Typography, Stack, Container } from "@mui/material";
import { Link, Route, Router, Switch, useLocation } from "react-router-dom";
import HomePage from "./screens/homePage";
import ProductsPage from "./screens/productsPage/index";
import OrdersPage from "./screens/ordersPage/index";
import UserPage from "./screens/userPage";
import OtherNavbar from "./components/headers/OtherNavbar";
import HomeNavbar from "./components/headers/HomeNavbar";
import Footer from "./components/footer";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";
import HelpPage from "./screens/helpPage";
import Test from "./screens/Test";
import useBasket from "./hooks/useBasket";

function App() {
  const location = useLocation(); // returns Object
  // console.log("location:", location);
  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasket();

  return (
    <>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      {location.pathname === "/" ? (
        <HomeNavbar
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
        />
      ) : (
        <OtherNavbar
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
        />
      )}
      {/* temporary minHeight -> should be DELETED! */}
      <Box sx={{ minHeight: "20vh" }}>
        <Switch>
          <Route path="/products">
            <ProductsPage onAdd={onAdd} />
          </Route>
          <Route path="/orders">
            <OrdersPage />
          </Route>
          <Route path="/member-page">
            <UserPage />
          </Route>
          <Route path="/help">
            <HelpPage />
          </Route>
          <Route path="/">
            {/* <Human /> */}
            <HomePage />
          </Route>
        </Switch>
      </Box>
      <Footer />
    </>
  );
}

export default App;
