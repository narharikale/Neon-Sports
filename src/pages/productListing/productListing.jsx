
import { Card } from '../../components';
import { useFilter } from '../../context/filter-context';
import Filter from './filter';



function ProductListing() {

    const { data } = useFilter();
    
     return (
        <>
            <div className='filter-productlist-container p-2' >

                <Filter />
                <main >
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