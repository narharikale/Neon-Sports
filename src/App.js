import "./App.css";
import Mockman from 'mockman-js'
import Navbar from './components/navbar/navbar.jsx'
import { Route, Routes } from "react-router-dom";
import { Home ,ProductListing, Cart, ForgotPassword, Login, SignUp, Wishlist } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/productlisting" element={<ProductListing/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/mock" element={<Mockman/>} />
      </Routes>
    </div>
  );
}

export default App;
