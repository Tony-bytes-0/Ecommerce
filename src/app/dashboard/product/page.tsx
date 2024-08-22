"use client"
import { baseDashboardContainer } from "@/app/types/common";
import ProductList from "./product_list/ProductList";
import { useAppSelector } from "@/lib/hooks";
import { Box } from "@mui/material";
import InvalidCredentials from "../InvalidCredentials";

export default function Page() {
    const token = useAppSelector((state) => state.sesionToken.token);
    return (
        <Box sx={baseDashboardContainer}>
            {/* 
                {token !== 'no' ? 
            */}
                <ProductList />
                :
            {/* 
                <InvalidCredentials />
                } 
            */}
        </Box>
    )
}