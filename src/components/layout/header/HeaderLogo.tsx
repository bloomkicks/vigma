import Image from "next/image";
import NavLink from "../../ui/NavLink";

let logoSrc = process.env.GENERAL_ASSETS + "/header-logo.png";

const HeaderLogo = () => {
  return (
    <NavLink href="/main">
      <Image
        height={36.5}
        width={49.5}
        src={logoSrc}
        title="На Главную"
        loading="eager"
        alt="На Главную"
      />
    </NavLink>
  );
};

export default HeaderLogo;
