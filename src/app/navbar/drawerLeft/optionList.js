import CategoryIcon from "@mui/icons-material/Category";
import LabelIcon from "@mui/icons-material/Label";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from '@mui/icons-material/Add';

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
      icon: <AddIcon />,
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
        name: "Ver Productos",
        navigator: "/dashboard/product",
        icon: <CategoryIcon />,
      },
  ]
};
