import './App.css';
import { AddContact } from './components/AddContact';
// import { ContactCard } from './components/ContactCard';
import { ContactList } from './components/ContactList';
import { Header } from './components/Header';

function App() {
  const contacts = [
    {
      id: 1,
      name: "dipesh",
      email: "test123@gmail.com"
    },
    {
      id: 3,
      name: "dipesh",
      email: "test123@gmail.com"
    }, {
      id: 3,
      name: "dipesh",
      email: "test123@gmail.com"
    },
  ]
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <br />
      <ContactList  contacts={contacts}/>
    </div>
  );
}

export default App;
