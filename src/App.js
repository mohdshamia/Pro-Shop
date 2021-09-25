import { MainContainer, SpinnerContainer } from "./Global.Styles";
import NavBar from "./Components/NavBar/NavBar";
import { Route, Switch } from "react-router";
import NotFoundScreen from "./Screens/Gust/NotFoundScreen/NotFoundScreen";
import AuthRouter from "./Router/AuthRouter";
import GuestRouter from "./Router/GuestRouter";
import UserRouter from "./Router/UserRouter";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
import { Suspense } from "react";
import UploadComponent from "./Screens/UploadComponent/UploadComponent";

function App() {
  return (
    <MainContainer>
      <Suspense fallback={<SpinnerContainer />}>
        <ErrorBoundary>
          {/*<NavBar />*/}
          <Switch>
            <Route path={"/"} component={UploadComponent} exact />
            {/*
            {GuestRouter()}
            {UserRouter()}
            {AuthRouter()}
            <Route key={"65944"} path={"*"}>
              <NotFoundScreen />
            </Route>*/}
          </Switch>
        </ErrorBoundary>
      </Suspense>
    </MainContainer>
  );
}

export default App;
