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
      <a className="block w-[190px] shrink-0 shadow-dark rounded-1 hover:!opacity-[0.82] lg:w-[242px] lg:!mr-[47px] lg:!mb-[45px]">
        <img
          src={imgSrc}
          alt="Изображение не найдено"
          className="w-full h-[110px] object-cover object-center text-center rounded-t-1 lg:h-[142px]"
        />
        <div className="px-4 pr-4.5 py-2.5 bg-white text-black rounded-b-1">
          <span className="button-lg align-middle">{title}</span>
          <img
            src="/images/general/long-arrow-right.svg"
            alt=""
            className="inline ml-2 w-[17.25px] h-auto algin-middle lg:scale-110"
          />
        </div>
      </a>
    </Link>
  );
};

export default Category;
