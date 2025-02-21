import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import s from "./App.module.css";

const App = () => {
  return (
    <div className={s.wraper}>
      <h1 className={s.title}>Phonebook</h1>
      <div className={s.position}>
        <div>
          <ContactForm />
          <SearchBox />
        </div>
        <div>
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default App;
