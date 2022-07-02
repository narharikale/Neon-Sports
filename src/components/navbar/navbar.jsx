import './navbar.css';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useCart } from "../../context/cart-context";
import { useFilter } from "../../context/filter-context";
import { useWishlist } from "../../context/wishlist-context";


function Navbar() {
  const { isAuth } = useAuth();
  const { wishlistData } = useWishlist();
  const { cartData } = useCart();
  const { setSearchQuery } = useFilter();
  const navigate = useNavigate();

  return (
    <>
      <nav className="nav-container nav-container-custom">
        <div className="container d-flex justify-between">
          <div className="nav-left">
            <Link to="/">
              <img
                className="responsive-img navlogo"
                src="/assets/neonsportslogo.png"
                alt=""
              />
            </Link>
          </div>
          <div className="d-flex p-relative searchbar-container">
            <input
              type="text"
              className="searchbar-input"
              placeholder="Search for products"
              onChange={(e) => {
                navigate("/productlisting");
                setSearchQuery(e.target.value);
              }}
            />
            <span className="material-icons searchbar-icon">search</span>
          </div>

          <div className="nav-right">
            <Link to="/cart" className="badge-parent">
              <span className="material-icons"> shopping_cart </span>
              {cartData.length > 0 ? (
                <div className="badge-with-icon">{cartData.length}</div>
              ) : null}
            </Link>
            <Link to="/wishlist" className="badge-parent">
              <span className="material-icons"> favorite_border </span>
              {wishlistData.length > 0 ? (
                <div className="badge-with-icon">{wishlistData.length}</div>
              ) : null}
            </Link>
            {isAuth ? (
              <Link
                to="/profile"
                title="Profile"
                className="m-0 btn btn-outline font-size-sm"
              >
                Profile
              </Link>
            ) : (
              <Link to="/login" title="Login" className="m-0 material-icons">
                login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export { Navbar };
