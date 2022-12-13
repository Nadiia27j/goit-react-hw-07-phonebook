import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts, getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import { List, Item, ButtonDelete } from './ContactList.styled';

export default function ContactList() {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filtered = useSelector(getFilter);
  
    const visibleContacts = () => {
      const normalizedFilter = filtered.toLowerCase().trim();
  
      if (filtered === '') {
        return contacts;
      }
  
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
    };
  
    const filteredContacts = visibleContacts();
  
    return (
      <List>
        {filteredContacts.map(({ name, number, id }) => (
          <Item key={id}>
            <span>
              {name}: {number}
            </span>
            <ButtonDelete
              type="button"
              onClick={() => dispatch(deleteContacts(id))}
            >
              Delete
            </ButtonDelete>
          </Item>
        ))}
      </List>
    );
  }