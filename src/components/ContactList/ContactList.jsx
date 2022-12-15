import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectFilterContacts } from 'redux/selectors';
import { List, Item, ButtonDelete } from './ContactList.styled';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilterContacts);

  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <Item key={id}>
          <span>
            {name}: {number}
          </span>
          <ButtonDelete
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </ButtonDelete>
        </Item>
      ))}
    </List>
  );
};




// const visibleContacts = () => {
//   const normalizedFilter = filtered.toLowerCase().trim();

//   if (filtered === '') {
//     return contacts;
//   }

//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter)
//   );
// };

// const filteredContacts = visibleContacts();
