import React from 'react';
import PropTypes from 'prop-types';
import css from './Contact.module.css';

class Contact extends React.Component {
  render() {
    const { contacts, onDeleteContact } = this.props;
    return contacts.map(({ id, name, number }) => (
      <li key={id} className={css.contactRow}>
        {name}:{number}{' '}
        <button onClick={() => onDeleteContact(id)}>Delete</button>
      </li>
    ));
  }
}

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
