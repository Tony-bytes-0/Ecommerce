import { Divider, ListItem, Typography } from "@mui/material";

const TitleDivider: React.FC<{ title: string; fontSize: number }> = ({
  title,
  fontSize,
}) => {
  return (
    <>
      <ListItem>
        <Typography fontSize={fontSize}>
          <b>{title}</b>
        </Typography>
      </ListItem>
      <Divider />
    </>
  );
};

export default TitleDivider;
