import css from "./ContactForm.module.css";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const ContactForm = () => {
  const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Min 3 symbol!")
      .max(50, "Max 50 symbol!")
      .required("Required"),
    number: Yup.string().required("Required"),
  });

  const dispatch = useDispatch();

  const initialValues = {
    username: "",
    number: "",
  };

  const handleContact = (values, actions) => {
    const newContact = {
      id: crypto.randomUUID(),
      name: values.username.trim(),
      number: values.number.toString().trim(),
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FeedbackSchema}
      onSubmit={handleContact}>
      <Form className={css.formContainer}>
        <label className={css.label}>
          Name:
          <Field
            type="text"
            name="username"
            placeholder="Name. . ."
            className={css.inputField}
          />
          <ErrorMessage
            name="username"
            component="span"
            className={css.errorMessage}
          />
        </label>

        <label className={css.label}>
          Phone number:
          <Field
            type="number"
            placeholder="Number. . ."
            name="number"
            className={css.inputField}
          />
          <ErrorMessage
            name="number"
            component="span"
            className={css.errorMessage}
          />
        </label>

        <button type="submit" className={css.submitButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
