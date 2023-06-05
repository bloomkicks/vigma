const MenuSetter = () => {
  return (
    <button className="flex flex-col justify-center items-center rounded-2 px-2 py-2.5 hover:bg-gray-800 transition-colors space-y-[5.82px]">
      {[0, 1, 2].map((bar) => (
        <div
          className="bg-white h-[4.1px] w-[39px] rounded-[1px]"
          key={bar}
        ></div>
      ))}
    </button>
  );
};

export default MenuSetter;
