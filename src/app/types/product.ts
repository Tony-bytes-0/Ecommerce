import { SelectChangeEvent } from "@mui/material";
import { CategoryType } from "./category";
//import { File } from "buffer";
import { File } from "buffer";

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
  id: string;
  name: string;
  description: string;
  price: string;
  stock: string;
  categoryId: string;
  images: any[]; 
};

export interface UpdateProducType extends INewProductType {
  categoryId: string
}

export type ModalHandlersAndTokenType = {
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  token: string;
  updateFormFields: UpdateProducType
  updateHandler: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: string
  ) => void;
  updateSelectorHandler: (event: SelectChangeEvent) => void;
  updateImageHandler: any;
  updateFetchFunction: () => void;
  setFixedValuesInFormData: (arg0: ProductType) => void;
  deleteProduct: (arg0: string) => void;
}

export interface TableProducTypeList extends ModalHandlersAndTokenType  {
  productList: ProductType[];
};

export interface RowProducType extends ModalHandlersAndTokenType {
    product: ProductType;
}

export type ProductImage = {
  url: string;
}

export type ProductImageArray = {
  images: ProductImage[]
}

export const exampleINewProductType: INewProductType = {
  id:"",
  name: "",
  description: "",
  price: "",
  stock: "",
  categoryId: "",
  images: []
}
