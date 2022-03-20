import { createContext , useReducer , useContext} from "react";
import { useProducts } from "./product-context";
import { sortedData, FilterPriceData ,FilterCategoryData , FilterRatingData , ComposeAll} from '../utils/filterutils';
import { filterReducer } from '../reducers/filter-reducer'


const filterContext = createContext(null) ;

const initialState = {
  sortByPrice:null,
  filterByPrice:null,
  filterByCategory:[],
  filterByRatings:null,
}

function FilterProvider({children}) {

   
    const [state , dispatch] = useReducer(filterReducer , initialState);
    
    const { products } = useProducts();
    const data = ComposeAll(state , products , sortedData, FilterPriceData ,FilterCategoryData , FilterRatingData)


    return ( 
        <filterContext.Provider value={{state ,dispatch, data }} >
            {children}
        </filterContext.Provider>
    );
}

const useFilter = () => useContext(filterContext);

export  { FilterProvider , useFilter};