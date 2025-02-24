import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={s.contactInfo}>
        <p className={s.contactName}>
          <span className={s.span}>name:</span> {name}
        </p>
        <p className={s.contactNumber}>
          <span className={s.span}>number:</span> {number}
        </p>
      </div>
      <button
        className={s.deleteButton}
        type="button"
        onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </>
  );
};

export default Contact;
