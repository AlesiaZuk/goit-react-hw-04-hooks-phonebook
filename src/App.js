import { Component } from 'react';
import { v4 as keyGenerate } from 'uuid';

import Section from './components/Section/Section';
import Form from './components/Form/Form';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';

const sectionClass = ['section'];

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Alesia Zuk', number: '459-12-56' },
      { id: 'id-2', name: 'Aleksandr Zuk', number: '443-89-12' },
      { id: 'id-3', name: 'Viktorija Zuk', number: '645-17-79' },
      { id: 'id-4', name: 'Veronika Zuk', number: '227-91-26' },
    ],

    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleAddContact = ({ name, number }) => {
    const { contacts } = this.state;

    if (
      contacts.find(contact => {
        return contact.name === name;
      })
    ) {
      alert(`${name} is already in contacts`);
    } else {
      const contactsOld = contacts;
      const contactNew = {
        id: keyGenerate(),
        name: name,
        number: number,
      };
      this.setState({
        contacts: [...contactsOld, contactNew],
      });
    }
  };

  handleDeleteContact = e => {
    const { contacts } = this.state;
    const { id } = e.target;

    console.log(id);

    const elementForRemove = contacts.find(contact => contact.id === id);
    const elementForRemoveIndex = contacts.indexOf(elementForRemove);
    contacts.splice(elementForRemoveIndex, 1);
    this.setState({ contacts: [...contacts] });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  render() {
    const { filter } = this.state;

    return (
      <section className={sectionClass}>
        <Section title="Phonebook">
          <Form handleAddContact={this.handleAddContact}></Form>
        </Section>
        <Section title="Contacts">
          <Filter filter={filter} handleChange={this.handleChange}></Filter>
          <Contacts
            filterContacts={this.filterContacts()}
            handleDeleteContact={this.handleDeleteContact}
          ></Contacts>
        </Section>
      </section>
    );
  }
}

export default App;
