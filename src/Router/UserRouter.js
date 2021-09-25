import { lazy } from "react";
import { Route } from "react-router";
import { useSelector } from "react-redux";

const ProfileScreen = lazy(() =>
  import("../Screens/User/Customer/ProfileScreen/ProfileScreen")
);
const Order = lazy(() => import("../Screens/User/Customer/Order/Order"));
const Orders = lazy(() => import("../Screens/User/Customer/Orders/Orders"));
const Payment = lazy(() => import("../Screens/User/Customer/Payment/Payment"));
const Users = lazy(() => import("../Screens/User/Admin/Users/Users"));
const UpdateUserScreen = lazy(() =>
  import("../Screens/User/Admin/UpdateUserScreen/UpdateUserScreen")
);
const UpdateProfileScreen = lazy(() =>
  import("../Screens/User/Customer/UpdateProfileScreen/UpdateProfileScreen")
);

function UserRouter() {
  const state = useSelector((state) => state);

  if (!state.userDetails.user._id) return [];

  const adminRoutes = state.userDetails.user.isAdmin
    ? [
        <Route key={"70"} path={"/users"} exact={true} component={Users} />,
        <Route
          key={"800"}
          path={"/edit-user/:id"}
          exact={true}
          component={UpdateUserScreen}
        />,
      ]
    : [];

  return [
    <Route key={"5552"} path={"/order/:id"} exact={true} component={Order} />,
    <Route key={"4563"} path={"/orders"} exact={true} component={Orders} />,
    <Route
      key={"4267"}
      path={"/profile"}
      exact={true}
      component={ProfileScreen}
    />,
    <Route
      path={"/proceed-checkout/shipping-address"}
      exact={true}
      key={"405"}
      component={Payment}
    />,
    <Route
      key={"402"}
      path={"/proceed-checkout/place-order"}
      exact={true}
      component={Payment}
    />,
    <Route
      key={"6542"}
      path={"/update-profile"}
      exact={true}
      component={UpdateProfileScreen}
    />,
    ...adminRoutes,
  ];
}

export default UserRouter;
