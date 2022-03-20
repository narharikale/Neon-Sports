import Card from '../../components/card/card';
import { useFilter } from '../../context/filter-context';
import Filter from './filter';



function ProductListing() {

    const { data } = useFilter();
    
    // const sortData =  sortedData(state , products);
    // const filterPriceData = FilterPriceData(state , sortData);
    // const filterCategoryData = FilterCategoryData(state , filterPriceData)
    // const filterRatingData = FilterRatingData(state , filterCategoryData)


    
   

    return (
        <>
            <div className='d-flex filter-productlist-container' >

                <Filter />
                <main className='p-2'>
                <div>Showing {data.length} Products</div>
                    <div className="productlist-container">
                    
                        {data && data.map((product) => {

                            return (
                                <Card key={product._id} product={product} />
                            )
                        })
                        }

                    </div>
                </main>
                
            </div>

        </>
    );
}

export { ProductListing };