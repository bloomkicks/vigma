import categories from "@/data/categories";

const SortSelect = ({
  onSort,
  selected,
}: {
  onSort: (e: any) => void;
  selected: string;
}) => {
  function sortHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    onSort(e.target.value);
  }

  return (
    <div className="">
      <img
        src="/images/products/sort-button.svg"
        alt="Сортировать"
        className="h-[26px] w-auto inline-block align-middle"
      />
      <div className="ml-[22px] inline-flex flex-row justify-start items-center flex-nowrap align-middle">
        <img
          src="/images/general/short-arrow-right.svg"
          alt=""
          className="w-2.5 h-auto inline-block mr-2.5 shrink-0 lg:scale-110"
        />
        <select
          onChange={sortHandler}
          name="sort-category"
          id="sort-category"
          className="px-3.5 py-2.5 button-lg shrink w-[82.5%] bg-white appearance-none shadow-normal lg:w-[250px]"
        >
          {[{ name: "all", title: "Все кухни" }]
            .concat(categories)
            .map((category) => (
              <option
                value={category.name}
                selected={category.name === selected}
              >
                {category.title}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default SortSelect;
