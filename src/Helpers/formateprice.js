//? In this component we are converting the price to Indian Rupee

const FormatePrice = ({ price }) => {
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigit: 2,
  }).format(price / 100);
};

export default FormatePrice;
