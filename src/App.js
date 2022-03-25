import "./App.css";
import TopNav from "./component/TopNav/TopNav";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNav from "./component/Navbar/HeaderNav";

function App() {
  return (
    <div className="App">
      <TopNav />
      <HeaderNav />
    </div>
  );
}

export default App;
