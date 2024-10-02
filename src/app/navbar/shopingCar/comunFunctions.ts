import { ProductType } from "@/app/types/product";
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
export const addStorageItem = (product: ProductType) => {
  const list = getList();
  const selected = list.filter((e: ProductType) => e.id == product.id);
  if (selected.length == 0) {
    list.push(product);
    saveList(list);
  } else {
    const newList = list.map((e: ProductType) =>
      e.id === product.id ? { ...e, stock: e.stock + 1 } : e
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
export const handleSetAmount = ( ProductType: ProductType, amount: number) => {
const list = getList();
const selected = list.filter((e: ProductType) => e.id == ProductType.id);
  if (selected.length !== 0) {
    const newList = list.map((e: ProductType) =>
      e.id === ProductType.id ? { ...e, amount: amount } : e
    );
    saveList(newList);
  }
}
export const removeStorageItem = (ProductType: ProductType) => {
  const list = getList();
  const newList = list.filter((product: ProductType) => product.id !== ProductType.id)
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
  const handleAddItem = (ProductType: ProductType) => {
    const list = getList();
    const selected = list.filter((e: ProductType) => e.id == ProductType.id);
    if (selected.length == 0) {
      ProductType.amount = 1;
      list.push(ProductType);
      saveList(list);
    } else {
      const newList = list.map((e: ProductType) =>
        e.id === ProductType.id ? { ...e, amount: e.amount + 1 } : e
      );
      saveList(newList);
    }
  };
  const handleRemoveItem = (id: number) => {
    const list = getList();
    const selected = list.filter((e: ProductType) => e.id == id);
    if (selected.length !== 0) {
      const newList = list.map((e: ProductType) =>
        e.id === ProductType.id ? { ...e, amount: e.amount - 1 } : e
      );
      saveList(newList);
    }
  };
  */ // Aqui