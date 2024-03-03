 
import styles from "./Checkout.module.scss";
const Paysection = () => {
  return (
    <div className="grid grid-cols-7    ">
      <div className={styles.searchContainer}>
        <div className={styles.inputContainer}>
          <input className={styles.input} placeholder="Voucher code..." />
        </div>
        <div className={styles.btnSearch}>Redeem</div>
      </div>
      <div className="col-span-3">
        <div className="grid grid-cols-2   ">
          <div className="space-y-4">
            <div>Subtotal</div>
            <div>Shipping fee</div>
            <div>Coupon</div>
          </div>
          <div className="space-y-4 self-end">
            <div>$998</div>
            <div>$20</div>
            <div>No</div>
          </div>
        </div>
        <div className="bg-[#F6F7F8] h-[2px] w-full max-w-[70%] my-5"></div>
        <div className="grid grid-cols-2  ">
          <div className="text-[30px] font-medium">TOTAL</div>
          <div className="text-[30px] font-medium">$118</div>
        </div>
        <div className="bg-[#33A0FF] cursor-pointer rounded-md flex justify-center items-center p-4 max-w-[70%] mt-5 mb-32 text-white font-medium text-[18px]">
          Check out
        </div>
      </div>
    </div>
  );
};

export default Paysection;
