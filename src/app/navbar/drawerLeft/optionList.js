import CategoryIcon from "@mui/icons-material/Category";
import LabelIcon from "@mui/icons-material/Label";
import PersonIcon from "@mui/icons-material/Person";

export const optionList = {
  user: [
     {
      name: "Listar usuarios",
      navigator: "/dashboard/user/userList",
      icon: <PersonIcon />,
     },
    {
      name: "Crear usuario",
      navigator: "/dashboard/user/userRegister",
      icon: <PersonIcon />,
    },
],
  category: [
    {
      name: "Ver categorias",
      navigator: "/dashboard/category/categoryList",
      icon: <LabelIcon />,
    },
],
  product: [
    {
        name: "Listar Productos",
        navigator: "",
        icon: <CategoryIcon />,
      },
  ]
};
