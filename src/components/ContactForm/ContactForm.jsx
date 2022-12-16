import { useState } from 'react';
import { Label, Input, Button } from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { nanoid } from '@reduxjs/toolkit';
import { Toaster, toast } from 'react-hot-toast';


export default function ContactForm() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
  
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();
  
    const onChangeInput = e => {
      const { name, value } = e.currentTarget;
  
      switch (name) {
        case 'name':
          setName(value);
          break;
        case 'phone':
          setPhone(value);
          break;
  
        default:
          return;
      }
    };
  
    
    const handleFormSubmit = e => {
      e.preventDefault();
         
      const contact = {
        name,
        phone,
        id: nanoid(),
      };
  
     const checkContact = contacts.find(
        contact => contact.name === name
      );
  
      checkContact
        ? toast(`${name} is  already in contacts.`)
        : dispatch(addContact(contact));
      reset();
    };
  
    const reset = () => {
      setName('');
      setPhone('');
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
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phone}
            onChange={onChangeInput}
          />
        </Label>
        <Toaster position="top-center" reverseOrder={false} />
        <Button type="submit">Add contact</Button>
      </form>
    );
  }