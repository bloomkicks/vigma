import Image from "next/image";
import NavLink from "./NavLink";

let logoSrc = process.env.GENERAL_ASSETS + "/header-logo.png";

const HeaderLogo = () => {
  return (
    <NavLink href="/main" sx={{ pl: { xs: 1.5, md: 2 }, pr: 2 }}>
      <Image
        width={52}
        height={40}
        src={logoSrc}
        title="На Главную"
        loading="eager"
        alt="На Главную"
      />
    </NavLink>
  );
};

export default HeaderLogo;
