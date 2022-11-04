export type WorkProperty = {
  property: string;
  value: string;
};

export type WorkImage = {
  src: string;
  isVertical?: boolean;
  width: number;
  height: number;
};

export type WorkInfoProps = {
  title: string;
  description: string;
  price: string;
  colors: string[];
  properties: WorkProperty[];
};

export type WorkProps = {
  id?: string;
  info: WorkInfoProps;
  images: WorkImage[];
};
