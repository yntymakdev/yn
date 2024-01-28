import "./App.css";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import ShoesTop from "./components/ShoesTop/ShoesTop";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <ShoesTop />
      <MainPage />
    </div>
  );
}

export default App;
