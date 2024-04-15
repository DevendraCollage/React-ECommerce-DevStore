const productReducer = (state, action) => {
  //? Or also you can done like this
  //   if (action.type === "SET_LOADING") {
  //     // When Data is Not Load
  //     return {
  //       ...state,
  //       isLoading: true,
  //     };
  //   }
  //   if (action.type === "MY_API_ERROR") {
  //     // Data not displayed
  //     return {
  //       ...state,
  //       isLoading: false,
  //       isError: true,
  //     };
  //   }

  //? You can also done like this to fetch API data
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      const featureData = action.payload.filter((curElem) => {
        return curElem.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default productReducer;
