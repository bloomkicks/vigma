import GiftBanner from "@/components/ui/GiftBanner";
import Timer from "@/components/hero/Timer";
import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import NavLinks from "./NavLinks";

const NavMenu = ({ open }: { open: boolean }) => {
  const ref = useRef<HTMLBodyElement>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.body as HTMLBodyElement;
    setMounted(true);
  }, []);

  return mounted ? (
    createPortal(
      <section
        className="w-full h-[100vh] pt-[128px] pl-[52px] bg-white text-black transition-transform duration-[400ms] ease-out z-40 fixed left-0 top-0 pb-[78px]"
        style={{ transform: open ? "" : "translateX(100%)" }}
      >
        <NavLinks styles="mb-11" />
        <div className="mt-auto mb-2">
          <p className="subtitle1 inline-block mr-[14px]">
            Акция <span className="font-semibold">-40%</span>
          </p>
          <Timer styles="inline-block" />
        </div>
        <GiftBanner />
        <button className="txt-button py-2.5 px-[30px] rounded-2 bg-primary-light shadow-normal mt-[34px]">
          Оставить заявку
        </button>
      </section>,
      document.body
    )
  ) : (
    <></>
  );
};

export default NavMenu;
