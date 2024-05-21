import { yupResolver } from "@hookform/resolvers/yup";
import { LockOutlined } from "@mui/icons-material";
import { Avatar, Button, LinearProgress, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../../components/form-controls/InputField";
import PasswordField from "../../../../components/form-controls/PasswordField";
import "./styles.scss";

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const schema = yup.object({
    identifier: yup
      .string()
      .email("Invalid email")
      .required("Please enter your email"),
    password: yup.string().required("Please enter your password"),
  });

  const form = useForm({
    defaultValues: {
      identifier: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }

    // form.reset();
  };

  const isSubmitting = form.formState.isSubmitting;

  return (
    <div className="auth-form--register">
      {isSubmitting && <LinearProgress />}
      <Avatar
        sx={{
          margin: "0 auto",
          backgroundColor: "red",
          marginTop: "12px",
        }}
      >
        <LockOutlined />
      </Avatar>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "20px",
          marginTop: "12px",
        }}
      >
        Sign In
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="identifier" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />

        <Button
          type="submit"
          sx={{
            marginTop: "12px",
          }}
          variant="contained"
          color="primary"
          fullWidth
          disabled={isSubmitting}
        >
          Sign in
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
