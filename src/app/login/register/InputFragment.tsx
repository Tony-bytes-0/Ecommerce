import { InputAdornment, TextField, Typography } from "@mui/material";
import { globalStyle } from "@/app/types/common";

type InputFragment = {
  handler: Function;
  inputName: string;
  value: string;
  error: boolean;
  hint: string;
};
const InputFragment: React.FC<InputFragment> = ({
  handler,
  inputName,
  value,
  error,
  hint
}) => {
  const inputInnerStyles = {
    height: 40,
  };
  return (
    <>
      <Typography style={globalStyle} sx={{ color: "#FFFFFF" }} padding={1} fontSize={15}>
        {inputName}
      </Typography>
      <TextField
        sx={{ input: { color: "#FFFFFF" } }}
        error={error}
        size="small"
        variant="outlined"
        style={inputInnerStyles}
        value={value}
        placeholder={inputName}
        onChange={handler as () => void}
        fullWidth
      />
      {error ? (
        <Typography style={globalStyle} sx={{ color: "#FF6464" }} padding={2} fontSize={12}>
          {hint}
        </Typography>
      ) : (
        <></>
      )}
    </>
  );
};

/*           InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountBoxIcon /> 
              </InputAdornment>
            ),
          }} */

export default InputFragment;
