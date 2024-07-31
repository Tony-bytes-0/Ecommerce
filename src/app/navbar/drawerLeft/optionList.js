import CategoryIcon from "@mui/icons-material/Category";
import LabelIcon from "@mui/icons-material/Label";
import PersonIcon from "@mui/icons-material/Person";

export const OptionList = {
  user: {
    list: {
      name: "Listar usuarios",
      navigator: "/dashboard/user/userList",
      icon: <PersonIcon />,
    },
    create: {
      name: "Crear usuario",
      navigator: "/dashboard/user/userRegister",
      icon: <PersonIcon />,
    },
  },
  category: {
    list: {
      name: "Ver categorias",
      navigator: "/dashboard/category/categoryList",
      icon: <LabelIcon />,
    },
  },
  product: {
    list: {
      name: "Listar Productos",
      navigator: "",
      icon: <CategoryIcon />,
    },
  },
};
