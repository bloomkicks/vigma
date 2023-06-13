import { useDispatch } from "react-redux";
import { popupActions } from "@/store/popup-slice";
import GiftBanner from "@/components/ui/GiftBanner";
import Timer from "@/components/hero/Timer";
import NavLinks from "./NavLinks";

const NavMenu = ({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) => {
  const dispatch = useDispatch();
  function callConsultantHandler() {
    dispatch(popupActions.togglePopup('call-consultant'));
  }

  return (
    <nav
      onClick={onClick}
      className={
        "fixed left-0 top-0 w-full h-full min-h-[99vh] pt-[118px] pl-[52px] xs:pl-[40px] bg-light text-black pb-[78px] transition-transform duration-[400ms] lg:duration-[450ms] ease-out translate-x-full -z-10 lg:hidden"
      }
      style={{ transform: open ? "none" : "translateX(100%)" }}
    >
      <div className="absolute top-0 left-0 w-full h-16 bg-dark shadow-[1px_3px_4px_rgba(0,0,0,0.35)]"></div>
      <NavLinks styles="mb-11" />
      <div className="mt-auto mb-2">
        <p className="subtitle1 inline-block mr-[14px]">
          Акция <span className="font-semibold">-40%</span>
        </p>
        <Timer styles="inline-block" />
      </div>
      <GiftBanner />
      <button
        onClick={callConsultantHandler}
        className="button shadow-normal mt-[34px]"
      >
        Оставить заявку
      </button>
    </nav>
  );
};

export default NavMenu;
