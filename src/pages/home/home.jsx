



function Home() {
    return (
        <>
            <main>
                <section className="hero-img">
                    <img
                        className="responsive-img obj-fit-cover"
                        src="./assets/img/showHome5.jpg"
                        alt=""
                    />
                    <div className="hero-overlay d-flex align-center">
                        <div className="hero-overlay-heading font-size-lg">
                            <h4>Upto 25% off</h4>
                            <h1 className="font-size-xlg">
                                Neon{" "}
                                <span className="font-size-lg text bg-gray-200 br-sm py-1 color-primary-600">
                                    One
                                </span>
                            </h1>
                            <a
                                href="/pages/productlisting/productlisting.html"
                                className="btn btn-outline bg-transperent font-size-regular"
                            >
                                Shop Now
                            </a>
                        </div>
                    </div>
                </section>
                <section className="container">
                    <h2 className="font-size-md mr-top-md">Shop by categories</h2>
                    <div className="categories-container">
                        <div className="categories-media">
                            <img
                                className="responsive-img obj-fit-cover br-top-sm"
                                src="/assets/img/man1.jpg"
                                alt="no img"
                            />
                            <a
                                href="./pages/productlisting/productlisting.html"
                                className="categories-media-overlay"
                            >
                                <h2 className="color-white position-center">Men</h2>
                                {/* <button class="btn btn-outline bg-transperent font-size-regular color-white position-center">Shop Now</button>   */}
                            </a>
                        </div>
                        <div className="categories-media">
                            <img
                                className="responsive-img obj-fit-cover br-top-sm"
                                src="/assets/img/women1.jpg"
                                alt="no img"
                            />
                            <a
                                href="./pages/productlisting/productlisting.html"
                                className="categories-media-overlay"
                            >
                                <h2 className="color-white position-center">Women</h2>
                                {/* <button class="btn btn-outline bg-transperent font-size-regular color-white position-center">Shop Now</button> */}
                            </a>
                        </div>
                        <div className="categories-media">
                            <img
                                className="responsive-img obj-fit-cover br-top-sm"
                                src="/assets/img/kid1.jpg"
                                alt="no img"
                            />
                            <a
                                href="./pages/productlisting/productlisting.html"
                                className="color-white categories-media-overlay"
                            >
                                <h2 className="position-center">Teen</h2>
                                {/* <button class="btn btn-outline bg-transperent font-size-regular color-white position-center">Shop Now</button> */}
                            </a>
                        </div>
                    </div>
                </section>
                <section className="container">
                    <h2 className="font-size-md mr-top-md">New arrivals</h2>
                    <div className="categories-container">
                        <div className="d-flex flex-column card ">
                            <div className="card-media">
                                <img
                                    className="responsive-img obj-fit-cover "
                                    src="/assets/img/shoes3.jpg"
                                    alt="no img"
                                />
                                <button className="btn-icon card-badge-topRight">
                                    {" "}
                                    <span className="material-icons">favorite_border</span>{" "}
                                </button>
                            </div>
                            <div className="card-body">
                                <h2 className="font-size-md m-0">dolor</h2>
                                <h className="font-size-sm color-gray-500">Grey &amp; Black</h>
                                <div className="card-desc font-weight-600">
                                    <div>₹ 699</div>
                                    <div className="text-decoration-linethrough">₹ 1398</div>
                                    <div className="color-green-600">50% off</div>
                                </div>
                            </div>
                            <button className="btn btn-add-cart btn-primary mr-btn-10px font-size-regular">
                                Buy now
                            </button>
                        </div>
                        <div className="d-flex flex-column card">
                            <div className="card-media">
                                <img
                                    className="responsive-img obj-fit-cover "
                                    src="/assets/img/shoes4.jpg"
                                    alt="no img"
                                />
                                <button className="btn-icon card-badge-topRight">
                                    {" "}
                                    <span className="material-icons">favorite_border</span>{" "}
                                </button>
                            </div>
                            <div className="card-body">
                                <h2 className="font-size-md m-0">altr</h2>
                                <h className="font-size-sm color-gray-500">Grey &amp; Black</h>
                                <div className="card-desc font-weight-600">
                                    <div>₹ 699</div>
                                    <div className="text-decoration-linethrough">₹ 1398</div>
                                    <div className="color-green-600">50% off</div>
                                </div>
                            </div>
                            <button className="btn btn-add-cart btn-primary mr-btn-10px font-size-regular">
                                Buy now
                            </button>
                        </div>
                        <div className="d-flex flex-column card ">
                            <div className="card-media">
                                <img
                                    className="responsive-img obj-fit-cover "
                                    src="/assets/img/shoes2.jpg"
                                    alt="no img"
                                />
                                <button className="btn-icon card-badge-topRight">
                                    {" "}
                                    <span className="material-icons">favorite_border</span>{" "}
                                </button>
                            </div>
                            <div className="card-body">
                                <h2 className="font-size-md m-0">lorem</h2>
                                <h className="font-size-sm color-gray-500">Grey &amp; Black</h>
                                <div className="card-desc font-weight-600">
                                    <div>₹ 699</div>
                                    <div className="text-decoration-linethrough">₹ 1398</div>
                                    <div className="color-green-600">50% off</div>
                                </div>
                            </div>
                            <button className="btn btn-add-cart btn-primary mr-btn-10px font-size-regular">
                                Buy now
                            </button>
                        </div>
                    </div>
                </section>
                <section className="m-2"></section>
            </main>

        </>
    );
}

export { Home };