import { useState } from 'react'
import Card from '../../components/card/card';
import { useProducts } from '../../context/product-context';




function ProductListing() {

    const [price, setPrice] = useState(0);
    const { products } = useProducts();


    return (
        <>
            <div className='d-flex' >
                <aside>
                    <div className="filter-container">
                        <div className="filter-head">
                            <h3>Filter</h3>
                            <p className="text-underline">Clear</p>
                        </div>
                        <div className="filter-content">
                            <h4>Price</h4>
                            <div className="filter-input-group">
                                <input className="slider" type="range" defaultValue={0} min={0} step={500} max={10000} onChange={(e) => setPrice(e.target.value)} onMouseMove={(e) => setPrice(e.target.value)} />
                                <span id="rangeValue" className="slider-value">
                                    {price}  &amp;above
                                </span>
                            </div>
                            <h4>Category</h4>
                            <div className="filter-input-group">
                                <label htmlFor="category1">
                                    <input type="radio" name="category" id="category1" /> Men
                                </label>
                                <label htmlFor="category2">
                                    <input type="radio" name="category" id="category2" /> Women
                                </label>
                                <label htmlFor="category3">
                                    <input type="radio" name="category" id="category3" /> Kids
                                </label>
                            </div>
                            <h4>Ratings</h4>
                            <div className="filter-input-group">
                                <label htmlFor="rating1">
                                    <input type="radio" name="rating" id="rating1" /> 4 ★&amp; above
                                </label>
                                <label htmlFor="rating2">
                                    <input type="radio" name="rating" id="rating2" /> 3 ★&amp; above
                                </label>
                                <label htmlFor="rating3">
                                    <input type="radio" name="rating" id="rating3" /> 2 ★&amp; above
                                </label>
                            </div>
                            <h4>Sort By</h4>
                            <div className="filter-input-group">

                                <label htmlFor="sortby2">
                                    <input type="radio" name="sort" id="sortby2" /> Price -- High to Low
                                </label>
                                <label htmlFor="sortby3">
                                    <input type="radio" name="sort" id="sortby3" /> Price -- Low to High
                                </label>
                            </div>
                        </div>
                    </div>
                </aside>

                <main className="p-2 productlist-container">
                    {products ? products.map((product) => {

                        return (
                            <Card  key={product._id} product={product}/>
                        )
                    }) : <></>

                    }

                </main>
            </div>

        </>
    );
}

export { ProductListing };