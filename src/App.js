import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./page/HomePage";
import Footer from "./component/Footer/Footer";

import TopNav from "./component/TopNav/TopNav";
import HeaderNav from "./component/Navbar/HeaderNav";
import { ShopProvider } from "./component/userContext/ShopContext";

function App() {
  return (
    <ShopProvider>
      {/* Header section */}
      <TopNav />
      <HeaderNav />
      {/* Main Section */}
      <HomePage />
      {/* Footer Section */}
      <Footer />
    </ShopProvider>
  );
}

export default App;
