export type CategoryType= {
    _id:string;
    name:string;
    updateFetchFunction: () => void;
    token:string;
}

export interface propsCategoryList {
    categoryList: CategoryType[];
    updateFetchFunction: () => void;
    token: string;
  }