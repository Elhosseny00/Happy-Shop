import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Shop from "./Components/Shop";
import Contact from "./Components/Contact";
import Nav from "./Components/Nav";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";
import Log from "./Components/Log";


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Log />}/>
        <Route path="signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
