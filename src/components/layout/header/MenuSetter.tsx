const MenuSetter = ({
  isMenuOpen,
  onClick,
}: {
  isMenuOpen?: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className="group flex flex-col justify-center items-center rounded-2 px-2 py-2.5 hover:bg-dark-lightened transition-colors duration-150 lg:duration-200 space-y-[5.82px] lg:hidden"
      onClick={onClick}
      aria-label="Открыть меню"
    >
      {[0, 1, 2].map((bar) => (
        <div
          className="bg-white h-[4.1px] w-[39px] rounded-[1px] transition-all duration-300 ease-out"
          style={{
            width: isMenuOpen ? "36px" : "39px",
            transform: isMenuOpen
              ? bar === 0
                ? "translateY(9.75px) rotate(45deg)"
                : bar === 2
                ? "translateY(-9.75px) rotate(-45deg)"
                : "translateX(150px)"
              : "none",
          }}
          key={bar}
        ></div>
      ))}
    </button>
  );
};

export default MenuSetter;
