import PropTypes from 'prop-types';
import { useState, useEffect, createContext } from "react";

const SearchContext = createContext();

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function SearchProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [imageProduct, setImageProduct] = useState("");
  const [titleProduct, setTitleProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [productRate, setProductRate] = useState(0);
  const [filterByPriceValue, setFilterByPriceValue] = useState("Name");
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [filterByCategoryValue, setFilterByCategoryValue] = useState("");
  const [filterByRateValue, setFilterByRateValue] = useState(0);

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productList = await getData();
        setProducts(productList);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let filteredProducts = products.filter((product) => {
      const productName = product.title.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return productName.includes(searchText);
    }).sort((a, b) => {
        switch (filterByPriceValue) {
            case "Price_Low":
                return a.price - b.price;
            case "Price_High":
                return b.price - a.price;
            default:
              return a.title.localeCompare(b.title);
        }
    });

    if (filterByCategoryValue) {
      filteredProducts = filteredProducts.filter((product) => {
        const productCategory = product.category.toLowerCase();
        return productCategory === filterByCategoryValue;
      });
    }

    if (filterByRateValue) {
      filteredProducts = filteredProducts.filter((product) => {
        const productRate = Math.round(product.rating.rate);
        return productRate >= filterByRateValue && productRate < filterByRateValue + 1;
      });
    }

    setSearchedProducts(filteredProducts);
  }, [products, searchValue, filterByPriceValue, filterByCategoryValue, filterByRateValue]);

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        searchedProducts,
        setSearchedProducts,
        isLoading,
        isOpen,
        setIsOpen,
        imageProduct,
        setImageProduct,
        titleProduct,
        setTitleProduct,
        priceProduct,
        setPriceProduct,
        descriptionProduct,
        setDescriptionProduct,
        productRate,
        setProductRate,
        filterByPriceValue,
        setFilterByPriceValue,
        filterByCategoryValue,
        setFilterByCategoryValue,
        filterByRateValue,
        setFilterByRateValue,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };
