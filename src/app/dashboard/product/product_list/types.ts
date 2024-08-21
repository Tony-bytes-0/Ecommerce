export type ProductType= {
    name:string;
    description:string;
    stock: string;
    price: string;
    category: string;
}

export type TableComponentProductType = {
    name:string;
    description:string;
    stock: string;
    price: string;
    category: string;
    updateFetchFunction: () => void;
    provitionalDelete: (arg0: string, arg1:string) => void;
    token:string;
}

export interface propsProductList {
    productList: ProductType[];
    updateFetchFunction: () => void;
    provitionalDelete: (arg0: string, arg1:string) => void;
    token: string;
  }