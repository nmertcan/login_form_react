import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  CardHeader,
  FormFeedback,
} from "reactstrap";

const initialValues = {
  email: "",
  password: "",
  accepted: false,
};

const errorMessages = {
  email: "Geçerli bir email adresi giriniz",
  password:
    "En az 8 karakter, 1 büyük harf, 1 küçük harf, 1 sembol ve 1 rakam içeren bir şifre giriniz",
};

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialValues);

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const [isValid, setIsValid] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

  useEffect(() => {
    if (
      validateEmail(formData.email) &&
      regex.test(formData.password) &&
      formData.accepted
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    if (name === "email") {
      setErrors((prev) => ({
        ...prev,
        email: !validateEmail(value),
      }));
    }

    if (name === "password") {
      setErrors((prev) => ({
        ...prev,
        password: !regex.test(value),
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValid) return;

    navigate("/success");
  };

  return (
    <Card className="mt-5 mx-auto" style={{ maxWidth: "500px" }}>
      <CardHeader>Login</CardHeader>

      <CardBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>

            <Input
              data-cy="email-input"
              id="email"
              name="email"
              type="email"
              placeholder="Email adresinizi giriniz"
              value={formData.email}
              onChange={handleChange}
              invalid={errors.email}
            />

            <FormFeedback data-cy="email-error">
              {errorMessages.email}
            </FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label for="password">Şifre</Label>

            <Input
              data-cy="password-input"
              id="password"
              name="password"
              type="password"
              placeholder="Şifrenizi giriniz"
              value={formData.password}
              onChange={handleChange}
              invalid={errors.password}
            />

            <FormFeedback data-cy="password-error">
              {errorMessages.password}
            </FormFeedback>
          </FormGroup>

          <FormGroup check className="mb-3">
            <Input
              data-cy="accepted-checkbox"
              id="accepted"
              name="accepted"
              type="checkbox"
              checked={formData.accepted}
              onChange={handleChange}
            />

            <Label check htmlFor="accepted">
              Şartları kabul ediyorum
            </Label>
          </FormGroup>

          <Button
            data-cy="login-button"
            type="submit"
            color="primary"
            disabled={!isValid}
          >
            Giriş Yap
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
}