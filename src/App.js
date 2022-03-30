import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./page/HomePage";
import Footer from "./component/Footer/Footer";

import TopNav from "./component/TopNav/TopNav";
import HeaderNav from "./component/Navbar/HeaderNav";

function App() {
  return (
    <div className="App">
      {/* Header section */}
      <TopNav />
      <HeaderNav />

      {/* Main Section */}
      <HomePage />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
