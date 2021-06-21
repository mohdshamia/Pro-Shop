import { MainContainer } from "./Global.Styles";
import NavBar from "./Components/NavBar/NavBar";
import HomeScreen from "./Screens/Gust/HomeScreen/HomeScreen";
import { Route, Switch } from "react-router";
import Login from "./Screens/Auth/Login/Login";
import { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  /*
  const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));

  const [user, setUser] = useState(userFromLocalStorage);*/

  const state = useSelector((state) => state);

  console.log("store state", state);

  return (
    <MainContainer>
      <NavBar />
      <Switch>
        <Route path={"/"} exact={true} component={HomeScreen} />
        {state.userDetails.user._id ? null : (
          <Route
            path={"/login"}
            component={() => {
              return <Login />;
            }}
          />
        )}
      </Switch>
    </MainContainer>
  );
}

export default App;
