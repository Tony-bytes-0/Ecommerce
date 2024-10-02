import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Box } from "@mui/material";
import CustomTitleHeader from "../components/TittleHeader";
import ElegantFont from "../components/ElegantFont";
import Categorys from "../navbar/categorys/Categorys";
import { CategoryType } from "../types/category";

interface props {
  filter: { id: string; name: string };
  categoryList: CategoryType[];
  categorySelectHandler: (arg0: any) => void;
}

const ActualPage: React.FC<props> = ({
  filter,
  categoryList,
  categorySelectHandler,
}) => {
  //const filters = useAppSelector((state) => state.productFiltersSlice);

  const boxStyles = { padding: 5, width: "100%" };
  //const get
  return (
    <Box sx={boxStyles}>
      <CustomTitleHeader
        width="100%"
        children={<ElegantFont textColor="#003A75" children={filter.name} />}
      />
      <Categorys
        xs={12}
        categoryList={categoryList}
        categorySelectHandler={categorySelectHandler}
      />
    </Box>
  );
};

export default ActualPage;
