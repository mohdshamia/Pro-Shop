import { Route } from "react-router";
import { lazy } from "react";
import { useSelector } from "react-redux";

const Login = lazy(() => import("../Screens/Auth/Login/Login"));
const Register = lazy(() => import("../Screens/Auth/Register/Register"));

function AuthRouter(props) {
  const state = useSelector((state) => state);
  return (
    !state.userDetails.user._id && [
      <Route
        key={"5698"}
        path={"/login"}
        component={() => {
          return <Login />;
        }}
      />,
      <Route
        key={"20"}
        path={"/register"}
        component={() => {
          return <Register />;
        }}
      />,
    ]
  );
}

export default AuthRouter;
