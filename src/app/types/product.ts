import { SelectChangeEvent } from "@mui/material";
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
  categoryId: string;
  images: [{ url: string }];
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
}

export interface TableProducTypeList extends ModalHandlersAndTokenType  {
  productList: ProductType[];
  updateFetchFunction: () => void;
  provitionalDelete: (arg0: string, arg1: string) => void;
  
};

export interface RowProducType extends ModalHandlersAndTokenType {
    product: ProductType;
    updateFetchFunction: () => void;
    provitionalDelete: (arg0: string, arg1: string) => void;

}

export const exampleINewProductType: INewProductType = {
  name: "",
  description: "",
  price: "",
  stock: "",
  categoryId: "",
  images: [{ url: "" }]
}
