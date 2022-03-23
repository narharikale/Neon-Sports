import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

function Navbar() {

    const { isAuth , setIsAuth} = useAuth()
    
    const logOutHandler  = () => {
        
        //also remove from db
        localStorage.removeItem("AuthToken");
        setIsAuth(false)
    }

    return (
        <>
            <nav className="nav-container nav-container-custom">
                <div className="container d-flex justify-between">
                    <div className="nav-left">
                            <Link to='/' >
                                <img className="responsive-img navLogo" src="/assets/neonsportslogo.png" alt="" />
                            </Link>
                        <form className="d-flex p-relative">
                            <input
                                type="text"
                                className="searchbar-input"
                                placeholder="Search for products"
                            />
                            <span className="material-icons searchbar-icon">search</span>
                        </form>
                    </div>
                    <div className="nav-right">
                        
                        <Link to='/cart' className="badge-parent">
                            <span className="material-icons"> shopping_cart </span>
                            <div className="badge-with-icon">5</div>
                        </Link>
                        <Link to="/wishlist" className="badge-parent">
                            <span className="material-icons"> favorite_border </span>
                            <div className="badge-with-icon">3</div>
                        </Link>
                        { isAuth ?  <button className=" m-0 btn-link color-gray-500" onClick={ () => logOutHandler() } >Logout</button> :<></> }
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;