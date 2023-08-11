import Link from "next/link";

const LinkToKitchens = () => {
  return (
    <Link href="/kitchens" passHref legacyBehavior>
      <a className="block w-fit mx-auto p-1 button-lg group mt-[26px] lg:mt-[46px]">
        Больше кухонь
        <img
          src="/images/general/long-arrow-right.svg"
          alt=""
          className="ml-2 transition-transform duration-[50ms] ease-out group-hover:translate-x-0.5 inline-block align-middle lg:scale-110"
        />
      </a>
    </Link>
  );
};

export default LinkToKitchens;
