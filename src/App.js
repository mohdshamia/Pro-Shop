import {
  MainContainer
} from "./App.Styles";
import NavBar from "./Components/NavBar/NavBar";
import HomeScreen from "./Screens/Gust/HomeScreen/HomeScreen";

function App() {
  return (
    <MainContainer>
      {/*Nav Bar for all pages  */}
      <NavBar/>
      <HomeScreen/>
    </MainContainer>
  );
}

export default App;
