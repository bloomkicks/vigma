import ProductKitchenSlices from "./ProductSlices";
import { popupActions } from "@/store/popup-slice";
import { useDispatch } from "react-redux";
import ProductOldPrice from "./ProductOldPrice";
import Link from "next/link";
import type { ProductProps } from "@/data/products";

const ProductInfo = ({
  title,
  subtitle,
  description,
  price,
  discount = 40,
  oldPrice,
  name,
  slicesLength,
  isFull,
}: Omit<ProductProps, "imagesLength"> & { isFull?: boolean }) => {
  const dispatch = useDispatch();
  function calculatePriceHandler() {
    dispatch(popupActions.togglePopup("calculate-price"));
  }
  function inviteDesignerHandler() {
    dispatch(popupActions.togglePopup("invite-designer"));
  }

  return (
    <div
      className={`${
        isFull ? "px-1 lg:pt-[22px]" : "p-5 lg:pt-8"
      } pt-2.5 text-left rounded-b-2 w-full h-[35%] lg:h-[100%] lg:w-[44%] lg:pb-11 lg:px-8`}
    >
      <div className="mb-[6px]">
        <h4 className="large inline mr-[7px] lg:!text-desktop-large lg:mr-2.5">
          {title}
        </h4>
        <p className="subtitle1 inline lg:!text-desktop-subtitle1">
          {subtitle}
        </p>
        <p className="hidden txt-button mt-[5px] mb-4 lg:block">
          {description}
        </p>
      </div>
      <ProductKitchenSlices name={name} slicesLength={slicesLength} />
      <div className="mb-3 flex flex-row justify-start items-center lg:mb-[22px]">
        <div className="bg-dark text-primary rounded-1 px-[6px] py-[3px] pb-[5px] mb-[0.5px]">
          <span className="block text-[0.81rem] font-semibold">
            -{discount}%
          </span>
        </div>
        <ProductOldPrice
          oldPrice={oldPrice}
          price={price}
          discount={discount}
        />
        <p className="body1 numbers font-semibold mt-[0.5px] lg:mt-0">
          {price}₽{" "}
          <span className="body2 font-base font-normal">за п.м.</span>
        </p>
      </div>
      <ProductKitchenSlices
        name={name}
        slicesLength={slicesLength}
        isForFull={true}
        isFull={isFull}
      />
      <button
        onClick={calculatePriceHandler}
        className={`button text-center hover:opacity-100 no-underline w-full mb-2.5 ${
          isFull ? "block !bg-gray hover:!bg-gray-dark" : "hidden"
        } lg:block lg:!py-[11px]`}
      >
        Рассчитать стоимость
      </button>
      {isFull ? (
        <>
          <button
            onClick={inviteDesignerHandler}
            className={`button text-center hover:opacity-100 no-underline w-full mb-2.5 lg:!py-[11px]`}
          >
            Вызвать дизайнера
          </button>
          <p className="w-[calc(100%+100px)] mt-3">
            Выезд, замер и проект –{" "}
            <span className="inline-block py-0.5 px-[5.5px] bg-primary bg-opacity-[0.45] -skew-x-6 font-semibold">
              бесплатно
            </span>
          </p>
        </>
      ) : (
        <Link href={`/${name}`} passHref legacyBehavior>
          <a
            className={`button block text-center hover:opacity-100 no-underline w-full !py-2 lg:!bg-gray lg:hover:!bg-gray-dark lg:!py-[11px] ${
              isFull ? "hidden" : ""
            }`}
          >
            Узнать больше
          </a>
        </Link>
      )}
    </div>
  );
};

export default ProductInfo;
