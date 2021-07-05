import React from "react";
import { Route } from "react-router";
import HomeScreen from "../Screens/Gust/HomeScreen/HomeScreen";
import ProductScreen from "../Screens/Gust/ProductScreen/ProductScreen";
import CartScreen from "../Screens/User/CartScreen/CartScreen";

function GuestRouter(props) {
  return [
    <Route key={1} path={"/"} exact={true} component={HomeScreen} />,
    <Route
      path={"/product/:id/:name"}
      exact={true}
      component={ProductScreen}
    />,
    <Route key={3} path={"/cart"} exact={true} component={CartScreen} />,
  ];
}

export default GuestRouter;
