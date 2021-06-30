import { MainContainer } from "./Global.Styles";
import NavBar from "./Components/NavBar/NavBar";
import HomeScreen from "./Screens/Gust/HomeScreen/HomeScreen";
import { Route, Switch } from "react-router";
import Login from "./Screens/Auth/Login/Login";
import { useSelector } from "react-redux";
import Register from "./Screens/Auth/Register/Register";
import ProfileScreen from "./Screens/User/ProfileScreen/ProfileScreen";
import UpdateProfileScreen from "./Screens/User/UpdateProfileScreen/UpdateProfileScreen";
import { Fragment } from "react";
import ProductScreen from "./Screens/Gust/ProductScreen/ProductScreen";
import CartScreen from "./Screens/User/CartScreen/CartScreen";
import Payment from "./Screens/User/Payment/Payment";

function App() {
  const state = useSelector((state) => state);

  console.log("store state", state);

  return (
    <MainContainer>
      <NavBar />
      <Switch>
        <Route path={"/"} exact={true} component={HomeScreen} />
        <Route
          path={"/product/:id/:name"}
          exact={true}
          component={ProductScreen}
        />
        {/** Make it protected*/}
        {state.userDetails.user._id ? (
          <>
            <Route path={"/cart"} exact={true} component={CartScreen} />
            <Route path={"/profile"} exact={true} component={ProfileScreen} />
            <Route
              path={"/proceed-checkout/shipping-address"}
              exact={true}
              component={Payment}
            />
            <Route
              path={"/proceed-checkout/place-order"}
              exact={true}
              component={Payment}
            />
            <Route
              path={"/update-profile"}
              exact={true}
              component={UpdateProfileScreen}
            />
          </>
        ) : (
          <Fragment>
            <Route
              path={"/login"}
              component={() => {
                return <Login />;
              }}
            />
            <Route
              path={"/register"}
              component={() => {
                return <Register />;
              }}
            />
          </Fragment>
        )}
      </Switch>
    </MainContainer>
  );
}

export default App;
