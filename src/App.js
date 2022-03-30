import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./page/HomePage";
import Footer from "./component/Footer/Footer";

import TopNav from "./component/TopNav/TopNav";
import HeaderNav from "./component/Navbar/HeaderNav";
import { ShopProvider } from "./component/userContext/ShopContext";
import ShopPage from "./page/ShopPage";

function App() {
  return (
    <ShopProvider>
      {/* Header section */}
      <TopNav />
      <HeaderNav />
      {/* Main Section */}
      <HomePage />
      <ShopPage />
      {/* Footer Section */}
      <Footer />
    </ShopProvider>
  );
}

export default App;
