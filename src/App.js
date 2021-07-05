import { MainContainer } from "./Global.Styles";
import NavBar from "./Components/NavBar/NavBar";
import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";
import NotFoundScreen from "./Screens/Gust/NotFoundScreen/NotFoundScreen";
import AuthRouter from "./Router/AuthRouter";
import GuestRouter from "./Router/GuestRouter";
import UserRouter from "./Router/UserRouter";

function App() {
  const state = useSelector((state) => state);

  console.log("store state", state);

  return (
    <MainContainer>
      <NavBar />
      <Switch>
        {GuestRouter()}
        {/** Make it protected*/}
        {state.userDetails.user._id ? UserRouter() : AuthRouter()}

        <Route key={60} path={"*"}>
          <NotFoundScreen />
        </Route>
      </Switch>
    </MainContainer>
  );
}

export default App;
