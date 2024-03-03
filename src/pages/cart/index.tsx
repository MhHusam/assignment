import Checkout from "../../components/Cart/Checkout";


const Cart = () => {


  return (
    <div>
      <div className="bg-grayCard flex justify-center text-[18px] py-2">
        <span className="text-blueText">Home</span>
        <span className="text-greyLigt">/</span>{" "}
        <span className="text-blueText">Hot Deal</span>{" "}
        <span className="text-greyLigt">/</span>
        <span>Nike Airmax 270 React</span>
      </div>
      <Checkout />
    </div>
  );
};

export default Cart;
