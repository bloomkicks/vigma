export type ProductProperty = {
  property: string;
  value: string;
};

export type ProductImage = {
  src: string;
  isHorizontal?: boolean;
  width?: number;
  height?: number;
};

export type ProductInfoProps = {
  title: string;
  description?: string;
  price: string;
  colors?: string[];
};

export type ProductProps = {
  id?: string;
  info: ProductInfoProps;
  images: ProductImage[];
};
