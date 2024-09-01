export type menuOption = {
    name: string;
    navigator: string;
    icon: JSX.Element;
  };
  export interface MenuOptionList {
    user: menuOption[], category: menuOption[], product: menuOption[],
  }

