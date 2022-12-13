import { useState } from 'react';
import { Label, Input, Button } from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, getContacts } from 'redux/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
  
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();
  
    const onChangeInput = e => {
      const { name, value } = e.currentTarget;
  
      switch (name) {
        case 'name':
          setName(value);
          break;
        case 'number':
          setNumber(value);
          break;
  
        default:
          return;
      }
    };
  
    
    const handleFormSubmit = e => {
      e.preventDefault();
         
      const contact = {
        name,
        number,
        id: nanoid(),
      };
  
     const checkContact = contacts.find(
        contact => contact.name === name
      );
  
      checkContact
        ? alert(`${name} is  already in contacts.`)
        : dispatch(addContact(contact));
      reset();
    };
  
    const reset = () => {
      setName('');
      setNumber('');
    };
  
    return (
      <form onSubmit={handleFormSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={onChangeInput}
          />
        </Label>
  
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onChangeInput}
          />
        </Label>
  
        <Button type="submit">Add contact</Button>
      </form>
    );
  }