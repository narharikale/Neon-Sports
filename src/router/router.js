import { Navigate, Route, Routes , } from "react-router-dom";
import { Home ,ProductListing, Cart, ForgotPassword, Login, SignUp, Wishlist } from '../pages/index'
import { PrivateRoute } from  '../components/private-route/private-route'
import Mockman from 'mockman-js';
import { useAuth } from "../context/auth-context";




function Routers() {
    const { isAuth } = useAuth();
    return ( 
        
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/productlisting" element={<ProductListing/>} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
         <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
        { !isAuth && (
          <>
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
          </>
        )}
        
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="*" element={<Navigate to='/' replace/> } />
        <Route path="/mock" element={<Mockman/>} />
      </Routes>
     );
}

export  { Routers };