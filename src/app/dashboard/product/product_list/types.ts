export type ProductType= {
    name:string;
    description:string;
    stock: string;
    price: string;
    category: string;
    updateFetchFunction: () => void;
    token:string;
}

export interface propsProductList {
    productList: ProductType[];
    updateFetchFunction: () => void;
    token: string;
  }