export type Item = {
  id: number;
  name: string;
  description: string;
  price: number;
  amount: number;
  imgUrl: string;
};
export type ItemAndAmount = {
  item: Item;
  amountToChange: number;
}
export type ListOfItems = {
  items: Item[];
};
