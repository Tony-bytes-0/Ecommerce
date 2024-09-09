import { CategoryType } from "./category";

export type ProductType = {
  id: string;
  images: [{ url: string }];
  createdAt: string;
  name: string;
  description: string;
  stock: string;
  price: string;
  category: CategoryType;
};

export type INewProductType = {
  name: string;
  description: string;
  price: string;
  stock: string;
  category: string;
  images: [{ url: string }];
};

export type TableProducTypeList = {
  productList: ProductType[];
  updateFetchFunction: () => void;
  provitionalDelete: (arg0: string, arg1: string) => void;
  token: string;
};

export type RowProducType = {
    product: ProductType;
    updateFetchFunction: () => void;
    provitionalDelete: (arg0: string, arg1: string) => void;
    token: string;
}
