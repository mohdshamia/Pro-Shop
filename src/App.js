import { MainContainer } from "./Global.Styles";
import NavBar from "./Components/NavBar/NavBar";
import HomeScreen from "./Screens/Gust/HomeScreen/HomeScreen";
import { Route, Switch } from "react-router";
import Login from "./Screens/Auth/Login/Login";
import { useState } from "react";

function App() {
  const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));

  const [user, setUser] = useState(userFromLocalStorage);

  return (
    <MainContainer>
      <NavBar user={user} setUser={setUser} />
      <Switch>
        <Route path={"/"} exact={true} component={HomeScreen} />
        {user ? null : (
          <Route
            path={"/login"}
            component={() => {
              return <Login setUser={setUser} />;
            }}
          />
        )}
      </Switch>
    </MainContainer>
  );
}

export default App;
