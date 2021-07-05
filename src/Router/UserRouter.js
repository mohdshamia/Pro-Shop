import React from "react";
import { Route } from "react-router";
import Order from "../Screens/User/Order/Order";
import Orders from "../Screens/User/Orders/Orders";
import ProfileScreen from "../Screens/User/ProfileScreen/ProfileScreen";
import Payment from "../Screens/User/Payment/Payment";
import UpdateProfileScreen from "../Screens/User/UpdateProfileScreen/UpdateProfileScreen";

function UserRouter(props) {
  return [
    <Route key={50} path={"/order/:id"} exact={true} component={Order} />,
    <Route key={2} path={"/orders"} exact={true} component={Orders} />,
    <Route key={4} path={"/profile"} exact={true} component={ProfileScreen} />,
    <Route
      path={"/proceed-checkout/shipping-address"}
      exact={true}
      key={405}
      component={Payment}
    />,
    <Route
      key={402}
      path={"/proceed-checkout/place-order"}
      exact={true}
      component={Payment}
    />,
    <Route
      key={6}
      path={"/update-profile"}
      exact={true}
      component={UpdateProfileScreen}
    />,
  ];
}

export default UserRouter;
