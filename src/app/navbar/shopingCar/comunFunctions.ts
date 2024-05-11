import { Item } from "@/app/home/BodyInfoCards/ItemTypes";
import Swal from "sweetalert2";

const key = "carItems";
export const getList = () => {
  const listString = localStorage.getItem(key);
  return listString ? JSON.parse(listString) : [];
}
export const saveList = (list: []) => {
  localStorage.setItem(key, JSON.stringify(list));
  return undefined
}
export const addStorageItem = (item: Item) => {
  const list = getList();
  const selected = list.filter((e: Item) => e.id == item.id);
  if (selected.length == 0) {
    list.push(item);
    saveList(list);
  } else {
    const newList = list.map((e: Item) =>
      e.id === item.id ? { ...e, amount: e.amount + 1 } : e
    );
    saveList(newList);
  }
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Agregado!",
    showConfirmButton: false,
    timer: 500
  });
};
export const handleSetAmount = ( item: Item, amount: number) => {
const list = getList();
const selected = list.filter((e: Item) => e.id == item.id);
  if (selected.length !== 0) {
    const newList = list.map((e: Item) =>
      e.id === item.id ? { ...e, amount: amount } : e
    );
    saveList(newList);
  }
}
export const removeStorageItem = (item: Item) => {
  const list = getList();
  const newList = list.filter((product: Item) => product.id !== item.id)
  saveList(newList)
}


  /* //Aqui 
  const key = "carItems";
  function getList() {
    const listString = localStorage.getItem(key);
    return listString ? JSON.parse(listString) : [];
  }
  function saveList(list: []) {
    localStorage.setItem(key, JSON.stringify(list));
  }
  const handleAddItem = (item: Item) => {
    const list = getList();
    const selected = list.filter((e: Item) => e.id == item.id);
    if (selected.length == 0) {
      item.amount = 1;
      list.push(item);
      saveList(list);
    } else {
      const newList = list.map((e: Item) =>
        e.id === item.id ? { ...e, amount: e.amount + 1 } : e
      );
      saveList(newList);
    }
  };
  const handleRemoveItem = (id: number) => {
    const list = getList();
    const selected = list.filter((e: Item) => e.id == id);
    if (selected.length !== 0) {
      const newList = list.map((e: Item) =>
        e.id === item.id ? { ...e, amount: e.amount - 1 } : e
      );
      saveList(newList);
    }
  };
  */ // Aqui