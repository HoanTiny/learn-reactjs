import { Box, FormHelperText, OutlinedInput, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";

import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function QuantityField(props) {
  const { form, name, label, disabled } = props;
  const { formState, setValue } = form;
  const hasError = formState.errors[name];

  return (
    <FormControl
      fullWidth
      margin="normal"
      variant="outlined"
      sx={{
        textAlign: "left",
      }}
    >
      <Typography>{label}</Typography>
      <Controller
        name={name}
        control={form.control}
        render={({ field }) => (
          <Box
            sx={{
              display: "flex",
              flexFlow: "row nowrap",
              alignItems: "center",
              maxWidth: "200px",
            }}
          >
            <IconButton
              onClick={() =>
                setValue(
                  name,
                  Number.parseInt(field.value)
                    ? Number.parseInt(field.value) - 1
                    : 1
                )
              }
            >
              <RemoveCircleOutline />
            </IconButton>

            <OutlinedInput
              {...field}
              id={name}
              type="number"
              error={!!hasError}
            />
            <IconButton
              onClick={() =>
                setValue(
                  name,
                  Number.parseInt(field.value)
                    ? Number.parseInt(field.value) + 1
                    : 1
                )
              }
            >
              <AddCircleOutline />
            </IconButton>
          </Box>
        )}
        error={!!hasError}
        helperText={formState.errors[name]?.message}
        disabled={disabled}
      />
      <FormHelperText error={!!hasError}>
        {formState.errors[name]?.message}
      </FormHelperText>
    </FormControl>
  );
}

export default QuantityField;
