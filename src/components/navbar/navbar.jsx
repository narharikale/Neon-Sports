function Navbar() {
    return (
        <>
            <nav className="nav-container nav-container-custom">
                <div className="container d-flex justify-between">
                    <div className="nav-left">
                        <h1>
                            <a href="/index.html" />
                            NeonSports
                        </h1>
                        <form className="d-flex p-relative">
                            <input
                                type="text"
                                className="searchbar-input"
                                placeholder="Search for products"
                            />
                            <span className="material-icons searchbar-icon">search</span>
                        </form>
                        <a href="/pages/auth/login.html" className="btn btn-primary font-size-sm">
                            Login
                        </a>
                    </div>
                    <div className="nav-right">
                        <a href="/pages/cart/cart.html" className="badge-parent">
                            <span className="material-icons"> shopping_cart </span>
                            <div className="badge-with-icon">5</div>
                        </a>
                        <a href="/pages/wishlist/wishlist.html" className="badge-parent">
                            <span className="material-icons"> favorite_border </span>
                            <div className="badge-with-icon">3</div>
                        </a>
                        <div className="badge-parent">
                            <span className="material-icons"> notifications_none </span>
                            <div className="badge-with-icon">1</div>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Navbar;