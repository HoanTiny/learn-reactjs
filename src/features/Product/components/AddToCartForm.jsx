import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import QuantityField from "../../../components/form-controls/QuantityField";

AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

function AddToCartForm({ onSubmit = null }) {
  const schema = yup.object({
    quantity: yup
      .number()
      .min(1, "Minimum value is 1")
      .required("Please enter quantity")
      .typeError("Please enter a number"),
  });

  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }

    // form.reset();
  };
  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      style={{ textAlign: "left" }}
    >
      <QuantityField name="quantity" label="Quantity" form={form} />

      <Button
        type="submit"
        sx={{
          marginTop: "12px",
        }}
        variant="contained"
        color="primary"
        style={{ width: "250px", textAlign: "left" }}
        size="large"
      >
        ADD TO CART
      </Button>
    </form>
  );
}

export default AddToCartForm;
