import { Box } from "@mui/material"
import { ReactNode } from "react"


const CustomTitleHeader:  React.FC<{children: ReactNode, width: string}> = ({children, width}) => {
    return (
        <Box
        sx={{
          width: {width},
          margin: "auto",
          padding: 2,
          borderRadius: "20px",
          borderBottom: "solid",
          borderColor: "#F1F1F1",
          opacity: '80%'
        }}
      >
        {children}
      </Box>
    )
}

export default CustomTitleHeader