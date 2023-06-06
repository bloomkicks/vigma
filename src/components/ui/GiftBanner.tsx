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

const GiftBanner = ({ styles }: { styles?: string }) => {
  return (
    <div className={styles || ""}>
      <p className="subtitle1 mb-3.5">+ Подарок к кухне:</p>
      <div className="flex flex-row items-center justify-start space-x-2">
        {gifts.map((gift) => (
          <img
            src={`/images/quiz/gifts/${gift.imgName}`}
            alt={gift.title}
            title={gift.title}
            key={gift.imgName}
            className="rounded-2 shadow-normal border-black border-[0.5px]"
          />
        ))}
      </div>
    </div>
  );
};

export default GiftBanner;
