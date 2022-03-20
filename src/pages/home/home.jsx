import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/card/card";
import { useFilter } from "../../context/filter-context";
import { useProducts } from "../../context/product-context";



function Home() {

    const [categories, setCategory] = useState([]);
    const { products } = useProducts();
    const { dispatch } = useFilter() ;

    useEffect(() => {
        async function getdata() {
            const res = await axios.get('/api/categories')
            setCategory(res.data.categories)
        }
        getdata();
    }, []);


    return (
        <>
            <main>
                <section className="hero-img">
                    <img
                        className="responsive-img obj-fit-cover"
                        src="/assets/homepageBanner1.jpg"
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
                            <Link to='/productlisting'
                                className="btn btn-outline bg-transperent font-size-regular"
                            >
                                Shop Now
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="container">
                    <h2 className="font-size-md mr-top-md">Shop by categories</h2>
                    <div className="categories-container">
                        {categories.map(({ id, categoryName, image }) => {
                            return (
                                <div key={id} className="categories-media">
                                    <img
                                        className="responsive-img obj-fit-cover br-top-sm"
                                        src={image}
                                        alt="no img"
                                    />
                                    <Link
                                        to='/productlisting'
                                        className="categories-media-overlay"
                                        onClick= { () => dispatch({type:'CATEGORY_FILTER' , payload:categoryName })}
                                        
                                    >
                                        <h2 className="color-white position-center">{categoryName}</h2>
                                    </Link>
                                </div>
                            )
                        })
                        }

                    </div>
                </section>
                <section className="container">
                    <h2 className="font-size-md mr-top-md">New arrivals</h2>
                    <div className="categories-container">
                        {products ? products.map((product) => {
                            return (product.isNewArrival ? <Card key={product._id} product={product} /> : false)
                        }) : <></>
                        }
                    </div>
                </section>
                <section className="m-2"></section>
            </main>
        </>
    );
}

export { Home };