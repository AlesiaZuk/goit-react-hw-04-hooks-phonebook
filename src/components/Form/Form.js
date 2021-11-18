import PropTypes from 'prop-types';
import { Component } from 'react';

import s from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleAddContact = () => {
    const { name, number } = this.state;

    this.props.handleAddContact({ name, number });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label className={s.form_label}>
          Name:
          <input
            className={s.form_input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Name Lastname"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={s.form_label}>
          Number
          <input
            className={s.form_input}
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            placeholder="Phone number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button
          className={s.form_button}
          type="submit"
          onClick={this.handleAddContact}
        >
          Add contact
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  handleAddContact: PropTypes.func.isRequired,
};

export default Form;
