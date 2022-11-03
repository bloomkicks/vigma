export type WorkProperty = {
  property: string;
  value: string;
};

export type WorkImage = {
  src: string;
};

export type WorkInfoProps = {
  title: string;
  description: string;
  price: string;
  colors: string[];
  properties: WorkProperty[];
};
