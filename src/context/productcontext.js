//* 1. Create the Context
//* 2. Provider
//* 3. consumer => useContext Hook

import { useContext, createContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../Reducer/productsReducer";

//? 1. First Step Create the Context
const AppContext = createContext();

//? Create the API Variable
const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [], // We are using featured products as in the API if we use featured True then an then we will fetch those products
  //? Add the object new properties for single product
  isSingleLoading: false,
  singleProduct: {},
};

//? 2. Second Step create the Provider
//* This children is the now work as the App Component
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //? Define the getProducts method and fetch the data using axios third party library
  //* This were i will get all the products of the API
  const getProduct = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      // console.log(res); for check the res in the console
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "MY_API_ERROR" });
    }
  };

  //* This were i will get products by their id
  const getSingleProducts = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      // console.log(res); for check the res in the console
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  //? Call the API Once that for use the useEffect
  useEffect(() => {
    getProduct(API);
    getSingleProducts(`${API}?id=devserialnoa`); // I'll provide the static id to fetch the single product data but this will not work properly
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProducts }}>
      {children}
    </AppContext.Provider>
  );
};

//TODO: This is my Custom Hook
const useMyCustomHook = () => {
  return useContext(AppContext);
};

//? 3. Export the AppProvider and AppContext
export { AppProvider, AppContext, useMyCustomHook };
