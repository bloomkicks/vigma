export type ProductProperty = {
  property: string;
  value: string;
};

export type ProductImage = {
  src: string;
  isVertical?: boolean;
  width?: number;
  height?: number;
};

export type ProductInfoProps = {
  title: string;
  description?: string;
  price: string;
  colors: string[];
  properties: ProductProperty[];
};

export type ProductProps = {
  id?: string;
  info: ProductInfoProps;
  images: ProductImage[];
};
