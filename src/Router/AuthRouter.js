import { Route } from "react-router";
import Login from "../Screens/Auth/Login/Login";
import Register from "../Screens/Auth/Register/Register";

function AuthRouter(props) {
  return [
    <Route
      key={4563}
      path={"/login"}
      component={() => {
        return <Login />;
      }}
    />,
    <Route
      key={20}
      path={"/register"}
      component={() => {
        return <Register />;
      }}
    />,
  ];
}

export default AuthRouter;
