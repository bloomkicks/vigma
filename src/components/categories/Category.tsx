import Link from "next/link";

const Category = ({
  title,
  imgSrc,
  name,
}: {
  title: string;
  imgSrc: string;
  name: string;
}) => {
  return (
    <Link href={"/kitchens#" + name} passHref legacyBehavior>
      <a className="block w-[200px] shrink-0 shadow-dark rounded-1 hover:!opacity-[0.82] lg:w-[242px] lg:!mr-[47px] lg:!mb-[45px]">
        <img
          src={imgSrc}
          alt="Изображение не найдено"
          width="242px"
          height="142px"
          className="w-full h-[115px] object-cover object-center text-center rounded-t-1 lg:h-[142px]"
        />
        <div className="px-4 pr-4.5 py-2.5 bg-white text-black rounded-b-1 whitespace-nowrap">
          <span className="button-lg align-middle whitespace-normal">{title}</span>
          <img
            src="/images/general/long-arrow-right.svg"
            alt=""
            className="inline ml-2 w-[17.25px] h-auto align-middle lg:scale-110 object-cover object-center relative top-[0.5px] md:top-[1.5px]"
          />
        </div>
      </a>
    </Link>
  );
};

export default Category;
