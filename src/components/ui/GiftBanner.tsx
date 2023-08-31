const gifts: { imgName: string; title: string }[] = [
  {
    imgName: "вытяжка.jpg",
    title: "Вытяжка",
  },
  {
    imgName: "плита.jpg",
    title: "Плита",
  },
  {
    imgName: "микроволновка.jpg",
    title: "Микроволновка",
  },
];

const GiftBanner = ({ styles, title }: { styles?: string; title?: string }) => {
  return (
    <div className={styles || ""}>
      <p className="subtitle1 mb-3.5 lg:mb-5">
        {title || "+ Подарок к вашей кухне:"}
      </p>
      <div className="flex flex-row items-center justify-start space-x-2 lg:space-x-3">
        {gifts.map((gift) => (
          <img
            src={`/images/gifts/${gift.imgName}`}
            alt={gift.title}
            title={gift.title}
            key={gift.imgName}
            width="110px"
            height="62px"
            className="w-[92px] h-auto rounded-1 shadow-normal border-black border-[0.1px] object-cover object-center lg:w-[110px]"
          />
        ))}
      </div>
    </div>
  );
};

export default GiftBanner;
