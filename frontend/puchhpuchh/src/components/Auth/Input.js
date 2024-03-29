import React from "react";
import { Grid, TextField, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

function Input({
  name,
  handleChange,
  label,
  autoFocus,
  type,
  handleShowPassword,
  half,
}) {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={handleChange}
        variant="filled"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        InputProps={
          name === "password" && {
            endAdornment: (
              <InputAdornment
                postion="end"
                style={{ transform: "translate(10px 10px)" }}
              >
                <div
                  style={{
                    marginTop: "-1rem",
                    transform: "translateX(0.6rem)",
                  }}
                >
                  <IconButton onClick={handleShowPassword}>
                    {type === "password" ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </div>
              </InputAdornment>
            ),
          }
        }
      />
    </Grid>
  );
}

export default Input;
