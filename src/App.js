import ContactsList from './components/ContactsList';
import ContactsFilter from './components/ContactsFilter';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from './redux/selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from './components/Button';
import Modal from './components/Modal';
import st from './App.module.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const contacts = useSelector(getVisibleContacts);

  const togleModal = () => setShowModal(!showModal);
  return (
    <div className={st.container}>
      <h1 className={st.title}>PHONEBOOK</h1>
      <Button onClick={togleModal} className={st.btn} value="Add  contact" />
      {showModal && <Modal onClose={togleModal} />}
      <h2 className={st.subtitle}>Contacts</h2>
      {contacts.length > 1 && <ContactsFilter />}
      {contacts.length > 0 && <ContactsList />}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={true}
      />
    </div>
  );
}

export default App;
