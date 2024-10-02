import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Box } from "@mui/material";
import CustomTitleHeader from "../components/TittleHeader";
import ElegantFont from "../components/ElegantFont";
import { setName } from "@/lib/productfilters/simpleObject";
import Categorys from "../navbar/categorys/Categorys";
import { useEffect, useState } from "react";
import { baseGet } from "../helpers/baseApiRequest";
import { CategoryType } from "../types/category";

interface props {
  categoryList: CategoryType[];
}

const ActualPage: React.FC<props> = ({ categoryList }) => {
  const simpleObj = useAppSelector((state) => state.simpleObject)
  const boxStyles = { padding: 5, width: "100%" };
  const dispatch = useAppDispatch()
  const handleChangeS = () => {
    dispatch(setName('NAME!"!!!!!!!!'))
  }
  

  //const get
  return (
    <Box sx={boxStyles}>
      <CustomTitleHeader
        width="100%"
        children={<ElegantFont textColor="#003A75" children={simpleObj.name}  />}
      />
      <Categorys xs={12} categoryList={categoryList} />
    </Box>
  );
};

export default ActualPage;
