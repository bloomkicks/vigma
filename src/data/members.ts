export type StaffMember = {
  name: string;
  specialty: string;
  imgName: string;
};

const members: StaffMember[] = [
  {
    name: "Владимир Кузнецов",
    specialty: "Главный технолог производства",
    imgName: "vladimir-kuznetsov.jpg",
  },
  {
    name: "Станислав Григорьев",
    specialty: "Главный мебельщик полного цикла",
    imgName: "stanislav-grigoryev.jpg",
  },
  {
    name: "Сергей Белоножко",
    specialty: "Главный специалист краснодеревщик",
    imgName: "sergey-belonozhko.jpg",
  },
  {
    name: "Галина Филатова",
    specialty: "Главный менеджер-консультант",
    imgName: "galina-filatova.jpg",
  },
  {
    name: "Алексей Минаев",
    specialty: "Главный специалист по сборке кухонь",
    imgName: "alexey-minaev.jpg",
  },
  {
    name: "Михаил Филатов",
    specialty: "Руководитель производства",
    imgName: "mihail-papukov.jpg",
  },
  {
    name: "Кирилл Попов",
    specialty: "Главный дизайнер-проектировщик",
    imgName: "kirill-popov.jpg",
  },
];

export default members;
